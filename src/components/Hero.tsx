
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn <span className="heading-gradient">Coding</span> and <span className="heading-gradient">Development</span> Skills
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Master programming skills with our interactive courses. From beginner to advanced, we've got you covered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" size="lg">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary">
                View Free Resources
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-medium text-gray-600">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">15,000+</span> students already enrolled
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-60 blur-xl"></div>
            
            <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-8 card-hover">
              <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              
              <h3 className="text-xl font-bold text-gray-800">Full Stack Web Development</h3>
              <p className="mt-2 text-gray-600">Master frontend and backend technologies</p>
              
              <div className="mt-6 flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0 (2.5k+ reviews)</span>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>500+ hours of content</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Real-world projects</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Job placement assistance</span>
                </div>
              </div>
              
              <Button className="mt-8 w-full btn-primary">Start Learning Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
