 import { motion, useInView } from 'framer-motion';
 import { useRef, useState } from 'react';
 import { Star } from 'lucide-react';
 
 const platforms = [
   {
     name: 'Facebook',
     rating: '5/5',
     stars: 5,
     logo: (
       <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#1877F2">
         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
       </svg>
     ),
   },
   {
     name: 'Booking.com',
     rating: '9.5/10',
     stars: 5,
     logo: (
       <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#003580">
         <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.867 6.4h2.666v4.534h-2.666V6.4zm0 6.4h2.666v4.8h-2.666v-4.8z"/>
       </svg>
     ),
     customStars: true,
   },
   {
     name: 'Google',
     rating: '4.8/5',
     stars: 5,
     logo: (
       <svg className="w-10 h-10" viewBox="0 0 24 24">
         <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
         <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
         <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
         <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
       </svg>
     ),
   },
 ];
 
 export const PlatformRatings = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const [isPaused, setIsPaused] = useState(false);
 
   return (
     <section ref={ref} className="py-16 bg-secondary overflow-hidden">
       <div
         className="relative"
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}
       >
         <div className="overflow-hidden">
           <div
             className="flex gap-8"
             style={{
               animation: isPaused ? 'none' : 'scrollLeft 15s linear infinite',
               width: 'max-content',
             }}
           >
             {[...platforms, ...platforms, ...platforms, ...platforms].map((platform, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                 className="flex-shrink-0 w-72"
               >
                 <div className="bg-card rounded-2xl p-6 shadow-premium border border-border hover-lift">
                   <div className="flex items-center gap-4 mb-4">
                     {platform.logo}
                     <div>
                       <h4 className="font-bold text-lg text-foreground">{platform.name}</h4>
                       <div className="text-2xl font-bold text-primary">{platform.rating}</div>
                     </div>
                   </div>
                   <div className="flex gap-1">
                     {[...Array(platform.stars)].map((_, i) => (
                       <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                     ))}
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };