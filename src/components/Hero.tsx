import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-primary-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Stats bar */}
          <div className="inline-flex items-center space-x-8 mb-8 p-4 bg-dark-800/50 backdrop-blur-sm rounded-full border border-dark-600 animate-fade-up">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-dark-200">50K+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-dark-200">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-dark-200">Pro Approved</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-white via-dark-100 to-dark-300 bg-clip-text text-transparent">
              Dominate CS2 with
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Pro Configurations
            </span>
          </h1>

          <p className="text-xl text-dark-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Unlock your full potential with professional CS2 configurations used by top-tier players. 
            Improve your aim, boost FPS, and gain the competitive edge you need to climb the ranks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/purchase"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Get Pro Configs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/configs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-dark-700 hover:bg-dark-600 text-white border border-dark-500 hover:border-primary-400 rounded-xl transition-all duration-200"
            >
              View Configurations
            </Link>
          </div>
        </div>

        {/* Preview showcase */}
        <div className="mt-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl border border-dark-600 p-8 shadow-2xl">
              <div className="bg-dark-900 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-dark-400 text-xs ml-4">autoexec.cfg</span>
                </div>
                <div className="space-y-2 text-dark-200">
                  <div><span className="text-primary-400">// Pro Player Config</span></div>
                  <div><span className="text-blue-400">cl_crosshair_size</span> <span className="text-green-400">"2"</span></div>
                  <div><span className="text-blue-400">cl_crosshair_thickness</span> <span className="text-green-400">"1"</span></div>
                  <div><span className="text-blue-400">fps_max</span> <span className="text-green-400">"0"</span></div>
                  <div><span className="text-primary-400">// Optimized for competitive play</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;