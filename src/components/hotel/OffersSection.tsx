 import { motion } from 'framer-motion';
 import { Calendar, Percent, Gift } from 'lucide-react';
 
 interface OffersProps {
   onNavigate: (section: string) => void;
 }
 
 const offers = [
   {
     id: 'earlybird',
     title: 'Early Bird Special',
     discount: '25% OFF',
     description: 'Book 60 days in advance and enjoy significant savings on your stay. Perfect for planners who love great deals.',
     validity: 'Valid until March 31, 2026',
     icon: Calendar,
     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
   },
   {
     id: 'honeymoon',
     title: 'Honeymoon Package',
     discount: 'FREE UPGRADE',
     description: 'Celebrate your love with a complimentary suite upgrade, romantic dinner, and spa treatment for two.',
     validity: 'Valid for stays in 2026',
     icon: Gift,
     image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
   },
   {
     id: 'weekend',
     title: 'Weekend Getaway',
     discount: '30% OFF',
     description: 'Escape the routine with our weekend special. Stay Friday through Sunday and save on your entire booking.',
     validity: 'Available on weekends',
     icon: Percent,
     image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
   },
   {
     id: 'family',
     title: 'Family Fun Package',
     discount: 'KIDS STAY FREE',
     description: 'Bring the whole family! Children under 12 stay free with complimentary breakfast and activities.',
     validity: 'Valid during school holidays',
     icon: Gift,
     image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
   },
 ];
 
 export const OffersSection = ({ onNavigate }: OffersProps) => {
   return (
     <section className="py-24 md:py-32 bg-secondary">
       <div className="container mx-auto px-4 lg:px-8">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Special Offers</h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Take advantage of our exclusive deals and make your Hotel Bemaro experience even more special.
           </p>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-8">
           {offers.map((offer, index) => (
             <motion.div
               key={offer.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="bg-card rounded-2xl overflow-hidden shadow-premium border border-border hover-lift"
             >
               <div className="relative h-56">
                 <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                 <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
                   {offer.discount}
                 </div>
               </div>
               <div className="p-6 space-y-4">
                 <h3 className="text-2xl font-bold text-foreground">{offer.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                   <Calendar className="w-4 h-4" />
                   {offer.validity}
                 </div>
                 <button
                   onClick={() => onNavigate('contact')}
                   className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity"
                 >
                   Book Now
                 </button>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };