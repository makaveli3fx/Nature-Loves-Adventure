import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Leaf, Shield, Award, Users, Heart, BookOpen, Map, Calendar, Mountain, GitBranch, MapPin, MapPinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const teamMembers = [{
    name: "Brian Benson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in adventure tourism, Brian founded Nature Loves adventures with a vision to create sustainable tourism experiences.",
    image: "/486225182_18008542322713404_8547474069564396230_n.webp"
  }, {
    name: "Peter John",
    role: "Operations Director",
    bio: "Peter ensures all our adventures run smoothly and safely, with a background in wilderness management and outdoor leadership.",
    image: "https://cdn3.iconfinder.com/data/icons/diversity-avatars-vol-2/64/afro-african-man-glasses-512.png"
  }, {
    name: "Lisa John",
    role: "Wildlife Expert",
    bio: "A certified naturalist with a passion for conservation, Lisa leads our wildlife experiences and educational programs.",
    image: "https://cdn.dribbble.com/userupload/24138251/file/still-4c0cc1dfd6c4573782d4ed74dc4f2941.gif?resize=400x0"
  }, {
    name: "Eugen Maisha",
    role: "Head Chef",
    bio: "Specializing in local Malnad cuisine, Chef Eugen creates authentic farm-to-table experiences using ingredients from our organic garden.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3QYGYG6uuh0F-HcxjthqbkMchGHFaLAm8A&s"
  }];

  const timeline = [{
    year: "2005",
    title: "Our Beginning",
    description: "Nature Loves adventures was founded with just two riverside cottages and a dream to share the magic of Tanzania."
  }, {
    year: "2010",
    title: "Expansion",
    description: "Added our signature treehouse villas and expanded our adventure activities to include Manyara  and Ngorongoro Crater."
  }, {
    year: "2015",
    title: "Conservation Partnership",
    description: "Partnered with the Tanzania Nature Safari for wildlife conservation initiatives in  Tanzania Tiger Reserve."
  }, {
    year: "2019",
    title: "Sustainability Award",
    description: "Recognized with the National Tourism Award for sustainable ecotourism practices and community development."
  }, {
    year: "2023",
    title: "Today",
    description: "Now offering over 20 unique experiences and accommodations while remaining committed to sustainable tourism."
  }];

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-32">
        <section className="relative py-20 mb-8">
          <div className="absolute inset-0 bg-[url('https://www.worldanimalprotection.ca/cdn-cgi/image/width=1280,format=auto/globalassets/shared-regional-blocks/australia-and-new-zealand/images/animals/wildlife/hero-1033553-mundi-elephant-sanctuary-georgia-usa-world-animal-protection-katie-bryden.jpg')] bg-cover bg-center opacity-20 bg-lime-600"></div>
          <div className="relative z-10 container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in hover:text-glow transition-all duration-300">
              Our Story
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 animate-fade-in animation-delay-200">
              Discover the journey of Nature Loves adventures, from a Tanzania camps to becoming Karnataka's premier eco-adventure destination.
            </p>
          </div>
        </section>
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img src="https://media.audleytravel.com/-/media/images/home/inspiration/safari-holidays/top-10-safari-animals-in-africa/istock_533565662_giraffe-masai_mara_1512x1080.webp?q=79&w=800&h=571" alt="Nature Loves adventure Wildlife" className="w-full h-[500px] object-cover rounded-xl shadow-lg" />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                  <img src="https://media.istockphoto.com/id/532389864/photo/african-sunset-with-silhouette.jpg?s=612x612&w=0&k=20&c=nmFIJps6CklhZiydCU8lhGZFkMUOHvQ15KmBjViT49w=" alt="Adventure" className="w-40 h-32 object-cover rounded-md" />
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-foreground/70 mb-6">
                At Nature Loves adventures, we're on a mission to create transformative experiences that connect people with nature while preserving the pristine wilderness for generations to come.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <Heart size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-foreground/70">
                    To provide unforgettable, journey and sustainable adventure experiences that educate and inspire a deep appreciation for nature's wonders.
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <BookOpen size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-foreground/70">
                    To be recognized globally as a model for responsible ecotourism that benefits local communities and natural ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The guiding principles that define everything we do at Nature Loves adventures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainability",
                description: "Minimize our ecological footprint while maximizing positive impact on local ecosystems.",
                delay: 0
              }, {
                icon: <Shield className="w-8 h-8" />,
                title: "Safety",
                description: "Rigorous safety standards and certified guides for all adventure activities.",
                delay: 100
              }, {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Supporting local communities through employment and cultural preservation.",
                delay: 200
              }, {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description: "Commitment to exceptional experiences and continuous improvement.",
                delay: 300
              }].map((value, index) => <div key={index} 
                  className="bg-white p-8 rounded-xl text-center shadow-sm animate-slide-up hover:scale-105 hover:shadow-xl transition-all duration-300" 
                  style={{animationDelay: `${value.delay}ms`}}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 mb-6 transition-transform duration-300 hover:scale-110 hover:bg-green-200">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section-padding container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              From humble beginnings to a recognized name in ecotourism.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-green-200 transform md:translate-x-[-50%] hidden sm:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => <div key={index} className={cn("relative flex flex-col sm:flex-row items-start gap-8 animate-fade-in", index % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left")} style={{
                animationDelay: `${index * 200}ms`
              }}>
                  <div className="sm:w-1/2"></div>
                  
                  <div className={cn("hidden sm:block absolute top-8 w-8 h-0.5 bg-green-200", 
                    index % 2 === 0 ? "left-[calc(50%-2rem)] md:left-1/2" : "right-[calc(50%-2rem)] md:right-1/2"
                  )}></div>

                  <div className="absolute left-[-20px] md:left-1/2 transform md:translate-x-[-50%] w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold z-10 shadow-lg hover:scale-110 transition-transform duration-300">
                    <GitBranch size={20} />
                  </div>
                  
                  <div className={cn("sm:w-1/2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300", index % 2 === 0 ? "sm:pr-12" : "sm:pl-12")}>
                    <div className="flex sm:hidden items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center mr-3">
                        <Calendar size={18} />
                      </div>
                      <span className="font-display font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="sm:block">
                      <span className="font-display font-bold text-xl hidden sm:block mb-2">{item.year}</span>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The passionate individuals who make your adventures unforgettable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm animate-slide-up card-hover" style={{
                animationDelay: `${index * 100}ms`
              }}>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold">{member.name}</h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-foreground/70 text-sm">{member.bio}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Visit Us in Paradise
              </h2>
              <p className="text-foreground/70 mb-6">
                Help to see the Experied Nature you never saw and see the Big Five Nature never Give to see, Nature Loves adventures offers the perfect backdrop for your nature retreat.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-accent">
                    <MapPinIcon size={24} className="animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Our Location
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Nature Loves Adventure, Sekei Arusha-3445
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-accent">
                    <Map size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Getting Here
                    </h3>
                    <p className="text-sm text-foreground/70">
                      5 hours drive from Tarangite, 3 hours from Serengeti, and 1 hours from Manyara.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary">
                Contact Us for Directions
              </Link>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6521.31202639895!2d36.70648662604453!3d-3.363375142913053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371b001287f8b7%3A0x261d98575313302f!2sStephano%20movie%20library%20%26%20Games!5e1!3m2!1sen!2stz!4v1755601089793!5m2!1sen!2stz" width="100%" height="450" style={{
                border: 0
              }} allowFullScreen loading="lazy" title="Nature Loves adventures Location" className="w-full"></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-accent text-accent-foreground relative">
          <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/21/5c/3f/215c3f7ac0001f30f779631ef45d1419.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Experience Tanzania?
              </h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Book your stay now and discover the magic of the Western Ghats with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/accommodation" className="inline-block px-8 py-4 bg-white text-accent font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:translate-y-[-2px]">
                  View Accommodations
                </Link>
                <Link to="/booking" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:translate-y-[-2px]">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default About;
