import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OfferProps {
  id: string;
  title: string;
  description: string;
  discount: string;
  priceFrom: string;
  priceTo: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  linkTo: string;
  animationDelay?: number;
  featured?: boolean;
}

const offers: OfferProps[] = [
  {
    id: 'serengeti-nationa-park',
    title: 'Serengeti National Park',
    description: 'Full day of adventure and activities See The great Migration Of animals in teh nature',
    discount: 'SPECIAL',
    priceFrom: '$1,499',
    priceTo: '$799',
    image: 'https://www.serengetiparktanzania.com/wp-content/uploads/2020/10/Serengeti-National-Park-animals-750x450.jpg',
    backgroundColor: 'bg-green-600',
    textColor: 'text-white',
    linkTo: '/booking?package=day',
    animationDelay: 0,
    featured: true
  },
  {
    id: 'culture-tour',
    title: 'Culture Safari',
    description: 'Enjoy the best moment and educational moment by visiting maasai culture in Tanzania',
    discount: '25% OFF',
    priceFrom: '$3,999',
    priceTo: '$2,999',
    image: 'https://kilimanjarosunrise.com/wp-content/uploads/maasai-men-kilinge-adventures.jpg',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-white',
    linkTo: '/booking?promo=RIVER25',
    animationDelay: 0
  },
  {
    id: 'walking-safari',
    title: 'Walking Safari',
    description: 'Enjoy through walking the nature of Tarangire with your private guide',
    discount: '30% OFF',
    priceFrom: '$5,499',
    priceTo: '$3,849',
    image: 'https://www.robinpopesafaris.net/wp-content/uploads/the-mobile-walking-safari-the-mobile-walking-safari-robin-pope-safaris-8-e1662996257444-1000x563.jpg',
    backgroundColor: 'bg-stone-600',
    textColor: 'text-white',
    linkTo: '/booking?promo=ADVENTURE30',
    animationDelay: 100,
    featured: true
  },
  {
    id: 'family-offer',
    title: 'Family Special',
    description: 'Enjoy with youre family and have the education moment in safari',
    discount: '20% OFF',
    priceFrom: '$7,999',
    priceTo: '$6,399',
    image: 'https://www.sababu-safaris.com/wp-content/uploads/2024/07/image13.png',
    backgroundColor: 'bg-orange-500',
    textColor: 'text-white',
    linkTo: '/booking?promo=FAMILY20',
    animationDelay: 200
  }
];

const OfferCard: React.FC<OfferProps> = ({
  id,
  title,
  description,
  discount,
  priceFrom,
  priceTo,
  image,
  backgroundColor,
  textColor,
  linkTo,
  animationDelay = 0,
  featured
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl overflow-hidden shadow-lg hover:shadow-xl group relative",
        featured && "md:col-span-2 md:row-span-2"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay / 1000 }}
      viewport={{ once: true }}
    >
      <div className={cn("relative", featured ? "h-96" : "h-64")}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div 
          className={cn(
            "absolute top-0 right-0 py-2 px-4 rounded-bl-lg z-10",
            backgroundColor
          )}
        >
          <span className={cn("font-bold text-lg", textColor)}>{discount}</span>
        </div>
        {featured && (
          <div className="absolute top-0 left-0 m-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured Package
          </div>
        )}
      </div>
      <div className={cn("p-6", backgroundColor, textColor)}>
        <h3 className="text-2xl font-display font-semibold mb-2">{title}</h3>
        <p className="mb-4 opacity-90">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="line-through opacity-75 text-sm">{priceFrom}</span>
            <span className="text-xl font-bold ml-2">{priceTo}</span>
          </div>
          <Link 
            to={linkTo} 
            className={cn(
              "rounded-full py-2 px-4 inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-all",
              textColor
            )}
          >
            Book Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const DiscountOffers: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden" id="day-package">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 bg-purple-100 text-purple-800 rounded-full text-sm font-medium inline-block mb-4">
            Limited Time
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Exclusive Discount Offers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our exclusive deals and save on your next adventure in Dandeli.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountOffers;
