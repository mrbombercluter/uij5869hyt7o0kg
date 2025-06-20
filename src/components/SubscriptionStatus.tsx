import React from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { Crown, CheckCircle, Clock } from 'lucide-react';

const SubscriptionStatus: React.FC = () => {
  const { loading, getActiveProductName, hasActiveAccess } = useSubscription();

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-dark-400">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500"></div>
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  const productName = getActiveProductName();
  const hasAccess = hasActiveAccess();

  if (!hasAccess) {
    return (
      <div className="flex items-center space-x-2 text-dark-400">
        <Clock className="w-4 h-4" />
        <span className="text-sm">No active plan</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1 text-primary-400">
        <CheckCircle className="w-4 h-4" />
        <Crown className="w-4 h-4" />
      </div>
      <span className="text-sm text-white font-medium">
        {productName || 'Pro Access'}
      </span>
    </div>
  );
};

export default SubscriptionStatus;