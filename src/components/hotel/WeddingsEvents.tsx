 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
 
 interface Package {
   id: string;
   title: string;
   image: string;
   highlights: string[];
   description: string;
   inclusions: string[];
   gallery: string[];
   price: string;
 }
 
 const weddingPackages: Package[] = [
   {
     id: 'intimate',
     title: 'Intimate Garden Wedding',
     image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
     highlights: ['Up to 50 guests', 'Garden ceremony', 'Champagne toast', 'Professional photography'],
     description: 'Create an intimate and romantic celebration surrounded by our lush gardens. Perfect for couples seeking a private and meaningful ceremony with their closest loved ones.',
     inclusions: ['Garden venue for 4 hours', 'White chairs and arch decor', 'Champagne toast', 'Coordination on the day', 'Bridal suite access', 'Complimentary night stay'],
     gallery: [
       'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
     ],
     price: 'Contact for pricing',
   },
   {
     id: 'grand',
     title: 'Grand Ballroom Wedding',
     image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop',
     highlights: ['Up to 200 guests', 'Grand ballroom', 'Full catering', '5-tier wedding cake'],
     description: 'Experience the wedding of your dreams in our magnificent ballroom. With crystal chandeliers, elegant décor, and impeccable service, every detail is designed to exceed expectations.',
     inclusions: ['Grand ballroom for 8 hours', 'Complete décor package', 'Full catering with 5-course meal', '5-tier custom wedding cake', 'DJ and sound system', 'Wedding coordinator', 'Honeymoon suite for 2 nights'],
     gallery: [
       'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&h=600&fit=crop',
     ],
     price: 'Contact for pricing',
   },
   {
     id: 'beach',
     title: 'Sunset Beach Wedding',
     image: 'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&h=600&fit=crop',
     highlights: ['Up to 100 guests', 'Beachfront ceremony', 'Sunset timing', 'Reception dinner'],
     description: 'Say "I do" with the golden sunset as your backdrop. Our beachfront wedding package offers a magical setting where the ocean breeze and natural beauty create unforgettable moments.',
     inclusions: ['Private beach ceremony', 'Bamboo altar and chairs', 'Sunset cocktail hour', 'Beachside reception dinner', 'Tiki torch lighting', 'Fire dancers performance', 'Ocean view suite for 2 nights'],
     gallery: [
       'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=800&h=600&fit=crop',
     ],
     price: 'Contact for pricing',
   },
 ];
 
 const eventPackages: Package[] = [
   {
     id: 'corporate',
     title: 'Corporate Conference',
     image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
     highlights: ['Up to 300 attendees', 'Full AV equipment', 'Coffee breaks', 'Business lunch'],
     description: 'Host your next corporate event in our state-of-the-art conference facilities. From board meetings to large conferences, we provide the perfect professional environment.',
     inclusions: ['Conference hall for full day', 'HD projector and screens', 'Professional sound system', 'High-speed WiFi', 'Coffee and tea service', 'Business lunch buffet', 'Dedicated event coordinator'],
     gallery: [
       'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
     ],
     price: 'Contact for pricing',
   },
   {
     id: 'gala',
     title: 'Gala Dinner',
     image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
     highlights: ['Up to 250 guests', 'Gourmet dining', 'Live entertainment', 'Elegant décor'],
     description: 'Create a spectacular evening with our gala dinner package. Perfect for charity events, award ceremonies, and celebratory gatherings that deserve an extraordinary setting.',
     inclusions: ['Ballroom with elegant setup', 'Red carpet entrance', '5-course gourmet dinner', 'Premium bar service', 'Live band or DJ', 'Custom lighting design', 'Valet parking'],
     gallery: [
       'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
     ],
     price: 'Contact for pricing',
   },
   {
     id: 'birthday',
     title: 'Birthday Celebration',
     image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop',
     highlights: ['Flexible capacity', 'Custom theme', 'Birthday cake', 'Entertainment'],
     description: 'Make your birthday unforgettable with a celebration tailored to your style. From intimate gatherings to grand parties, we bring your vision to life.',
     inclusions: ['Private venue', 'Custom themed décor', 'Personalized birthday cake', 'Buffet or plated dinner', 'DJ and music system', 'Photo booth', 'Party favors'],
     gallery: [
       'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
       'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=600&fit=crop',
     ],
     price: 'Contact for pricing',
   },
 ];
 
 const PackageCard = ({ pkg, onViewMore }: { pkg: Package; onViewMore: () => void }) => (
   <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6 }}
     className="bg-card rounded-2xl overflow-hidden shadow-premium border border-border hover-lift"
   >
     <div className="relative h-64">
       <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
       <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
       <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-primary-foreground">{pkg.title}</h3>
     </div>
     <div className="p-6 space-y-4">
       <ul className="space-y-2">
         {pkg.highlights.map((highlight, index) => (
           <li key={index} className="flex items-center gap-2 text-muted-foreground">
             <Check className="w-4 h-4 text-primary flex-shrink-0" />
             {highlight}
           </li>
         ))}
       </ul>
       <button
         onClick={onViewMore}
         className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity"
       >
         View More
       </button>
     </div>
   </motion.div>
 );
 
 const PackageModal = ({ pkg, onClose }: { pkg: Package; onClose: () => void }) => {
   const [currentImage, setCurrentImage] = useState(0);
 
   const handleWhatsApp = () => {
     const message = encodeURIComponent(`Hi! I'm interested in the "${pkg.title}" package at Hotel Bemaro. Please provide more details.`);
     window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
   };
 
   return (
     <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 overflow-y-auto"
       onClick={onClose}
     >
       <motion.div
         initial={{ scale: 0.9, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         exit={{ scale: 0.9, opacity: 0 }}
         className="bg-card rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-premium-xl"
         onClick={(e) => e.stopPropagation()}
       >
         {/* Gallery Carousel */}
         <div className="relative h-72 md:h-96">
           <img
             src={pkg.gallery[currentImage]}
             alt={pkg.title}
             className="w-full h-full object-cover"
           />
           <button
             onClick={onClose}
             className="absolute top-4 right-4 p-2 rounded-full bg-foreground/50 text-primary-foreground hover:bg-foreground/70 transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
           {pkg.gallery.length > 1 && (
             <>
               <button
                 onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : pkg.gallery.length - 1))}
                 className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/50 text-primary-foreground hover:bg-foreground/70 transition-colors"
               >
                 <ChevronLeft className="w-5 h-5" />
               </button>
               <button
                 onClick={() => setCurrentImage((prev) => (prev < pkg.gallery.length - 1 ? prev + 1 : 0))}
                 className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/50 text-primary-foreground hover:bg-foreground/70 transition-colors"
               >
                 <ChevronRight className="w-5 h-5" />
               </button>
             </>
           )}
         </div>
 
         <div className="p-6 md:p-8 space-y-6">
           <h2 className="text-3xl font-bold text-foreground">{pkg.title}</h2>
           <p className="text-muted-foreground text-lg leading-relaxed">{pkg.description}</p>
 
           <div>
             <h4 className="font-bold text-lg text-foreground mb-4">What's Included</h4>
             <ul className="grid md:grid-cols-2 gap-3">
               {pkg.inclusions.map((item, index) => (
                 <li key={index} className="flex items-center gap-2 text-muted-foreground">
                   <Check className="w-4 h-4 text-primary flex-shrink-0" />
                   {item}
                 </li>
               ))}
             </ul>
           </div>
 
           <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <div className="flex-1 text-center sm:text-left">
               <span className="text-sm text-muted-foreground">Price</span>
               <p className="text-xl font-bold text-primary">{pkg.price}</p>
             </div>
             <button
               onClick={handleWhatsApp}
               className="flex-1 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
               </svg>
               Inquire on WhatsApp
             </button>
           </div>
         </div>
       </motion.div>
     </motion.div>
   );
 };
 
 export const WeddingsEvents = () => {
   const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
 
   return (
     <section className="py-24 md:py-32 bg-background">
       <div className="container mx-auto px-4 lg:px-8">
         {/* Wedding Packages */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Wedding Packages</h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Begin your forever at Hotel Bemaro, where every wedding is a masterpiece of love and elegance.
           </p>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
         </motion.div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
           {weddingPackages.map((pkg) => (
             <PackageCard key={pkg.id} pkg={pkg} onViewMore={() => setSelectedPackage(pkg)} />
           ))}
         </div>
 
         {/* Event Packages */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Event Packages</h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             From corporate gatherings to milestone celebrations, we make every event extraordinary.
           </p>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
         </motion.div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {eventPackages.map((pkg) => (
             <PackageCard key={pkg.id} pkg={pkg} onViewMore={() => setSelectedPackage(pkg)} />
           ))}
         </div>
       </div>
 
       {/* Package Modal */}
       <AnimatePresence>
         {selectedPackage && (
           <PackageModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
         )}
       </AnimatePresence>
     </section>
   );
 };