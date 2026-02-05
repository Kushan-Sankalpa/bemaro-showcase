 import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
 
 interface FooterProps {
   onNavigate: (section: string) => void;
 }
 
 export const Footer = ({ onNavigate }: FooterProps) => {
   const marqueeText = 'Hotel Bemaro • Luxury Accommodations • Unforgettable Weddings • World-Class Events • Special Offers • Premium Service • ';
 
   return (
     <footer className="bg-primary text-primary-foreground">
       {/* Marquee Strip */}
       <div className="overflow-hidden py-4 bg-primary-dark border-b border-primary-foreground/10">
         <div
           className="flex whitespace-nowrap"
           style={{ animation: 'marquee 20s linear infinite', width: 'max-content' }}
         >
           {[...Array(4)].map((_, i) => (
             <span key={i} className="text-lg font-medium opacity-80 mx-4">
               {marqueeText}
             </span>
           ))}
         </div>
       </div>
 
       <div className="container mx-auto px-4 lg:px-8 py-16">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
           {/* Logo & About */}
           <div className="space-y-6">
             <div className="flex items-center gap-3">
               <img
                 src="/logo.jpg"
                 alt="Hotel Bemaro"
                 className="h-12 w-auto object-contain rounded-lg bg-primary-foreground/10 p-1"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                 }}
               />
               <span className="font-display font-bold text-xl">Hotel Bemaro</span>
             </div>
             <p className="text-primary-foreground/80 leading-relaxed">
               Experience luxury and elegance at Hotel Bemaro, where every moment is crafted 
               to perfection. Your dream destination awaits.
             </p>
             <div className="flex gap-4">
               <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                 <Twitter className="w-5 h-5" />
               </a>
               <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                 <Youtube className="w-5 h-5" />
               </a>
             </div>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-bold text-lg mb-6">Quick Links</h4>
             <ul className="space-y-3">
               {['Home', 'About Us', 'Gallery', 'Weddings and Events', 'Offers', 'Contact Us'].map((link) => (
                 <li key={link}>
                   <button
                     onClick={() => onNavigate(link.toLowerCase().replace(/ /g, '-').replace('about-us', 'about').replace('contact-us', 'contact').replace('weddings-and-events', 'weddings'))}
                     className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                   >
                     {link}
                   </button>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Services */}
           <div>
             <h4 className="font-bold text-lg mb-6">Our Services</h4>
             <ul className="space-y-3 text-primary-foreground/80">
               <li>Luxury Accommodations</li>
               <li>Wedding Ceremonies</li>
               <li>Corporate Events</li>
               <li>Fine Dining</li>
               <li>Spa & Wellness</li>
               <li>Concierge Services</li>
             </ul>
           </div>
 
           {/* Contact Info */}
           <div>
             <h4 className="font-bold text-lg mb-6">Contact Us</h4>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                 <span className="text-primary-foreground/80">
                   123 Paradise Avenue,<br />
                   Luxury District, 10001
                 </span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 flex-shrink-0" />
                 <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                   +1 (234) 567-890
                 </a>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 flex-shrink-0" />
                 <a href="mailto:info@hotelbemaro.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                   info@hotelbemaro.com
                 </a>
               </li>
             </ul>
           </div>
         </div>
 
         <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/60">
           <p>&copy; {new Date().getFullYear()} Hotel Bemaro. All rights reserved.</p>
         </div>
       </div>
     </footer>
   );
 };