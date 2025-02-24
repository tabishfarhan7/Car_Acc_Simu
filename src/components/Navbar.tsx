
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-sim-blue">CrashSim</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <a href="#features" className="text-sim-darkGray hover:text-sim-blue px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-sim-darkGray hover:text-sim-blue px-3 py-2 text-sm font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="text-sim-darkGray hover:text-sim-blue px-3 py-2 text-sm font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="text-sim-darkGray hover:text-sim-blue px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <Button className="bg-sim-blue hover:bg-sim-blue/90">Get Started</Button>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-sim-darkGray hover:text-sim-blue focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-sim-darkGray hover:text-sim-blue"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-base font-medium text-sim-darkGray hover:text-sim-blue"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-sim-darkGray hover:text-sim-blue"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-sim-darkGray hover:text-sim-blue"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-sim-blue hover:bg-sim-blue/90">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
