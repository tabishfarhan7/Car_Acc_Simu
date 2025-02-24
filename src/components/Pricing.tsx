
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '49',
    frequency: '/month',
    description: 'Perfect for driving schools starting with simulation training.',
    features: [
      '10 standard accident scenarios',
      'Basic performance analytics',
      'Single user license',
      'Email support',
      'Regular updates',
    ],
    cta: 'Start Basic',
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: '99',
    frequency: '/month',
    description: 'Ideal for driving schools and fleet management companies.',
    features: [
      '50+ accident scenarios',
      'Advanced analytics dashboard',
      '5 user licenses',
      'Priority email & phone support',
      'Custom scenario creation',
      'Training certification',
    ],
    cta: 'Start Professional',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: '249',
    frequency: '/month',
    description: 'For large organizations with comprehensive training needs.',
    features: [
      'Unlimited accident scenarios',
      'Real-time analytics & reporting',
      'Unlimited user licenses',
      'Dedicated support manager',
      'Custom integration options',
      'Hardware compatibility package',
      'VR support',
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-sim-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sim-red font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sim-darkGray sm:text-4xl">
            Plans for Every Need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the right plan for your organization's safety training requirements.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border ${
                tier.mostPopular
                  ? 'border-sim-blue shadow-xl'
                  : 'border-gray-200'
              } p-8 ${tier.mostPopular ? 'lg:-mt-8' : ''}`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 py-1.5 px-4 bg-sim-blue rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most Popular
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-sim-darkGray">{tier.name}</h3>
                <p className="mt-4 flex items-baseline text-sim-darkGray">
                  <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                  <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-sim-blue" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className={`mt-8 w-full ${
                  tier.mostPopular
                    ? 'bg-sim-blue hover:bg-sim-blue/90'
                    : 'bg-sim-blue/80 hover:bg-sim-blue'
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
