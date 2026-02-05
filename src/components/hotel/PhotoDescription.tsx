 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 
 export const PhotoDescription = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section ref={ref} className="py-24 md:py-32 bg-secondary">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8 }}
             className="order-2 lg:order-1 space-y-6"
           >
             <h2 className="text-3xl md:text-5xl font-bold text-foreground">
               Where Elegance Meets Comfort
             </h2>
             <div className="w-24 h-1 bg-primary rounded-full" />
             <p className="text-lg text-muted-foreground leading-relaxed">
               Every corner of Hotel Bemaro has been thoughtfully designed to provide 
               an unparalleled experience. Our rooms blend contemporary luxury with 
               timeless elegance, featuring premium amenities and stunning views.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               Whether you're here for business or leisure, our attentive staff ensures 
               your every need is met with the highest level of service. Wake up to 
               breathtaking sunrises, indulge in gourmet dining, and create memories 
               that will last a lifetime.
             </p>
             <div className="grid grid-cols-3 gap-6 pt-6">
               <div className="text-center">
                 <div className="text-4xl font-bold text-primary">50+</div>
                 <div className="text-sm text-muted-foreground">Luxury Rooms</div>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-bold text-primary">15+</div>
                 <div className="text-sm text-muted-foreground">Years Experience</div>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-bold text-primary">1000+</div>
                 <div className="text-sm text-muted-foreground">Happy Guests</div>
               </div>
             </div>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="order-1 lg:order-2 relative"
           >
             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-premium-xl">
               <img
                 src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=1000&fit=crop"
                 alt="Luxury Hotel Room"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
             <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
             <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary rounded-full -z-10" />
           </motion.div>
         </div>
       </div>
     </section>
   );
 };