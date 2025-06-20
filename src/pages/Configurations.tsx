import React, { useState } from 'react';
import { Search, Filter, Download, Star, Eye, Lock } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';
import { Link } from 'react-router-dom';

const Configurations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { user } = useAuth();
  const { hasActiveAccess } = useSubscription();

  const categories = ['All', 'Crosshairs', 'Video Settings', 'Audio', 'Binds', 'Complete Setups'];

  const configurations = [
    {
      id: 1,
      name: 'S1mple Perfect Aim',
      category: 'Complete Setups',
      player: 'Aleksandr "s1mple" Kostyliev',
      team: 'NAVI',
      rating: 4.9,
      downloads: '25.2K',
      price: 'Premium',
      preview: 'cl_crosshair_size "2"; cl_crosshair_thickness "1"',
      description: 'Complete configuration used by s1mple in recent tournaments',
      tags: ['Pro Player', 'Tournament Tested', 'High DPI'],
      config: `// S1mple's Professional Configuration
// Crosshair Settings
cl_crosshair_size "2"
cl_crosshair_thickness "1"
cl_crosshair_gap "-3"
cl_crosshair_style "4"
cl_crosshair_color "1"

// Mouse Settings
sensitivity "3.09"
m_rawinput "1"
m_mouseaccel1 "0"
m_mouseaccel2 "0"

// Video Settings
fps_max "0"
mat_queue_mode "2"
r_multicore_rendering "1"`,
    },
    {
      id: 2,
      name: 'ZywOo Precision Crosshair',
      category: 'Crosshairs',
      player: 'Mathieu "ZywOo" Herbaut',
      team: 'G2 Esports',
      rating: 4.8,
      downloads: '18.7K',
      price: 'Premium',
      preview: 'cl_crosshair_style "1"; cl_crosshair_size "3"',
      description: 'Minimal crosshair for maximum precision and visibility',
      tags: ['Pro Player', 'Minimal', 'Precision'],
      config: `// ZywOo's Crosshair Configuration
cl_crosshair_style "1"
cl_crosshair_size "3"
cl_crosshair_thickness "1"
cl_crosshair_gap "-1"
cl_crosshair_color "4"
cl_crosshair_alpha "255"`,
    },
    {
      id: 3,
      name: 'FPS Boost Config',
      category: 'Video Settings',
      player: 'Community',
      team: 'Optimized',
      rating: 4.7,
      downloads: '45.1K',
      price: 'Free',
      preview: 'fps_max "0"; mat_queue_mode "2"',
      description: 'Boost your FPS without sacrificing competitive advantage',
      tags: ['Performance', 'Free', 'Optimized'],
      config: `// FPS Optimization Configuration
fps_max "0"
mat_queue_mode "2"
r_multicore_rendering "1"
r_dynamic "0"
r_shadows "0"
cl_disable_ragdolls "1"`,
    },
    {
      id: 4,
      name: 'NiKo Entry Fragger',
      category: 'Complete Setups',
      player: 'Nikola "NiKo" Kovač',
      team: 'G2 Esports',
      rating: 4.9,
      downloads: '31.4K',
      price: 'Premium',
      preview: 'sensitivity "1.35"; m_rawinput "1"',
      description: 'Aggressive entry fragging setup with optimized sensitivity',
      tags: ['Pro Player', 'Entry Fragger', 'Aggressive'],
      config: `// NiKo's Entry Fragger Configuration
// Mouse Settings
sensitivity "1.35"
m_rawinput "1"
zoom_sensitivity_ratio_mouse "1"

// Crosshair
cl_crosshair_size "1"
cl_crosshair_thickness "1"
cl_crosshair_gap "-2"
cl_crosshair_style "4"

// Binds
bind "mouse1" "+attack"
bind "mouse2" "+attack2"
bind "mwheelup" "+jump"`,
    },
    {
      id: 5,
      name: 'Audio Enhancement Pack',
      category: 'Audio',
      player: 'Community',
      team: 'Pro Team',
      rating: 4.6,
      downloads: '12.3K',
      price: 'Premium',
      preview: 'snd_mixahead "0.05"; snd_headphone_pan_exponent "2"',
      description: 'Hear enemies better with professional audio settings',
      tags: ['Audio', 'Professional', 'Competitive'],
      config: `// Professional Audio Configuration
snd_mixahead "0.05"
snd_headphone_pan_exponent "2"
snd_headphone_pan_radial_weight "2"
snd_legacy_surround "0"
snd_mute_losefocus "1"
voice_scale "0.4"`,
    },
    {
      id: 6,
      name: 'Bind Optimization',
      category: 'Binds',
      player: 'Community',
      team: 'Competitive',
      rating: 4.5,
      downloads: '8.9K',
      price: 'Free',
      preview: 'bind "mouse1" "+attack"; bind "mwheelup" "+jump"',
      description: 'Essential key bindings for competitive advantage',
      tags: ['Binds', 'Free', 'Essential'],
      config: `// Optimized Key Bindings
bind "mouse1" "+attack"
bind "mouse2" "+attack2"
bind "mwheelup" "+jump"
bind "mwheeldown" "+jump"
bind "space" "+jump"
bind "shift" "+speed"
bind "ctrl" "+duck"`,
    },
  ];

  const filteredConfigs = configurations.filter(config => {
    const matchesSearch = config.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         config.player.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         config.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || config.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const canAccess = (config: any) => {
    return config.price === 'Free' || (user && hasActiveAccess());
  };

  const handleDownload = (config: any) => {
    if (!canAccess(config)) {
      return;
    }

    const element = document.createElement('a');
    const file = new Blob([config.config], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${config.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.cfg`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
            CS2 Pro Configurations
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Browse our extensive collection of professional CS2 configurations, tested and approved by pro players.
          </p>
        </div>

        {/* Access Status */}
        {user && (
          <div className="mb-8 text-center">
            {hasActiveAccess() ? (
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm font-medium">Pro Access Active - Download Any Config</span>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-400 text-sm font-medium">Free Access - Limited Configs Available</span>
              </div>
            )}
          </div>
        )}

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Search configurations, players, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-dark-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConfigs.map((config, index) => {
            const hasAccess = canAccess(config);
            return (
              <div
                key={config.id}
                className={`bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl overflow-hidden hover:border-primary-500/50 hover:bg-dark-700/50 transition-all duration-300 animate-fade-up ${
                  !hasAccess ? 'opacity-75' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Header */}
                <div className="p-6 border-b border-dark-600">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{config.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        config.price === 'Free' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-primary-500/20 text-primary-400'
                      }`}>
                        {config.price}
                      </span>
                      {!hasAccess && (
                        <Lock className="w-4 h-4 text-dark-400" />
                      )}
                    </div>
                  </div>
                  <div className="text-primary-400 text-sm font-medium">{config.player}</div>
                  <div className="text-dark-400 text-xs">{config.team}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="bg-dark-900 rounded-lg p-3 mb-4 font-mono text-xs">
                    <div className="text-primary-400 mb-1">// Preview</div>
                    <div className="text-dark-200 truncate">{config.preview}</div>
                  </div>

                  <p className="text-dark-300 text-sm mb-4 line-clamp-2">{config.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {config.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-dark-300">{config.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4 text-dark-400" />
                        <span className="text-sm text-dark-300">{config.downloads}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Preview</span>
                    </button>
                  </div>

                  {/* Action Button */}
                  {hasAccess ? (
                    <button
                      onClick={() => handleDownload(config)}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download Config
                    </button>
                  ) : (
                    <Link
                      to={user ? "/purchase" : "/login"}
                      className="w-full block text-center bg-dark-700 hover:bg-dark-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 border border-dark-500 hover:border-primary-400"
                    >
                      <Lock className="w-4 h-4 inline mr-2" />
                      {user ? 'Upgrade to Access' : 'Login to Access'}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredConfigs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-dark-400 text-lg">No configurations found matching your criteria.</div>
            <p className="text-dark-500 mt-2">Try adjusting your search or filter settings.</p>
          </div>
        )}

        {/* Upgrade CTA for non-premium users */}
        {user && !hasActiveAccess() && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary-600/10 via-dark-900 to-primary-500/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Unlock All Pro Configurations</h3>
              <p className="text-dark-300 mb-6">
                Get instant access to all professional configurations, including exclusive pro player setups and advanced optimization guides.
              </p>
              <Link
                to="/purchase"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Configurations;