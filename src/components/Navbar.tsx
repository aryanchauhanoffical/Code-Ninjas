import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-2xl">
                Coding Ninjas
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:text-primary">
                  Courses <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Web Development
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Data Structures & Algorithms
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Machine Learning
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:text-primary">
                  Practice <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Coding Problems
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Interview Experiences
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Contest
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Community
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Career Camp
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
            </div>

            <div className="ml-4 flex items-center space-x-4">
              <Button variant="ghost" className="text-primary">
                Login
              </Button>
              <Button className="btn-primary">Sign Up</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="block px-3 py-2 text-base font-medium text-gray-700">
              Courses
              <div className="pl-4 mt-1 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Data Structures & Algorithms
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Machine Learning
                </a>
              </div>
            </div>

            <div className="block px-3 py-2 text-base font-medium text-gray-700">
              Practice
              <div className="pl-4 mt-1 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Coding Problems
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Interview Experiences
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Contest
                </a>
              </div>
            </div>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Community
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Career Camp
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              About Us
            </a>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-center text-primary"
                >
                  Login
                </Button>
                <Button className="w-full justify-center btn-primary">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
