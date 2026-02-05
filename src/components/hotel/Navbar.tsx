 import { useState, useEffect } from 'react';
 import { Menu, X } from 'lucide-react';
 import { motion, AnimatePresence } from 'framer-motion';
 
 interface NavbarProps {
   currentSection: string;
   onNavigate: (section: string) => void;
 }
 
 const navLinks = [
   { id: 'home', label: 'Home' },
   { id: 'about', label: 'About Us' },
   { id: 'gallery', label: 'Gallery' },
   { id: 'weddings', label: 'Weddings and Events' },
   { id: 'offers', label: 'Offers' },
   { id: 'contact', label: 'Contact Us' },
 ];
 
 export const Navbar = ({ currentSection, onNavigate }: NavbarProps) => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   const handleNavClick = (section: string) => {
     onNavigate(section);
     setIsMobileMenuOpen(false);
   };
 
   return (
     <>
       <nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           isScrolled
             ? 'bg-background/95 backdrop-blur-md shadow-premium py-3'
             : 'bg-transparent py-5'
         }`}
       >
         <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
           {/* Logo */}
           <button
             onClick={() => handleNavClick('home')}
             className="flex items-center gap-3 hover:opacity-80 transition-opacity"
           >
             <img
               src="/logo.jpg"
               alt="Hotel Bemaro"
               className="h-12 w-auto object-contain rounded-lg"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop';
               }}
             />
             <span className={`font-display font-bold text-xl hidden sm:block ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
               Hotel Bemaro
             </span>
           </button>
 
           {/* Desktop Navigation */}
           <div className="hidden lg:flex items-center gap-8">
             {navLinks.map((link) => (
               <button
                 key={link.id}
                 onClick={() => handleNavClick(link.id)}
                 className={`relative font-medium transition-colors ${
                   isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'
                 } ${currentSection === link.id ? 'text-primary' : ''}`}
               >
                 {link.label}
                 {currentSection === link.id && (
                   <motion.div
                     layoutId="activeNav"
                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                   />
                 )}
               </button>
             ))}
           </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className={`lg:hidden p-2 rounded-lg transition-colors ${
               isScrolled ? 'text-foreground hover:bg-secondary' : 'text-primary-foreground hover:bg-primary-foreground/10'
             }`}
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
       </nav>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="fixed inset-x-0 top-[72px] z-40 lg:hidden"
           >
             <div className="bg-background/98 backdrop-blur-lg shadow-premium-lg border-b border-border">
               <div className="container mx-auto px-4 py-4">
                 {navLinks.map((link, index) => (
                   <motion.button
                     key={link.id}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: index * 0.05 }}
                     onClick={() => handleNavClick(link.id)}
                     className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                       currentSection === link.id
                         ? 'bg-primary text-primary-foreground'
                         : 'text-foreground hover:bg-secondary'
                     }`}
                   >
                     {link.label}
                   </motion.button>
                 ))}
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };