
import { Users, BookOpen, Building, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: "15,000+",
    label: "Students",
    description: "Enrolled in our courses",
    icon: Users,
  },
  {
    id: 2,
    value: "200+",
    label: "Courses",
    description: "Across various domains",
    icon: BookOpen,
  },
  {
    id: 3,
    value: "500+",
    label: "Companies",
    description: "Hiring our students",
    icon: Building,
  },
  {
    id: 4,
    value: "95%",
    label: "Success Rate",
    description: "In job placements",
    icon: Award,
  }
];

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="heading-gradient">Impact</span> in Numbers
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We've helped thousands of students achieve their goals and transform their careers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white rounded-xl p-8 text-center shadow-md card-hover"
            >
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-lg font-semibold text-primary mt-1">{stat.label}</p>
              <p className="text-gray-500 text-sm mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Leading Companies Trust Us</h3>
              <p className="mt-4 text-gray-600">
                Our students are working at top tech companies worldwide. Our curriculum is designed 
                with industry requirements in mind.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Company {i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
