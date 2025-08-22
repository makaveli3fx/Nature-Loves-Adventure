import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
      duration: 5000,
    });
    
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPlEkQRPqWHvzBiFOncli2VGx5BwXP8Qt9g&s)",
              backgroundPosition: "center 30%" 
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl animate-slide-up animation-delay-200">
              Reach out to us for bookings, inquiries, or to plan your perfect adventure
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-display font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">
                          Nature Loves Adventure, Tanzania, Arusha-sekei
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a href="tel:+255698809207" className="text-primary hover:underline">
                          +255 698 809 207
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:dandeliadventures.in@gmail.com" className="text-primary hover:underline">
                          naturelovesadventurel.in@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Office Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Sunday: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-display font-semibold mb-4">Find Us</h3>
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6521.31202639895!2d36.70648662604453!3d-3.363375142913053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371b001287f8b7%3A0x261d98575313302f!2sStephano%20movie%20library%20%26%20Games!5e1!3m2!1sen!2stz!4v1755601089793!5m2!1sen!2stz" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-display font-semibold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-ring outline-none transition"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-ring outline-none transition"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-ring outline-none transition"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-ring outline-none transition"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-ring outline-none transition"
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How do I book an activity?",
                  answer: "You can book activities directly through our website's booking page or contact our team via phone or email."
                },
                {
                  question: "What's the best time to visit Tanzania?",
                  answer: "The best time to visit is from June to October when the weather is pleasant for outdoor activities."
                },
                {
                  question: "Do you offer transportation services?",
                  answer: "Yes, we offer pickup and drop services from nearby railway stations and airports at an additional cost."
                },
                {
                  question: "Are there any age restrictions for activities?",
                  answer: "Most activities have minimum age requirements. River rafting is generally for those 12 years and above."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
