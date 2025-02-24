
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Driving Instructor',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    quote: 'This simulator has transformed how I teach new drivers. The realistic scenarios help students understand potential dangers without putting them at risk.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Fleet Safety Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: "We've reduced our fleet accident rate by 34% since implementing this training program. The ROI has been incredible.",
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Insurance Risk Analyst',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    quote: 'The depth of scenarios and analytics provided by this simulator gives us valuable insights into driving behaviors and risk factors.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-sim-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sim-yellow font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by Industry Professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 lg:mx-auto">
            See what our clients say about their experience with our accident simulation technology.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name} 
                className="bg-white rounded-lg shadow-lg p-6 relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-sim-darkGray">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-sim-yellow fill-sim-yellow' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <blockquote>
                  <p className="text-gray-600">{`"${testimonial.quote}"`}</p>
                </blockquote>
                <div className="absolute -top-2 -left-2 text-5xl text-sim-blue opacity-20 font-serif">"</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
