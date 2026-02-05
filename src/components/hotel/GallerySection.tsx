 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { X, ChevronLeft, ChevronRight } from 'lucide-react';
 
 const galleryImages = [
   { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop', alt: 'Hotel Exterior' },
   { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop', alt: 'Luxury Suite' },
   { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop', alt: 'Pool Area' },
   { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop', alt: 'Beach View' },
   { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop', alt: 'Spa' },
   { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', alt: 'Restaurant' },
   { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop', alt: 'Bedroom' },
   { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop', alt: 'Room View' },
   { src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop', alt: 'Bathroom' },
   { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop', alt: 'Lounge' },
   { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop', alt: 'Balcony' },
   { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop', alt: 'Lobby' },
 ];
 
 export const GallerySection = () => {
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
 
   const handleKeyDown = (e: React.KeyboardEvent) => {
     if (selectedIndex === null) return;
     if (e.key === 'ArrowLeft') {
       setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
     } else if (e.key === 'ArrowRight') {
       setSelectedIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
     } else if (e.key === 'Escape') {
       setSelectedIndex(null);
     }
   };
 
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
           <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Our Gallery</h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Explore the beauty and elegance of Hotel Bemaro through our carefully curated collection.
           </p>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
         </motion.div>
 
         {/* Gallery Grid */}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {galleryImages.map((image, index) => (
             <motion.button
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.05 }}
               onClick={() => setSelectedIndex(index)}
               className={`relative rounded-xl overflow-hidden shadow-premium hover-lift group ${
                 index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
               }`}
             >
               <img
                 src={image.src}
                 alt={image.alt}
                 className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
             </motion.button>
           ))}
         </div>
       </div>
 
       {/* Lightbox Modal */}
       <AnimatePresence>
         {selectedIndex !== null && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
             onClick={() => setSelectedIndex(null)}
             onKeyDown={handleKeyDown}
             tabIndex={0}
             role="dialog"
             aria-modal="true"
           >
             <button
               onClick={() => setSelectedIndex(null)}
               className="absolute top-4 right-4 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors z-10"
               aria-label="Close gallery"
             >
               <X className="w-6 h-6" />
             </button>
 
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
               }}
               className="absolute left-4 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
               aria-label="Previous image"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
 
             <motion.img
               key={selectedIndex}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               src={galleryImages[selectedIndex].src}
               alt={galleryImages[selectedIndex].alt}
               className="max-w-full max-h-[85vh] object-contain rounded-2xl"
               onClick={(e) => e.stopPropagation()}
             />
 
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 setSelectedIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
               }}
               className="absolute right-4 p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
               aria-label="Next image"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
 
             <div className="absolute bottom-4 text-primary-foreground text-sm">
               {selectedIndex + 1} / {galleryImages.length}
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </section>
   );
 };