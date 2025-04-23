
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    description: "Master fundamental programming concepts with our comprehensive DSA course designed for beginners and intermediates.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration: "40 weeks",
    students: 15000,
    rating: 4.8,
    category: "programming",
    popular: true,
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    description: "Learn to build complete web applications with modern technologies like React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    duration: "30 weeks",
    students: 12500,
    rating: 4.9,
    category: "web",
    popular: true,
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    description: "Dive into the world of AI and learn to build intelligent systems that can learn from data.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    duration: "24 weeks",
    students: 8200,
    rating: 4.7,
    category: "data",
  },
  {
    id: 4,
    title: "Android App Development",
    description: "Learn to build native Android applications using Kotlin and modern Android development practices.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    duration: "20 weeks",
    students: 9500,
    rating: 4.5,
    category: "mobile",
  },
  {
    id: 5,
    title: "Competitive Programming",
    description: "Prepare for coding competitions and technical interviews with advanced problem-solving techniques.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    duration: "16 weeks",
    students: 7300,
    rating: 4.6,
    category: "programming",
  },
  {
    id: 6,
    title: "iOS Development with Swift",
    description: "Master iOS app development using Swift and the latest Apple frameworks and tools.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    duration: "22 weeks",
    students: 6800,
    rating: 4.7,
    category: "mobile",
  },
];

const categories = [
  { id: "all", name: "All Courses" },
  { id: "programming", name: "Programming" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Development" },
  { id: "data", name: "Data Science" },
];

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="heading-gradient">Popular</span> Courses
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of courses designed to help you master the skills 
            needed for today's tech industry.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category.id 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:text-primary"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              duration={course.duration}
              students={course.students}
              rating={course.rating}
              popular={course.popular}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="btn-secondary">
            View All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
