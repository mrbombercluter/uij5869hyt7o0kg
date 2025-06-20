import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex "ProAim" Johnson',
      rank: 'Global Elite',
      rating: 5,
      text: 'These configs completely transformed my gameplay. Went from DMG to Global in just 2 months!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      name: 'Maria "FragQueen" Santos',
      rank: 'Supreme Master',
      rating: 5,
      text: 'The FPS optimization alone was worth it. My game runs smoother than ever before.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      name: 'David "Clutch" Kim',
      rank: 'Legendary Eagle',
      rating: 5,
      text: 'Pro-level configurations that actually work. My headshot percentage increased by 40%!',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Join thousands of players who have elevated their game with our professional configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-8 hover:border-primary-500/50 hover:bg-dark-700/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary-400 mb-6" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-dark-200 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-primary-400">{testimonial.rank}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;