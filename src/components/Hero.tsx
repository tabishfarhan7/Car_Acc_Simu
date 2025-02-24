
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-sim-blue to-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto pt-20 pb-12">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="text-center lg:text-left">
              <div className="sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full bg-sim-yellow/10 px-3 py-1 text-sm leading-6 text-white ring-1 ring-sim-yellow/20 hover:ring-sim-yellow/30">
                  New: Virtual Reality Support Added
                  <a href="#pricing" className="font-semibold text-sim-yellow ml-1">
                    <span className="absolute inset-0" aria-hidden="true"></span>Learn more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Experience Realistic</span>{' '}
                <span className="block text-sim-yellow xl:inline">Car Accident Simulation</span>
              </h1>
              <p className="mt-3 text-base text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Improve driver safety education and awareness through our state-of-the-art simulation technology. Train effectively with realistic scenarios without real-world risks.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md text-sim-darkGray bg-sim-yellow hover:bg-sim-yellow/90 md:py-6 md:text-lg md:px-10">
                    Try Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md border border-white text-white bg-transparent hover:bg-white/10 md:py-6 md:text-lg md:px-10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </main>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-full w-full bg-gradient-to-r from-transparent to-black/30 absolute z-10"></div>
            <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full bg-[url('https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
