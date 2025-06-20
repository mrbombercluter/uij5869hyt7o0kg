import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Mail, MessageCircle, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                CS2 Configs Pro
              </span>
            </Link>
            <p className="text-dark-300 leading-relaxed mb-6 max-w-md">
              Professional CS2 configurations trusted by over 50,000 players worldwide. 
              Elevate your game with pro-tested settings and dominate the competition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/configs" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Configurations
                </Link>
              </li>
              <li>
                <Link to="/purchase" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Purchase
                </Link>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-dark-300">
                <Mail className="w-4 h-4" />
                <span>support@cs2configspro.com</span>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Discord Community
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-400 text-sm">
              © {currentYear} CS2 Configs Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;