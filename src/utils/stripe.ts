import { supabase } from '../lib/supabase';
import { sendDiscordNotification, getLocationInfo } from './discord';
import { getProductByPriceId } from '../stripe-config';

export interface CheckoutParams {
  priceId: string;
  mode: 'payment' | 'subscription';
  successUrl?: string;
  cancelUrl?: string;
}

export const createCheckoutSession = async ({
  priceId,
  mode,
  successUrl = `${window.location.origin}/success`,
  cancelUrl = `${window.location.origin}/purchase`,
}: CheckoutParams) => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.access_token) {
    throw new Error('User not authenticated');
  }

  // Get location info for Discord notification
  const locationInfo = await getLocationInfo();
  const product = getProductByPriceId(priceId);

  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        price_id: priceId,
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      
      // Send Discord notification for failed attempt
      await sendDiscordNotification({
        timezone: locationInfo.timezone,
        country: locationInfo.country,
        product: product?.name || 'Unknown Product',
        paymentMethod: 'Card (Stripe)',
        paid: false
      });
      
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const { url } = await response.json();
    
    if (url) {
      // Send Discord notification for successful checkout session creation
      await sendDiscordNotification({
        timezone: locationInfo.timezone,
        country: locationInfo.country,
        product: product?.name || 'Unknown Product',
        paymentMethod: 'Card (Stripe)',
        paid: false // Will be updated to true when payment completes via webhook
      });
      
      window.location.href = url;
    } else {
      throw new Error('No checkout URL received');
    }
  } catch (error) {
    // Send Discord notification for error
    await sendDiscordNotification({
      timezone: locationInfo.timezone,
      country: locationInfo.country,
      product: product?.name || 'Unknown Product',
      paymentMethod: 'Card (Stripe)',
      paid: false
    });
    
    throw error;
  }
};