 import { motion, useInView } from 'framer-motion';
 import { useRef, useState } from 'react';
 
 const hotelImages = [
   'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
   'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
   'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
   'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
   'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
 ];
 
 const galleryRow1 = [
   'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop',
 ];
 
 const galleryRow2 = [
   'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=400&h=300&fit=crop',
 ];
 
 const galleryRow3 = [
   'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1598928506311-c55ez0e30ea?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop',
   'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=400&h=300&fit=crop',
 ];
 
 export const AboutSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const [formData, setFormData] = useState({
     name: '',
     phone: '',
     whatsapp: '',
     email: '',
     message: '',
   });
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitted(true);
     setTimeout(() => setIsSubmitted(false), 3000);
     setFormData({ name: '', phone: '', whatsapp: '', email: '', message: '' });
   };
 
   return (
     <section ref={ref} className="py-24 md:py-32">
       {/* Hero */}
       <div className="relative h-[60vh] mb-24 overflow-hidden">
         <img
           src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop"
           alt="Hotel Bemaro"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/70" />
         <div className="absolute inset-0 flex items-center justify-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
             className="text-center text-primary-foreground max-w-4xl px-4"
           >
             <h1 className="text-4xl md:text-6xl font-bold mb-6">About Hotel Bemaro</h1>
             <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
               For over 15 years, Hotel Bemaro has been a beacon of luxury and hospitality. 
               Our commitment to excellence and attention to detail has made us a cherished 
               destination for travelers seeking an extraordinary experience.
             </p>
           </motion.div>
         </div>
       </div>
 
       <div className="container mx-auto px-4 lg:px-8">
         {/* Hotel Slider */}
         <div className="mb-24 overflow-hidden">
           <div
             className="flex gap-6"
             style={{ animation: 'scrollLeft 25s linear infinite', width: 'max-content' }}
           >
             {[...hotelImages, ...hotelImages].map((img, index) => (
               <div key={index} className="w-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-premium">
                 <img src={img} alt="Hotel" className="w-full h-56 object-cover" />
               </div>
             ))}
           </div>
         </div>
 
         {/* Continuous Gallery Strips */}
         <div className="space-y-6 mb-24">
           <div className="overflow-hidden">
             <div
               className="flex gap-4"
               style={{ animation: 'scrollLeft 35s linear infinite', width: 'max-content' }}
             >
               {[...galleryRow1, ...galleryRow1].map((img, index) => (
                 <div key={index} className="w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-premium hover-lift">
                   <img src={img} alt="Gallery" className="w-full h-44 object-cover" />
                 </div>
               ))}
             </div>
           </div>
 
           <div className="overflow-hidden">
             <div
               className="flex gap-4"
               style={{ animation: 'scrollRight 35s linear infinite', width: 'max-content' }}
             >
               {[...galleryRow2, ...galleryRow2].map((img, index) => (
                 <div key={index} className="w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-premium hover-lift">
                   <img src={img} alt="Gallery" className="w-full h-44 object-cover" />
                 </div>
               ))}
             </div>
           </div>
 
           <div className="overflow-hidden">
             <div
               className="flex gap-4"
               style={{ animation: 'scrollLeft 30s linear infinite', width: 'max-content' }}
             >
               {[...galleryRow3, ...galleryRow3].map((img, index) => (
                 <div key={index} className="w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-premium hover-lift">
                   <img src={img} alt="Gallery" className="w-full h-44 object-cover" />
                 </div>
               ))}
             </div>
           </div>
         </div>
 
         {/* Contact Form */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="max-w-2xl mx-auto"
         >
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
           </div>
 
           {isSubmitted ? (
             <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
               <p className="text-muted-foreground">We'll get back to you shortly.</p>
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-premium border border-border space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                   <input
                     type="text"
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                   <input
                     type="tel"
                     required
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   />
                 </div>
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">WhatsApp Number</label>
                   <input
                     type="tel"
                     value={formData.whatsapp}
                     onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                   <input
                     type="email"
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                 <textarea
                   required
                   rows={4}
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                 />
               </div>
               <button
                 type="submit"
                 className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity"
               >
                 Send Message
               </button>
             </form>
           )}
         </motion.div>
       </div>
     </section>
   );
 };