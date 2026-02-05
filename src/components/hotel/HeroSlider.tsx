 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 
 const heroSlides = [
   {
     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop',
     title: 'Welcome to Hotel Bemaro',
     subtitle: 'Experience luxury and elegance in the heart of paradise',
     cta: 'Book Your Stay',
   },
   {
     image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=1080&fit=crop',
     title: 'Unforgettable Weddings',
     subtitle: 'Create magical moments in our stunning venues',
     cta: 'Plan Your Wedding',
   },
   {
     image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop',
     title: 'Exceptional Events',
     subtitle: 'Host your special occasions with world-class service',
     cta: 'Explore Events',
   },
   {
     image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop',
     title: 'Serene Relaxation',
     subtitle: 'Escape to tranquility and rejuvenate your senses',
     cta: 'View Amenities',
   },
 ];
 
 interface HeroSliderProps {
   onNavigate: (section: string) => void;
 }
 
 export const HeroSlider = ({ onNavigate }: HeroSliderProps) => {
   const [currentSlide, setCurrentSlide] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
     }, 5000);
     return () => clearInterval(interval);
   }, []);
 
   return (
     <section className="relative h-[85vh] w-full overflow-hidden">
       <AnimatePresence mode="wait">
         <motion.div
           key={currentSlide}
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1, ease: 'easeInOut' }}
           className="absolute inset-0"
         >
           <img
             src={heroSlides[currentSlide].image}
             alt={heroSlides[currentSlide].title}
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/60" />
         </motion.div>
       </AnimatePresence>
 
       {/* Content */}
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="container mx-auto px-4 text-center">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentSlide}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -30 }}
               transition={{ duration: 0.6 }}
               className="max-w-4xl mx-auto"
             >
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
                 {heroSlides[currentSlide].title}
               </h1>
               <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                 {heroSlides[currentSlide].subtitle}
               </p>
               <button
                 onClick={() => onNavigate('contact')}
                 className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-full hover-lift hover:bg-primary-foreground/90 transition-all shadow-premium-lg"
               >
                 {heroSlides[currentSlide].cta}
               </button>
             </motion.div>
           </AnimatePresence>
         </div>
       </div>
 
       {/* Scroll indicator */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
         <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 1.5, repeat: Infinity }}
           className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2"
         >
           <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
         </motion.div>
       </div>
     </section>
   );
 };