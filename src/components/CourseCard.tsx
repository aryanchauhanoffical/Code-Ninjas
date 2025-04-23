
import { Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  popular?: boolean;
}

const CourseCard = ({
  title,
  description,
  image,
  duration,
  students,
  rating,
  popular = false,
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="relative">
        {popular && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            POPULAR
          </div>
        )}
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>{students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 text-yellow-400 fill-current" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <Button className="w-full btn-primary">View Course</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
