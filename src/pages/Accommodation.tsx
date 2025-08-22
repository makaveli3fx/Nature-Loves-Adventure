import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomCard from '@/components/RoomCard';
import { Wifi, Coffee, Users, Tv, MapPin, CookingPot } from 'lucide-react';

type RoomType = {
  id: string;
  title: string;
  description: string;
  price: number;
  capacity: number;
  size: string;
  bedType: string;
  image: string;
  views: string;
  amenities: {
    icon: React.ReactNode;
    label: string;
  }[];
};

const Accommodation: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const accommodations: RoomType[] = [{
    id: " safari-lodges",
    title: "Safari Lodges",
    description: "These are permanent, solid structures, similar to a hotel or resort, often built from stone, wood, or thatch. Serengeti National Park (e.g., Four Seasons Safari Lodge, Serengeti Serena Safari Lodge)",
    price: 300,
    capacity: 2,
    size: "600 sq ft",
    bedType: "1 King",
    image: "https://www.leopard-tours.com/wp-content/uploads/2015/11/Four-Seasons-Serengeti-4.jpg",
    views: "Nature View",
    amenities: [{
      icon: <Wifi size={16} />,
      label: "Free WiFi"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 2 Guests"
    }, {
      icon: <Tv size={16} />,
      label: "Smart TV"
    }, {
      icon: <MapPin size={16} />,
      label: "Nature View"
    }]
  }, {
    id: "Tented Camps",
    title: "Tented Camps (Luxury & Semi-Permanent)",
    description: "Large canvas tents with real beds, bathrooms, and verandas. They give a close-to-nature feel without sacrificing comfort(.eg,Ruaha & Selous Game Reserves and Tarangire Riverbanks)",
    price: 250,
    capacity: 2,
    size: "550 sq ft",
    bedType: "1 King",
    image: "https://www.visittimbavati.com/assets/img/thabamati-luxury-tented-camp-timbavati.jpg",
    views: "River",
    amenities: [{
      icon: <Wifi size={16} />,
      label: "Free WiFi"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 2 Guests"
    }, {
      icon: <Tv size={16} />,
      label: "Smart TV"
    }, {
      icon: <MapPin size={16} />,
      label: "Forest View"
    }]
  }, {
    id: "northern-circuit",
    title: "Northern Circuit (Serengeti, Ngorongoro, Tarangire, Manyara)",
    description: "Ngorongoro Wildlife Lodge - stone-built lodge with stunning views into the crater, Serengeti Serena Safari Lodge - traditional lodge with a pool, great central location (Seronera).",
    price: 200,
    capacity: 2,
    size: "400 sq ft",
    bedType: "1 Queen",
    image: "https://www.leopard-tours.com/wp-content/uploads/2015/10/migunga-1-Large.jpg",
    views: "Forest Canopy",
    amenities: [{
      icon: <Wifi size={16} />,
      label: "Free WiFi"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 2 Guests"
    }, {
      icon: <Tv size={16} />,
      label: "Smart TV"
    }, {
      icon: <MapPin size={16} />,
      label: "Forest View"
    }]
  }, {
    id: "southern-circuit",
    title: "Southern Circuit (Ruaha & Nyerere/Selous)",
    description: "Selous River Camp - mid-range tents and bandas along the river. Ruaha River Lodge - comfortable stone bandas on the riverbank.",
    price: 150,
    capacity: 2,
    size: "350 sq ft",
    bedType: "1 Queen",
    image: "https://wildlifesafaritanzania.com/wp-content/uploads/2024/03/3150940-kopie1-750x450.jpg",
    views: "Jungle",
    amenities: [{
      icon: <Wifi size={16} />,
      label: "Free WiFi"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 2 Guests"
    }, {
      icon: <MapPin size={16} />,
      label: "Jungle View"
    }]
  }, {
    id: "western-circuit",
    title: "Western Circuit (Katavi & Mahale)",
    description: "Katavi Wildlife Camp – simple but comfortable with great views of plains.Kungwe Beach Lodge (Mahale) – wooden bandas on Lake Tanganyika.",
    price: 180,
    capacity: 2,
    size: "400 sq ft",
    bedType: "1 King",
    image: "https://www.leopard-tours.com/wp-content/uploads/2024/11/TAASA-Lodge-20-1024x767.jpg",
    views: "Grassland",
    amenities: [{
      icon: <Wifi size={16} />,
      label: "Free WiFi"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 2 Guests"
    }, {
      icon: <MapPin size={16} />,
      label: "Grassland View"
    }]
  }, {
    id: "coastal-islands",
    title: "Coastal & Islands (post-safari relaxation)",
    description: "Zuri Zanzibar , beachfront luxury resort with private bungalows. Mnemba Island Lodge (by &Beyond), exclusive barefoot luxury on a private island.",
    price: 350,
    capacity: 6,
    size: "900 sq ft",
    bedType: "2 King + 2 Twin",
    image: "https://fika-safaris.com/beach-holidays/wp-content/uploads/sites/4/2023/11/zanzibar-baladin-02-1024x678.webp",
    views: "Beache",
    amenities: [{
      icon: <Wifi size={16} />,
      label: "Free WiFi"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 6 Guests"
    }, {
      icon: <Tv size={16} />,
      label: "Smart TV"
    }, {
      icon: <MapPin size={16} />,
      label: "Beach View"
    }]
     }, {
    id: "public-campsites",
    title: "Public Campsites (Inside National Parks)",
    description: "Very basic facilities (shared toilets/showers, no frills). Travelers pitch their own tents or rent from operators. Meals often prepared by camp cooks.",
    price: 100,
    capacity: 2,
    size: "90 sq ft",
    bedType: "tent",
    image: "https://www.ngorongorocratertanzania.org/wp-content/uploads/2021/05/tzz-750x450.jpg",
    views: "Nature",
    amenities: [{
      icon: <CookingPot size={16} />,
      label: "Cooked meal"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 3 Guests"
    }, {
      icon: <Wifi size={16} />,
      label: "Little wi-fi"
    }, {
      icon: <MapPin size={16} />,
      label: "Nature View"
    }]
     }, {
    id: "Guest-houses",
    title: "Guesthouses & Hostels (Outside Parks)",
    description: "Simple B&B-style stays in nearby towns, used as safari stopovers. Where Found:  Arusha (safari hub): Outpost Lodge, Arusha Backpackers Hostel",
    price: 120,
    capacity: 2,
    size: "90 sq ft",
    bedType: "Normal bed",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255379221.jpg?k=4a4ab9f3a5ae5b363bdbe0870261fe77598ca51866fed1553d4e0ced292a1885&o=&hp=1",
    views: "Nothing",
    amenities: [{
      icon: <CookingPot size={16} />,
      label: "Cooked meal"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 3 Guests"
    }, {
      icon: <Wifi size={16} />,
      label: "Little wi-fi"
    }, {
      icon: <MapPin size={16} />,
      label: "Guest View"
    }]
  }, {
    id: "Community Campsites & Eco-Lodges",
    title: "Community Campsites & Eco-Lodges",
    description: "Managed by local communities, offering a cultural experience and supporting conservation. Facilities are basic but authentic",
    price: 120,
    capacity: 2,
    size: "90 sq ft",
    bedType: "Normal bed",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e8/2e/a2/colibri-camping-from.jpg?w=900&h=500&s=1",
    views: "Nothing",
    amenities: [{
      icon: <CookingPot size={16} />,
      label: "Cooked meal"
    }, {
      icon: <Coffee size={16} />,
      label: "Coffee Maker"
    }, {
      icon: <Users size={16} />,
      label: "Up to 3 Guests"
    }, {
      icon: <Wifi size={16} />,
      label: "Little wi-fi"
    }, {
      icon: <MapPin size={16} />,
      label: "Guest View"
    }]
  }];

  const filteredAccommodations = filter === 'all' ? accommodations : accommodations.filter(room => {
    if (filter === 'budget' && room.price < 150) return true;
    if (filter === 'standard' && room.price >= 150 && room.price < 250) return true;
    if (filter === 'luxury' && room.price >= 250) return true;
    return false;
  });

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative h-[40vh] md:h-[50vh] w-full mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.go2africa.com/wp-content/uploads/2020/03/Banner-1920x768px5-2-1920x630.jpg')" }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in">
            Accommodations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl animate-slide-up animation-delay-200">
            Experience the perfect blend of comfort and nature in our sustainable, luxurious lodging options and Hotel 
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-display font-semibold mb-4">Find Your Perfect Stay</h2>
          <p className="text-muted-foreground max-w-2xl">
            Our accommodations combine luxury with sustainability, offering you a comfortable stay while maintaining our commitment to preserving the environment.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-muted/80'
              }`}
            >
              All Accommodations
            </button>
            <button 
              onClick={() => setFilter('budget')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'budget' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-muted/80'
              }`}
            >
              Budget 
            </button>
            <button 
              onClick={() => setFilter('standard')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'standard' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-muted/80'
              }`}
            >
              Standard
            </button>
            <button 
              onClick={() => setFilter('luxury')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'luxury' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-muted/80'
              }`}
            >
              Luxury
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccommodations.map((room) => (
            <RoomCard
              key={room.id}
              title={room.title}
              description={room.description}
              price={room.price}
              image={room.image}
              capacity={room.capacity}
              amenities={room.amenities}
            />
          ))}
        </div>
        
        {filteredAccommodations.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-muted-foreground">No accommodations match your current filter.</p>
            <button 
              onClick={() => setFilter('all')}
              className="text-primary hover:underline mt-2"
            >
              View all accommodations
            </button>
          </div>
        )}
      </div>
      
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-semibold mb-10 text-center">Our Amenities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium mb-2">Free Wi-Fi</h3>
              <p className="text-muted-foreground">
                Stay connected with complimentary high-speed internet access available throughout our property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium mb-2">Eco-friendly Amenities</h3>
              <p className="text-muted-foreground">
                Enjoy organic toiletries, biodegradable products, and sustainably sourced linens and towels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium mb-2">Daily Housekeeping</h3>
              <p className="text-muted-foreground">
                Experience immaculate comfort with our eco-friendly daily housekeeping services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Tv className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium mb-2">Entertainment</h3>
              <p className="text-muted-foreground">
                Smart TVs with streaming capabilities and a selection of books and board games for entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Accommodation;
