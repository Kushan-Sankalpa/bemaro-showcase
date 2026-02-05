 import { useState, useEffect, useRef } from 'react';
 import { motion, useInView, AnimatePresence } from 'framer-motion';
 import { Star, X } from 'lucide-react';
 
 interface Review {
   id: string;
   name: string;
   avatar: string;
   rating: number;
   date: string;
   text: string;
 }
 
 const defaultReviews: Review[] = [
   {
     id: '1',
     name: 'Sarah Mitchell',
     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
     rating: 5,
     date: '2 weeks ago',
     text: 'Absolutely stunning hotel! The service was impeccable and the views from our room were breathtaking. Will definitely return.',
   },
   {
     id: '2',
     name: 'James Rodriguez',
     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
     rating: 5,
     date: '1 month ago',
     text: 'We hosted our wedding at Hotel Bemaro and it was beyond perfect. The team made our dream wedding come true!',
   },
   {
     id: '3',
     name: 'Emily Chen',
     avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
     rating: 5,
     date: '3 weeks ago',
     text: 'The spa treatments were heavenly and the restaurant serves the most delicious food. A true luxury experience.',
   },
   {
     id: '4',
     name: 'Michael Thompson',
     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
     rating: 4,
     date: '2 months ago',
     text: 'Great location, friendly staff, and beautiful rooms. The breakfast buffet has an amazing selection.',
   },
 ];
 
 const StarRating = ({ rating, interactive = false, onChange }: { rating: number; interactive?: boolean; onChange?: (r: number) => void }) => (
   <div className="flex gap-1">
     {[1, 2, 3, 4, 5].map((star) => (
       <button
         key={star}
         type="button"
         disabled={!interactive}
         onClick={() => onChange?.(star)}
         className={interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}
       >
         <Star
           className={`w-5 h-5 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
         />
       </button>
     ))}
   </div>
 );
 
 export const Testimonials = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const [reviews, setReviews] = useState<Review[]>([]);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [newReview, setNewReview] = useState({ name: '', email: '', text: '', rating: 5 });
   const [isPaused, setIsPaused] = useState(false);
 
   useEffect(() => {
     const stored = localStorage.getItem('hotelBemaroReviews');
     if (stored) {
       setReviews([...defaultReviews, ...JSON.parse(stored)]);
     } else {
       setReviews(defaultReviews);
     }
   }, []);
 
   useEffect(() => {
     if (isPaused) return;
     const interval = setInterval(() => {
       setCurrentIndex((prev) => (prev + 1) % reviews.length);
     }, 4000);
     return () => clearInterval(interval);
   }, [reviews.length, isPaused]);
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     const review: Review = {
       id: Date.now().toString(),
       name: newReview.name,
       avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${newReview.name}`,
       rating: newReview.rating,
       date: 'Just now',
       text: newReview.text,
     };
     const userReviews = JSON.parse(localStorage.getItem('hotelBemaroReviews') || '[]');
     userReviews.push(review);
     localStorage.setItem('hotelBemaroReviews', JSON.stringify(userReviews));
     setReviews([...reviews, review]);
     setNewReview({ name: '', email: '', text: '', rating: 5 });
     setIsModalOpen(false);
   };
 
   return (
     <section ref={ref} className="py-24 md:py-32 bg-background overflow-hidden">
       <div className="container mx-auto px-4 lg:px-8">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
             What Our Guests Say
           </h2>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         {/* Testimonials Slider */}
         <div
           className="relative max-w-4xl mx-auto mb-12"
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}
         >
           <div className="overflow-hidden">
             <div
               className="flex transition-transform duration-500 ease-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
               {reviews.map((review) => (
                 <div key={review.id} className="w-full flex-shrink-0 px-4">
                   <div className="bg-card rounded-2xl p-8 shadow-premium border border-border">
                     <div className="flex items-start gap-4 mb-4">
                       <img
                         src={review.avatar}
                         alt={review.name}
                         className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                       />
                       <div className="flex-1">
                         <h4 className="font-bold text-lg text-foreground">{review.name}</h4>
                         <div className="flex items-center gap-3">
                           <StarRating rating={review.rating} />
                           <span className="text-sm text-muted-foreground">{review.date}</span>
                         </div>
                       </div>
                       <div className="flex items-center gap-1 text-xs text-muted-foreground">
                         <svg className="w-4 h-4" viewBox="0 0 24 24">
                           <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                           <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                           <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                           <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                         </svg>
                         Google
                       </div>
                     </div>
                     <p className="text-muted-foreground text-lg leading-relaxed">"{review.text}"</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
 
         {/* Write Review Button */}
         <div className="text-center">
           <button
             onClick={() => setIsModalOpen(true)}
             className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover-lift transition-all shadow-premium"
           >
             Write a Review
           </button>
         </div>
       </div>
 
       {/* Review Modal */}
       <AnimatePresence>
         {isModalOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50"
             onClick={() => setIsModalOpen(false)}
           >
             <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               className="bg-card rounded-2xl p-8 w-full max-w-lg shadow-premium-xl"
               onClick={(e) => e.stopPropagation()}
             >
               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-2xl font-bold text-foreground">Write a Review</h3>
                 <button
                   onClick={() => setIsModalOpen(false)}
                   className="p-2 rounded-full hover:bg-secondary transition-colors"
                 >
                   <X className="w-5 h-5" />
                 </button>
               </div>
 
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Your Rating</label>
                   <StarRating rating={newReview.rating} interactive onChange={(r) => setNewReview({ ...newReview, rating: r })} />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                   <input
                     type="text"
                     required
                     value={newReview.name}
                     onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                     placeholder="Your name"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Email (optional)</label>
                   <input
                     type="email"
                     value={newReview.email}
                     onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                     placeholder="your@email.com"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">Your Review *</label>
                   <textarea
                     required
                     rows={4}
                     value={newReview.text}
                     onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                     className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                     placeholder="Share your experience..."
                   />
                 </div>
                 <button
                   type="submit"
                   className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity"
                 >
                   Submit Review
                 </button>
               </form>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
     </section>
   );
 };