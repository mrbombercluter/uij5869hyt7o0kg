import React, { useState } from 'react';
import { Check, Star, Crown, Zap, Shield, Users, AlertCircle } from 'lucide-react';
import { stripeProducts } from '../stripe-config';
import { createCheckoutSession } from '../utils/stripe';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';
import AuthGuard from '../components/AuthGuard';

const Purchase = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const { hasActiveAccess, getActiveProductName } = useSubscription();

  const handlePurchase = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) {
      return;
    }

    setLoading(priceId);
    setError(null);

    try {
      await createCheckoutSession({
        priceId,
        mode,
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/purchase`,
      });
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Failed to start checkout process');
    } finally {
      setLoading(null);
    }
  };

  const testimonials = [
    {
      name: 'Tyler "ace" Johnson',
      rank: 'Global Elite',
      text: 'Worth every penny. My aim improved dramatically!',
      rating: 5,
    },
    {
      name: 'Sarah "headshot" Chen',
      rank: 'Supreme Master',
      text: 'The pro configurations are game-changing.',
      rating: 5,
    },
  ];

  return (
    <AuthGuard>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
              Choose Your Path to CS2 Mastery
            </h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
              Unlock professional CS2 configurations used by the world's best players. 
              Start dominating the competition today.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-dark-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>VAC Safe Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>50,000+ Happy Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Average Rating</span>
              </div>
            </div>
          </div>

          {/* Current Access Status */}
          {hasActiveAccess() && (
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">You Have Active Access!</h3>
                <p className="text-green-400">
                  Current plan: <span className="font-semibold">{getActiveProductName()}</span>
                </p>
                <p className="text-dark-300 mt-2">
                  You can access all configurations from the configurations page.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400">{error}</p>
              </div>
            </div>
          )}

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
            {stripeProducts.map((product, index) => {
              const isLoading = loading === product.priceId;
              return (
                <div
                  key={product.priceId}
                  className="relative bg-dark-800/50 backdrop-blur-sm border border-primary-500 ring-2 ring-primary-500/20 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>

                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-dark-300 mb-4">{product.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">€{product.price.toFixed(2)}</span>
                      <span className="text-dark-400 ml-2">one-time</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      'All 50+ configurations',
                      'Complete pro player setups',
                      'Advanced crosshair collection',
                      'Video & audio optimization',
                      'Custom key bindings',
                      'Priority support',
                      'Exclusive pro tips',
                      'Lifetime updates',
                    ].map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-dark-200">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePurchase(product.priceId, product.mode)}
                    disabled={isLoading || hasActiveAccess()}
                    className="w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-primary-500/50 disabled:to-primary-600/50 text-white shadow-xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : hasActiveAccess() ? (
                      'Already Purchased'
                    ) : (
                      'Get Pro Access'
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mb-16">
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-8 max-w-2xl mx-auto">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">30-Day Money Back Guarantee</h3>
              <p className="text-dark-300 leading-relaxed">
                Try our configurations risk-free. If you don't see improvement in your gameplay within 30 days, 
                we'll refund every penny. No questions asked.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-dark-200 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-primary-400">{testimonial.rank}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Are these configurations VAC safe?',
                  answer: 'Absolutely! All our configurations only use official CS2 console commands and are completely VAC safe. Thousands of players use them without any issues.',
                },
                {
                  question: 'Do I get lifetime updates?',
                  answer: 'Yes! Once you purchase any plan, you get lifetime access to all updates and new configurations we add to the collection.',
                },
                {
                  question: 'Can I use these in competitive matches?',
                  answer: 'Yes, all configurations are designed specifically for competitive play and are used by professional players in tournaments.',
                },
                {
                  question: 'What if the configs don\'t work for me?',
                  answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact us for a full refund.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-dark-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Purchase;