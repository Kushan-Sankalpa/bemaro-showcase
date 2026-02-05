 import { motion, useInView } from 'framer-motion';
 import { useRef, useEffect, useState } from 'react';
 import { MapPin, Mountain, Waves, Trees } from 'lucide-react';
 
 const destinations = [
   {
     image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
     title: 'Pristine Beach',
     distance: '5 min drive',
   },
   {
     image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop',
     title: 'Mountain Vista',
     distance: '15 min drive',
   },
   {
     image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop',
     title: 'Forest Reserve',
     distance: '10 min drive',
   },
   {
     image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop',
     title: 'Sunset Point',
     distance: '8 min drive',
   },
   {
     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
     title: 'Historic Town',
     distance: '20 min drive',
   },
   {
     image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop',
     title: 'Lake Paradise',
     distance: '12 min drive',
   },
 ];
 
 const highlights = [
   { icon: MapPin, text: 'Prime central location' },
   { icon: Mountain, text: 'Scenic mountain views' },
   { icon: Waves, text: 'Beach access nearby' },
   { icon: Trees, text: 'Nature trails' },
 ];
 
 export const NearbyDestinations = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const [isPaused, setIsPaused] = useState(false);
 
   return (
     <section ref={ref} className="py-24 md:py-32 bg-background overflow-hidden">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8 }}
             className="space-y-8"
           >
             <div>
               <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                 Nearby Destinations Near Our Bemaro Hotel
               </h2>
               <div className="w-24 h-1 bg-primary rounded-full mb-6" />
               <p className="text-lg text-muted-foreground leading-relaxed">
                 Discover the wonders that surround Hotel Bemaro. From pristine beaches 
                 to majestic mountains, adventure awaits just moments from your doorstep.
               </p>
             </div>
 
             <ul className="space-y-4">
               {highlights.map((item, index) => (
                 <motion.li
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                   className="flex items-center gap-4"
                 >
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                     <item.icon className="w-6 h-6 text-primary" />
                   </div>
                   <span className="text-lg text-foreground font-medium">{item.text}</span>
                 </motion.li>
               ))}
             </ul>
           </motion.div>
 
           {/* Right - Auto-sliding Gallery */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}
           >
             <div className="overflow-hidden rounded-2xl">
               <div
                 className="flex gap-4"
                 style={{
                   animation: isPaused ? 'none' : 'scrollLeft 20s linear infinite',
                   width: 'max-content',
                 }}
               >
                 {[...destinations, ...destinations].map((dest, index) => (
                   <div
                     key={index}
                     className="w-64 flex-shrink-0 group"
                   >
                     <div className="relative rounded-xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow">
                       <img
                         src={dest.image}
                         alt={dest.title}
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                       <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                         <h3 className="font-bold text-lg">{dest.title}</h3>
                         <p className="text-sm opacity-90">{dest.distance}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };