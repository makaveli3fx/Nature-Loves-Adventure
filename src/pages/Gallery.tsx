
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "https://www.easytravel.co.tz/wp-content/uploads/2022/02/what-occur-on-walking-safari.jpg",
      alt: "Walking Safari",
      category: "wildlife"
    },
    {
      id: 2,
      src: "https://www.shutterstock.com/image-photo/african-savanna-herd-elephants-walking-600nw-2559599099.jpg",
      alt: "Big Five",
      category: "landscape"
    },
    {
      id: 3,
      src: "https://www.odysseys-unlimited.com/wp-content/uploads/2023/05/AdobeStock_568345335-scaled.jpeg",
      alt: "Girref",
      category: "landscape"
    },
    {
      id: 4,
      src: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3e8b018b-5d20-43fc-83d3-885564568140.jpg?crop=6048%2C4032%2C0%2C0&resize=618",
      alt: "Lion",
      category: "landscape"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1535082623926-b39352a03fb7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Nature",
      category: "landscape"
    },
    {
      id: 6,
      src: "https://ecoadventuresafaris.com/wp-content/uploads/2021/09/Climbing-Kilimanjaro3.jpg",
      alt: "Mountain kilimanjaro",
      category: "landscape"
    },
    {
      id: 7,
      src: "https://wildlifesafaritanzania.com/wp-content/uploads/2022/02/trek-the-rongai-route-on-kilimanjaro.jpg",
      alt: "kilimanjaro trekking",
      category: "night"
    },
    {
      id: 8,
      src: "https://img.pamojasafaris.com/v7/https://www.pamojasafaris.com/wp-content/uploads/2024/04/Stone-Town-1024x576.jpg?w=1024&h=576&org_if_sml=1",
      alt: "Zanzibar Island",
      category: "landscape"
    },
    {
      id: 9,
      src: "https://www.tanzaniasafaristours.com/wp-content/uploads/2023/11/maldives-aerial-1024x767.webp",
      alt: "Zanzibar Paradise",
      category: "water"
    },
    {
      id: 10,
      src: "https://timbuktutravel.imgix.net/2024/07/Meet_the_Maasai.jpg?auto=compress%2Cformat&fit=scale&h=600&ixlib=php-1.1.0&q=50&w=900&wpsize=medium",
      alt: "Maasai Culture",
      category: "Culture"
    },
    {
      id: 11,
      src: "https://www.sababu-safaris.com/wp-content/uploads/2022/10/IMG_4269.jpg",
      alt: "Hadzabe Tribe",
      category: "Culture"
    },
    {
      id: 12,
      src: "https://www.jaynevytours.com/assets/images/moshi-coffee-tour.webp",
      alt: "Coffe Plantation",
      category: "landscape"
    }
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getCurrentIndex = () => {
    if (!selectedImage) return -1;
    return galleryImages.findIndex(img => img.src === selectedImage);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    const currentIndex = getCurrentIndex();
    if (currentIndex === -1) return;

    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length 
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImage(galleryImages[newIndex].src);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Gallery</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore the breathtaking natural beauty of  through our collection of stunning photographs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg shadow-md group hover-scale"
                onClick={() => openModal(image.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <p className="font-display text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white p-2 hover:text-gray-300 transition-colors">
              <X size={24} />
            </button>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => navigateImage('prev')} 
                className="bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              
              <div className="flex-grow flex justify-center mx-2">
                <img 
                  src={selectedImage} 
                  alt="Gallery image" 
                  className="max-h-[80vh] object-contain" 
                />
              </div>
              
              <button 
                onClick={() => navigateImage('next')} 
                className="bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors"
              >
                <ArrowRight size={24} />
              </button>
            </div>
            
            <div className="text-center text-white mt-4">
              <p>{getCurrentIndex() + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
