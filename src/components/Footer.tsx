import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-bold text-2xl mb-4">
              Coding Ninjas
            </div>
            <p className="mb-4">
              Empowering students to become industry-ready developers and
              programmers through high-quality courses and mentorship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Structures & Algorithms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Android Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Competitive Programming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Interview Preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <span>support@codingninjas.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <span>Delhi, Bengaluru, Gurugram, Noida, and online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Coding Ninjas. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
