 import { motion } from 'framer-motion';
 import { useInView } from 'framer-motion';
 import { useRef } from 'react';
 
 export const PerfectThought = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section ref={ref} className="py-24 md:py-32 bg-secondary">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="max-w-6xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
               A Perfect Thought
             </h2>
             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
           </motion.div>
 
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative"
             >
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-xl">
                 <img
                   src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
                   alt="Hotel Bemaro Luxury"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="space-y-6"
             >
               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                 At Hotel Bemaro, we believe that every moment should be extraordinary. 
                 Nestled in a breathtaking location, our hotel offers a sanctuary where 
                 luxury meets comfort, and every detail is crafted with care.
               </p>
               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                 From the moment you step through our doors, you'll be enveloped in an 
                 atmosphere of warmth and sophistication. Our dedicated team ensures that 
                 your stay is nothing short of perfect, creating memories that last a lifetime.
               </p>
               <div className="pt-4">
                 <blockquote className="text-2xl md:text-3xl font-display text-primary italic">
                   "Where dreams find their home, and memories begin their journey."
                 </blockquote>
               </div>
             </motion.div>
           </div>
         </div>
       </div>
     </section>
   );
 };