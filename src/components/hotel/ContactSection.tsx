 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
 
 export const ContactSection = () => {
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     whatsapp: '',
     subject: '',
     message: '',
   });
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitted(true);
     setTimeout(() => setIsSubmitted(false), 3000);
     setFormData({ name: '', email: '', phone: '', whatsapp: '', subject: '', message: '' });
   };
 
   return (
     <section className="py-24 md:py-32 bg-background">
       <div className="container mx-auto px-4 lg:px-8">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Contact Us</h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             We'd love to hear from you. Reach out to us for bookings, inquiries, or any questions.
           </p>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             {isSubmitted ? (
               <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                 <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                 <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
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
                       placeholder="Your name"
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
                       placeholder="your@email.com"
                     />
                   </div>
                 </div>
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                     <input
                       type="tel"
                       required
                       value={formData.phone}
                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                       className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                       placeholder="+1 234 567 890"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
                     <input
                       type="tel"
                       value={formData.whatsapp}
                       onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                       className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                       placeholder="+1 234 567 890"
                     />
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                   <input
                     type="text"
                     required
                     value={formData.subject}
                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                     placeholder="How can we help?"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                   <textarea
                     required
                     rows={4}
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                     placeholder="Tell us more about your inquiry..."
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
 
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-8"
           >
             <div className="bg-card rounded-2xl p-8 shadow-premium border border-border">
               <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <MapPin className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground mb-1">Address</h4>
                     <p className="text-muted-foreground">
                       123 Paradise Avenue,<br />
                       Luxury District, 10001
                     </p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Phone className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground mb-1">Phone</h4>
                     <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                       +1 (234) 567-890
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Mail className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground mb-1">Email</h4>
                     <a href="mailto:info@hotelbemaro.com" className="text-muted-foreground hover:text-primary transition-colors">
                       info@hotelbemaro.com
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <MessageCircle className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground mb-1">WhatsApp</h4>
                     <a
                       href="https://wa.me/1234567890"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-primary transition-colors"
                     >
                       +1 (234) 567-890
                     </a>
                   </div>
                 </div>
               </div>
             </div>
 
             {/* Map Placeholder */}
             <div className="bg-card rounded-2xl overflow-hidden shadow-premium border border-border h-64">
               <div className="w-full h-full bg-secondary flex items-center justify-center">
                 <div className="text-center">
                   <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                   <p className="text-muted-foreground">Interactive Map</p>
                   <p className="text-sm text-muted-foreground">Coming Soon</p>
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };