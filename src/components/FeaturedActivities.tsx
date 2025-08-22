
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

type ActivityProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
}

const ActivityCard: React.FC<ActivityProps> = ({ title, description, image, link, delay }) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-md transition-all duration-500 animate-fade-in",
        "hover:shadow-xl card-hover"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 p-6 w-full">
        <h3 className="text-2xl font-display font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-white group-hover:translate-x-1 transition-transform duration-300"
        >
          Explore <ArrowRight size={16} className="ml-1  "  />
        </Link>
      </div>
    </div>
  );
};

const FeaturedActivities: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: "Culture Moment",
      description: "Navigate the thrilling rapids Culture of Hadzabe.",
      image: "https://sirikwatravel.com/wp-content/uploads/2023/03/Hadzabe-tribe.jpg",
      link: "/activities#culture-moment"
    },
    {
      id: 2,
      title: "Ballon Safari",
      description: "Explore the rich biodiversity of Serenget Wildlife In the air.",
      image: "https://dailynews.co.tz/wp-content/uploads/2024/11/ONH-Balloon-Safari-Blog-3-2023-1024x768-1.jpg",
      link: "/activities#wildlife-safari"
    },
    {
      id: 3,
      title: "Kilimanjaro trekking",
      description: "Embark on guided treks through highest mountain in Africa.",
      image: "https://57hours.com/wp-content/uploads/2023/08/women-only-kilimanjaro-trek-via-lemosho-route.jpg",
      link: "/activities#jungle-trekking"
    },
    {
      id: 4,
      title: "Tarangire safari",
      description: "See the bigFive elephant in BaoBao Tree.",
      image: "https://www.ngorongorocratertanzania.org/wp-content/uploads/2019/07/tarangire.jpg",
      link: "/activities#kayaking"
    }
  ];
  
  return (
    <section className="section-padding container">
      <ScrollAnimationWrapper animation="animate-slide-up opacity-100" className="mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Experiences</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Discover the thrill and tranquility of our curated adventures in the heart of Tanzania wilderness.
          </p>
        </div>
      </ScrollAnimationWrapper>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <ScrollAnimationWrapper 
            key={activity.id}
            animation="animate-slide-up opacity-100" 
            delay={index * 150}
            threshold={0.2}
          >
            <ActivityCard 
              title={activity.title}
              description={activity.description}
              image={activity.image}
              link={activity.link}
              delay={index * 100}
            />
          </ScrollAnimationWrapper>
        ))}
      </div>
      
      <ScrollAnimationWrapper animation="animate-fade-in opacity-100" delay={600}>
        <div className="text-center mt-12">
          <Link 
            to="/activities" 
            className="btn-primary inline-flex items-center"
          >
            View All Activities <ArrowRight size={0} className="ml-1" />
          </Link>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default FeaturedActivities;
