import { Link } from "wouter";

export function  NavigationCard({ title, description, icon,accentColor, path }) {
  return (
    <div 
      className={`relative overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 
        hover:shadow-xl hover:scale-105 hover:shadow-${accentColor}/10 cursor-pointer h-full`}
    >
     <Link to={path}>
      <div className={`absolute top-0 left-0 w-1.5 h-full ${accentColor}`} />
      <div className="p-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full 
          bg-${accentColor}/10 text-${accentColor} mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      </Link>
    </div>
  );
};
