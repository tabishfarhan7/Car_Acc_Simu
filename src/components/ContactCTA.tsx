
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="bg-sim-blue">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to improve safety?</span>
          <span className="block text-sim-yellow">Try our simulator today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button className="bg-sim-yellow hover:bg-sim-yellow/90 text-sim-darkGray px-8 py-6">
              Get Started
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
