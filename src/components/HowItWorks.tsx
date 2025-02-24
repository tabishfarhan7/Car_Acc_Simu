
import React from 'react';
import { Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sim-red font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sim-darkGray sm:text-4xl">
            Simple, Intuitive Experience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our simulation platform is designed to be easy to use while providing a powerful learning experience.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <div className="relative lg:pr-8">
                <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg shadow-xl overflow-hidden bg-sim-blue">
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1558213358-2ddb4c85d4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-sim-blue border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-sim-darkGray">The Simulation Process</h3>
              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sim-blue text-white">
                      <span className="font-bold text-xl">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-sim-darkGray">Choose Your Scenario</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Select from a variety of pre-configured accident scenarios or customize your own with specific road conditions and vehicle types.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sim-blue text-white">
                      <span className="font-bold text-xl">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-sim-darkGray">Experience the Simulation</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Take control of a virtual vehicle using our intuitive controls. React to developing situations just as you would in real life.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sim-blue text-white">
                      <span className="font-bold text-xl">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-sim-darkGray">Review & Learn</h4>
                    <p className="mt-2 text-base text-gray-500">
                      After each simulation, receive detailed feedback on your performance, including reaction time, decision points, and safety recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sim-blue text-white">
                      <span className="font-bold text-xl">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-sim-darkGray">Track Progress</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Monitor improvement over time with our comprehensive progress tracking system designed to highlight areas of growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
