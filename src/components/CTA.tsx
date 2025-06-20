import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600/10 via-dark-900 to-primary-500/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 blur-3xl rounded-full" />
          
          <div className="relative bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-3xl p-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center animate-pulse-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
              Ready to Dominate CS2?
            </h2>
            
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              Join over 50,000 players who trust our professional configurations. 
              Get instant access to pro-level settings and start climbing the ranks today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/purchase"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                Get Pro Access Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/configs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-transparent text-primary-400 border border-primary-400 hover:bg-primary-400 hover:text-white rounded-xl transition-all duration-200"
              >
                View All Configs
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-dark-400">
              <span>✓ Instant Download</span>
              <span className="mx-4">✓ VAC Safe</span>
              <span>✓ 30-Day Money Back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;