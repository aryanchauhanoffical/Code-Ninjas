
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Developer at Google",
    image: "https://i.pravatar.cc/150?img=32",
    content: "The DSA course by Coding Ninjas helped me crack my Google interview. The instructors explain complex concepts in a simple way and the problems are challenging but approachable.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=11",
    content: "After completing the Web Development course, I was able to build professional web applications and land a job at a startup. The course covers all modern technologies and best practices.",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    role: "Machine Learning Engineer",
    image: "https://i.pravatar.cc/150?img=5",
    content: "The Machine Learning course by Coding Ninjas provides a perfect balance of theory and practical applications. The assignments are well-designed and the mentors are always available to help.",
  },
  {
    id: 4,
    name: "Aman Patel",
    role: "Android Developer at Amazon",
    image: "https://i.pravatar.cc/150?img=12",
    content: "I was struggling with Android development before I joined Coding Ninjas. Their structured approach and project-based learning helped me master the concepts quickly.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 2; // Number of testimonials to display at once
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  
  // Get the testimonials to display based on current index
  const visibleTestimonials = [];
  for (let i = 0; i < displayCount; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="heading-gradient">Students</span> Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from the students who have transformed their careers with our courses.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 shadow-sm card-hover">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.content}"</p>
                <div className="mt-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-primary mb-2">Ready to start your journey?</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Join thousands of successful students today
          </h3>
          <div className="mt-8">
            <button className="btn-primary px-8 py-3 text-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
