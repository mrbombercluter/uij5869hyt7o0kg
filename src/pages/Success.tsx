import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Download, ArrowRight, Trophy } from 'lucide-react';
import { useSubscription } from '../hooks/useSubscription';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { getActiveProductName } = useSubscription();
  const [productName, setProductName] = useState<string | null>(null);

  useEffect(() => {
    // Get the product name after a short delay to allow webhook processing
    const timer = setTimeout(() => {
      const name = getActiveProductName();
      setProductName(name);
    }, 2000);

    return () => clearTimeout(timer);
  }, [getActiveProductName]);

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative">
          {/* Success animation */}
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Payment Successful! 🎉
          </h1>

          <p className="text-xl text-dark-200 mb-8 leading-relaxed">
            Welcome to the pro league! Your purchase has been completed successfully.
            {productName && (
              <span className="block mt-2 text-primary-400 font-semibold">
                You now have access to {productName}
              </span>
            )}
          </p>

          {/* What's next section */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Trophy className="w-6 h-6 mr-2 text-primary-400" />
              What's Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-3">📁 Download Your Configs</h3>
                <p className="text-dark-300 text-sm">
                  Access all professional configurations from the configurations page. 
                  Each config includes detailed setup instructions.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-3">🎯 Start Dominating</h3>
                <p className="text-dark-300 text-sm">
                  Apply the pro settings and watch your gameplay improve immediately. 
                  Join thousands of satisfied customers!
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/configs"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5" />
              Access Your Configs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-dark-700 hover:bg-dark-600 text-white border border-dark-500 hover:border-primary-400 rounded-xl transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>

          {/* Support info */}
          <div className="text-sm text-dark-400">
            <p>
              Need help? Contact our support team at{' '}
              <a href="mailto:support@cs2configspro.com" className="text-primary-400 hover:text-primary-300">
                support@cs2configspro.com
              </a>
            </p>
            {sessionId && (
              <p className="mt-2">
                Transaction ID: <span className="font-mono text-dark-300">{sessionId}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;