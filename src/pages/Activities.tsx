
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import ActivityCard from '@/components/ActivityCard';

const Activities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeFilter, setActiveFilter] = useState<boolean>(false);
  const [filteredActivities, setFilteredActivities] = useState<any[]>([]);
  
  // Sample activities data
  const activities = [
    {
      id: "game-driving",
      title: "Game Drives (Classic Safari)",
      description: "Morning, afternoon, or full-day drives in open-roof 4x4 vehicles. Everywhere — Serengeti, Ngorongoro, Tarangire, Ruaha, Selous. Best way to see the “Big Five” and large wildlife concentrations",
      image: "https://wildlifesafaritanzania.com/wp-content/uploads/2020/09/Game-Drive-Safaris-in-Tanzaniass.jpg",
      duration: "Depand on the selection",
      difficulty: "Moderate",
      groupSize: "4-8 people",
      rating: 4.8,
      price: 45,
      category: "nature"
    },
    {
      id: "Boat Safaris",
      title: "Boat Safaris",
      description: "River/lake safaris to spot hippos, crocs, elephants, and birds.Located at- Selous (Rufiji River), Lake Manyara (seasonal canoeing) and Pangani River (near coast) Combines water adventure with wildlife safari.",
      image: "https://africantravels.com/wp-content/uploads/2020/05/African-Travels-1500-21.jpg",
      duration: "4-6 hours",
      difficulty: "Easy",
      groupSize: "6-10 people",
      rating: 4.7,
      price: 35,
      category: "water"
    },
    {
      id: "walking-safari",
      title: "Walking Safaris",
      description: "Guided walks with armed rangers. Brings you close to flora, insects, tracks, and smaller. A more intimate, sensory experience of the bush. (Tarangire (special zones))",
      image: "https://serengetinationalparksafaris.com/wp-content/uploads/2023/08/walking-safari.jpeg",
      duration: "4-5 hours",
      difficulty: "Moderate",
      groupSize: "4-5 people",
      rating: 4.6,
      price: 30,
      category: "nature"
    },
    {
      id: "mount-climbing",
      title: "Kilimanjaro Trekking",
      description: "Climb the highest mountain in Africa and have the challenging moment that help you to fix you're fitness and have the breathtaking moment in the highest point in mount kilimanjaro.",
      image: "https://www.kilimanjaroparktanzania.com/wp-content/uploads/2023/08/1-slide-kilimanjaro-trek-climbers-summit-pano.jpg",
      duration: "2-5 Days",
      difficulty: "Challenging",
      groupSize: "5-15 people",
      rating: 4.5,
      price: 25,
      category: "nature"
    },
    {
      id: "night-camping",
      title: "Night Camping",
      description: "Experience the wilderness under the stars with our guided night camping. Enjoy bonfire, stargazing, and the sounds of the jungle at night.",
      image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?auto=format&fit=crop&w=600&q=80",
      duration: "Overnight",
      difficulty: "Easy",
      groupSize: "10-20 people",
      rating: 4.9,
      price: 50,
      category: "land"
    },
    {
      id: "zipline-adventure",
      title: "Zipline Adventure",
      description: "Soar through the forest canopy on our thrilling zipline course. Get a bird's eye view of the beautiful landscapes while experiencing an adrenaline rush.",
      image: "https://canopysafari.com/wp-content/uploads/2024/02/canopy-zipline-tour7-600x540.jpg",
      duration: "1-2 hours",
      difficulty: "Challenging",
      groupSize: "2-10 people",
      rating: 4.7,
      price: 40,
      category: "air"
    },
    {
      id: "Scuba Diving & Snorkeling",
      title: "Scuba Diving & Snorkeling",
      description: "Explore coral reefs, colorful fish, sea turtles, dolphins, and even whale sharks [located at] - Zanzibar (Mnemba Atoll, Kendwa, Nungwi) & Mafia Island (famous for whale sharks, Oct–Mar)",
      image: "https://www.ngorongorocratertanzania.org/wp-content/uploads/2021/10/unnamed-10.jpg",
      duration: "2-3 hours",
      difficulty: "Challenging",
      groupSize: "3-6 people",
      rating: 4.4,
      price: 20,
      category: "water"
    },
    {
      id: "bird-watching",
      title: "Bird Watching",
      description: "Tanzania is home to over 300 species of birds. Join our expert ornithologists for a guided bird watching experience in this avian paradise.",
      image: "https://meruslopestours.com/wp-content/uploads/2025/02/137-scaled.jpg",
      duration: "3-4 hours",
      difficulty: "Easy",
      groupSize: "4-8 people",
      rating: 4.6,
      price: 25,
      category: "nature"
    },
    {
      id: "Kite Surfing & Windsurfing",
      title: "Kite Surfing & Windsurfing",
      description: "Water sports with wind power, great for adventure seekers , Located at Zanzibar (Paje & Jambiani beaches are world-famous) Mafia Island (smaller but growing scene)",
      image: "https://photos.tpn.to/mq/tq/ej/lk/653x490.jpg",
      duration: "3-7 hours",
      difficulty: "Challenging",
      groupSize: "10+ people",
      rating: 5.5,
      price: 30,
      category: "water"
    },
    {
      id: "ballon-safari",
      title: "Ballon Safari Adventure",
      description: "See the nature through the air Climb the ballon and see the nature through the see the animals like zebras, Gerrafe and other in the Tarangire, Serengeti and others",
      image: "https://ecoadventuresafaris.com/wp-content/uploads/2022/12/Uganda-Balloon-Safaria-e1670347539732.jpg",
      duration: "6-8 hours",
      difficulty: "moderate",
      groupSize: "2-5 people",
      rating: 5.0,
      price: 50,
      category: "air"
        }
  ];
  
  const categories = [
    { id: "all", label: "All Activities" },
    { id: "water", label: "Water Adventures" },
    { id: "air", label: "Aerial Adventures" },
    { id: "nature", label: "Nature Experiences" }
  ];
  
  const difficulties = [
    { id: "all", label: "All Levels" },
    { id: "Easy", label: "Easy" },
    { id: "Moderate", label: "Moderate" },
    { id: "Challenging", label: "Challenging" }
  ];
  
  useEffect(() => {
    filterActivities();
  }, [selectedCategory, selectedDifficulty]);
  
  const filterActivities = () => {
    let filtered = [...activities];
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(activity => activity.category === selectedCategory);
    }
    
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(activity => activity.difficulty === selectedDifficulty);
    }
    
    setFilteredActivities(filtered);
  };
  
  const toggleFilter = () => {
    setActiveFilter(!activeFilter);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://africanspicesafaris.com/wp-content/uploads/2020/05/refund-policy.jpg" 
              alt="Adventure activities" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative container h-full flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-slide-down">
              Adventure Awaits
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in animation-delay-200">
              Discover thrilling experiences in the heart of Tanzania' wilderness
            </p>
            <Link 
              to="/booking" 
              className="bg-card text-card-foreground px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 hover:bg-card/90 hover:shadow-lg animate-slide-up animation-delay-400"
            >
              Book an Adventure
            </Link>
          </div>
        </section>
        
        {/* Activities Section */}
        <section className="py-16 px-4 container">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Explore Our Activities
              </h2>
              <p className="text-foreground/70 max-w-xl">
                From thrilling water sports to peaceful nature walks, find the perfect adventure for every type of explorer.
              </p>
            </div>
            
            <Button 
              onClick={toggleFilter}
              variant="outline" 
              className="flex items-center gap-2 md:self-start"
            >
              <Filter size={16} /> Filters
            </Button>
          </div>
          
          {/* Filter Section - Visible on mobile when toggled */}
          <div className={cn(
            "bg-card p-6 rounded-lg shadow-md mb-8 transition-all duration-300 overflow-hidden",
            activeFilter ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Badge 
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.label}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Difficulty Level</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map(difficulty => (
                    <Badge 
                      key={difficulty.id}
                      variant={selectedDifficulty === difficulty.id ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedDifficulty(difficulty.id)}
                    >
                      {difficulty.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Activities Grid */}
          <div className="space-y-8">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity, index) => (
                <ActivityCard 
                  key={activity.id}
                  id={activity.id}
                  image={activity.image}
                  title={activity.title}
                  description={activity.description}
                  duration={activity.duration}
                  difficulty={activity.difficulty as 'Easy' | 'Moderate' | 'Challenging'}
                  groupSize={activity.groupSize}
                  rating={activity.rating}
                  price={activity.price}
                  delay={index * 100}
                />
              ))
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No activities found</h3>
                <p className="text-foreground/70">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Adventure Guidelines Section */}
        <section className="bg-secondary py-16 px-4">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Adventure Guidelines
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Safety First",
                  description: "All activities are conducted with strict safety protocols. Listen to your guides and follow their instructions at all times.",
                  image: "https://www.asiliaafrica.com/wp-content/smush-webp/2024/04/asilia-adventures-ke-6-2019-75-1-1024x660.jpg.webp"
                },
                {
                  title: "Eco-Friendly Approach",
                  description: "Help us preserve the natural beauty of Tanzania. Follow the 'leave no trace' policy during all adventures.",
                  image: "https://www.siasafaris.com/wp-content/uploads/2025/03/Tanzania-eco-friendly-safari.jpeg"
                },
                {
                  title: "What to Bring",
                  description: "Comfortable clothing, water bottle, insect repellent, and sunscreen are recommended for most activities.",
                  image: "https://ecoadventuresafaris.com/wp-content/uploads/2024/05/Eco-Travel-1200x675.jpeg"
                },
                {
                  title: "Booking Policy",
                  description: "Advance booking is required for all activities. Cancellations need to be made 24 hours prior for a full refund.",
                  image: "https://cdn0.iconfinder.com/data/icons/tourism-12/128/tourism-05-512.png"
                }
              ].map((guideline, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-lg overflow-hidden shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={guideline.image} 
                      alt={guideline.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2 text-card-foreground">
                      {guideline.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {guideline.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/1d3255ca-7296-4e20-b1fb-416cfb82fa82.png')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Book your activity now and create memories that will last a lifetime.
              </p>
              <Link 
                to="/booking" 
                className="inline-block px-8 py-4 bg-card text-card-foreground font-medium text-lg rounded-md transition-all duration-300 hover:bg-card/90 hover:shadow-lg hover:translate-y-[-2px]"
              >
                Book Your Adventure
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Activities;
