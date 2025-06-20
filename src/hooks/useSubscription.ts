import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import { getProductByPriceId } from '../stripe-config';

export interface UserSubscription {
  customer_id: string;
  subscription_id: string | null;
  subscription_status: 'not_started' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'paused';
  price_id: string | null;
  current_period_start: number | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
}

export interface UserOrder {
  customer_id: string;
  order_id: number;
  checkout_session_id: string;
  payment_intent_id: string;
  amount_subtotal: number;
  amount_total: number;
  currency: string;
  payment_status: string;
  order_status: 'pending' | 'completed' | 'canceled';
  order_date: string;
}

export const useSubscription = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [orders, setOrders] = useState<UserOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setOrders([]);
      setLoading(false);
      return;
    }

    const fetchSubscriptionData = async () => {
      try {
        // Fetch subscription data
        const { data: subscriptionData, error: subscriptionError } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle();

        if (subscriptionError) {
          console.error('Error fetching subscription:', subscriptionError);
        } else {
          setSubscription(subscriptionData);
        }

        // Fetch orders data
        const { data: ordersData, error: ordersError } = await supabase
          .from('stripe_user_orders')
          .select('*')
          .order('order_date', { ascending: false });

        if (ordersError) {
          console.error('Error fetching orders:', ordersError);
        } else {
          setOrders(ordersData || []);
        }
      } catch (error) {
        console.error('Error fetching subscription data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionData();
  }, [user]);

  const getActiveProductName = (): string | null => {
    // Check for completed orders first (one-time purchases)
    const completedOrder = orders.find(order => order.order_status === 'completed');
    if (completedOrder) {
      return "Pikaware's configuration";
    }

    // Check for active subscription
    if (subscription?.subscription_status === 'active' && subscription.price_id) {
      const product = getProductByPriceId(subscription.price_id);
      return product?.name || null;
    }

    return null;
  };

  const hasActiveAccess = (): boolean => {
    // Check for completed orders (one-time purchases)
    const hasCompletedOrder = orders.some(order => order.order_status === 'completed');
    if (hasCompletedOrder) {
      return true;
    }

    // Check for active subscription
    return subscription?.subscription_status === 'active';
  };

  return {
    subscription,
    orders,
    loading,
    getActiveProductName,
    hasActiveAccess,
  };
};