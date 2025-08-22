
import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import TiltCard from './TiltCard';
import { animated, useSpring } from '@react-spring/web';

const attractions = [
  {
    id: 1,
    name: "Kilimanjaro Trekking",
    description: "Climb the highest  Mountain in Africa and experince the breathtaking in the highest mountain in tanzania Mount Kilimanjaro.",
    distance: "15 km",
    image: "https://www.kilimanjarotrekking.com/wp-content/uploads/2024/07/Kilimanjaro-hike-Tanzania.jpg"
  },
  {
    id: 2,
    name: "Ngorongoro Crater",
    description: "The ngorongoro crater was amazing i found amazing animals such as flamingo and zebras.",
    distance: "25 km",
    image: "https://www.kanaga-at.com/wp-content/uploads/2021/07/tanzania_ngorongoro.jpg"
  },
  {
    id: 3,
    name: "Maasai culture",
    description: "Expirence the best culture of Tanzania and Learn some most usefull lifesyle of maasai tribe who are lifestock keeping.",
    distance: "30 km",
    image: "https://static.wixstatic.com/media/774bc3_1cb48bd3d249491284803015dd7fddcc~mv2.jpg/v1/fill/w_568,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/774bc3_1cb48bd3d249491284803015dd7fddcc~mv2.jpg"
  },
  {
    id: 4,
    name: "Ballon Safari",
    description: "See the nature from the sky the an amaizing animals like zebra see them from the air flying with a ballon have an amazing summer vacation.",
    distance: "20 km",
    image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Hot-Air-Balloon-in-Tarangire-National-park.jpg"
  }
];

const NearbyAttractions: React.FC = () => {
  // Parallax scroll animation for the title section
  const [scrollProps, api] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(40px)',
    config: { tension: 280, friction: 60 }
  }));

  React.useEffect(() => {
    // Animate in on mount
    api.start({
      opacity: 1,
      transform: 'translateY(0px)'
    });
    
    // Setup scroll listener for parallax
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section = document.getElementById('nearby-attractions');
      
      if (section) {
        const sectionTop = section.offsetTop;
        const viewportHeight = window.innerHeight;
        
        // Start animation when section is 30% in viewport
        if (scrollPosition > sectionTop - viewportHeight * 0.7) {
          const scrollFactor = Math.min(1, (scrollPosition - (sectionTop - viewportHeight * 0.7)) / viewportHeight);
          api.start({
            transform: `translateY(${-scrollFactor * 10}px)`,
            immediate: false
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [api]);

  return (
    <section id="nearby-attractions" className="section-padding bg-white">
      <div className="container">
        <animated.div style={scrollProps} className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Nearby Attractions Around Nature Loves adventure
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore these fascinating destinations near our resort during your stay
            </p>
          </div>
        </animated.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <ScrollAnimationWrapper 
              key={attraction.id}
              animation="animate-slide-up opacity-100" 
              delay={index * 200} 
              threshold={0.2}
            >
              <TiltCard perspective={1500} tiltFactor={8}>
                <div className="bg-secondary/30 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row hover-lift group">
                  <div className="md:w-2/5 overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between" style={{transform: 'translateZ(20px)'}}>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-green-700 transition-colors">
                        {attraction.name}
                      </h3>
                      <p className="text-foreground/70 mb-4">{attraction.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-green-700">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{attraction.distance} from resort</span>
                      </div>
                      <a 
                        href="#" 
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm font-medium"
                      >
                        Learn more <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;
