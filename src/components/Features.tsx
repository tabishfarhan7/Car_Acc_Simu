
import React from 'react';
import { Shield, Database, Layout, Monitor, Award, Zap } from 'lucide-react';

const features = [
  {
    name: 'Realistic Physics Engine',
    description: 'Our simulation uses advanced physics to accurately model vehicle dynamics, collision impacts, and environmental factors.',
    icon: Database,
  },
  {
    name: 'Multiple Scenarios',
    description: 'Practice with over 50 different accident scenarios covering various road conditions, weather, and traffic situations.',
    icon: Layout,
  },
  {
    name: 'Driver Analysis',
    description: 'Get detailed feedback on your reactions, decision-making process, and areas for improvement.',
    icon: Monitor,
  },
  {
    name: 'Safety Education',
    description: 'Learn proper defensive driving techniques and understand the physics behind vehicle accidents.',
    icon: Shield,
  },
  {
    name: 'Certified Training',
    description: 'Our simulation program is certified by transportation safety authorities for driver education.',
    icon: Award,
  },
  {
    name: 'High Performance',
    description: 'Runs smoothly on standard hardware with options for high-end VR compatibility for the most immersive experience.',
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-sim-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sim-red font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sim-darkGray sm:text-4xl">
            Experience Realistic Simulation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our accident simulator offers cutting-edge features designed to provide the most realistic and educational experience.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sim-blue rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-sim-darkGray tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
