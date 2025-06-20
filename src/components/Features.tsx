import React from 'react';
import { Target, Zap, Trophy, Shield, Gamepad2, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Crosshairs',
      description: 'Pro-tested crosshair configurations for maximum accuracy and visibility in any situation.',
    },
    {
      icon: Zap,
      title: 'FPS Optimization',
      description: 'Boost your frame rate with performance configs that maintain visual quality.',
    },
    {
      icon: Trophy,
      title: 'Pro Player Setups',
      description: 'Configurations used by professional players in major tournaments and leagues.',
    },
    {
      icon: Shield,
      title: 'Anti-Cheat Safe',
      description: 'All configurations are VAC-safe and approved for competitive matchmaking.',
    },
    {
      icon: Gamepad2,
      title: 'Complete Binds',
      description: 'Optimized key bindings and mouse settings for competitive advantage.',
    },
    {
      icon: TrendingUp,
      title: 'Rank Up Faster',
      description: 'Proven configurations that help players climb the competitive ladder.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
            Why Choose Our Configurations?
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Every configuration is meticulously crafted and tested by professional players to give you the ultimate competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-8 hover:border-primary-500/50 hover:bg-dark-700/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;