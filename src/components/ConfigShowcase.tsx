import React from 'react';
import { Star, Download, Eye } from 'lucide-react';

const ConfigShowcase = () => {
  const configs = [
    {
      name: 'S1mple Precision',
      player: 'Aleksandr "s1mple" Kostyliev',
      team: 'NAVI',
      rating: 4.9,
      downloads: '15.2K',
      preview: 'Crosshair: Style 4, Size 2, Gap -3',
      description: 'Perfect for rifling and precise long-range shots',
    },
    {
      name: 'ZywOo Domination',
      player: 'Mathieu "ZywOo" Herbaut',
      team: 'G2 Esports',
      rating: 4.8,
      downloads: '12.8K',
      preview: 'Crosshair: Style 1, Size 3, Thickness 1',
      description: 'Optimal for aggressive playstyles and entries',
    },
    {
      name: 'NiKo Ultimate',
      player: 'Nikola "NiKo" Kovač',
      team: 'G2 Esports',
      rating: 4.9,
      downloads: '18.5K',
      preview: 'Crosshair: Style 4, Size 1, Gap -2',
      description: 'Designed for maximum accuracy and headshots',
    },
  ];

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
            Featured Pro Configurations
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Discover the exact settings that helped these legends dominate the professional scene.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {configs.map((config, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-800 to-dark-700 border border-dark-600 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="p-6 border-b border-dark-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{config.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-dark-200">{config.rating}</span>
                  </div>
                </div>
                <div className="text-primary-400 font-semibold">{config.player}</div>
                <div className="text-sm text-dark-300">{config.team}</div>
              </div>

              {/* Preview */}
              <div className="p-6">
                <div className="bg-dark-900 rounded-lg p-4 mb-4 font-mono text-sm">
                  <div className="text-primary-400 mb-2">// Configuration Preview</div>
                  <div className="text-dark-200">{config.preview}</div>
                </div>
                <p className="text-dark-300 mb-6">{config.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4 text-dark-400" />
                    <span className="text-sm text-dark-300">{config.downloads} downloads</span>
                  </div>
                  <button className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Preview</span>
                  </button>
                </div>

                {/* Action button */}
                <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Get This Config
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfigShowcase;