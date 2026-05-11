import React from "react";
import { Star, CheckCircle2, ShieldCheck, Zap, Award } from "lucide-react";

const reviews = [
  {
    name: "ALEX JOHNSON",
    role: "IPHONE 15 PRO",
    text: "Precise repair work and transparent pricing. The technician was highly professional and explained the process clearly.",
    rating: 5,
  },
  {
    name: "SARAH MILLER",
    role: "SAMSUNG S23 ULTRA",
    text: "Strict attention to detail. My device was returned in factory-new condition with all seals intact.",
    rating: 5,
  },
  {
    name: "DAVID CHEN",
    role: "IPAD PRO M2",
    text: "Reliable service for enterprise devices. Same-day turnaround was critical for our workflow.",
    rating: 5,
  },
  {
    name: "EMMA WILSON",
    role: "MACBOOK AIR M1",
    text: "Professional laboratory environment. They handled my data recovery with extreme care and kept me updated throughout the process.",
    rating: 5,
  },
];

const TrustSection = () => {
  return (
    <section id="reviews" className="py-24 bg-surface-2 relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <p className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase">STRICT <br />STANDARDS</p>
          </div>
          <p className="text-slate-500 max-w-md text-lg font-medium leading-relaxed">
            Standardized repair workflows and premium components ensure the highest level of reliability for every device we handle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="p-10 border border-border bg-white hover:border-primary transition-all group flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex text-primary mb-6 space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary" />
                  ))}
                </div>
                <p className="text-lg font-medium text-slate-600 mb-8 leading-relaxed italic">"{review.text}"</p>
              </div>
              <div className="flex justify-between items-end border-t border-border pt-6">
                <div>
                  <div className="font-black text-secondary uppercase tracking-widest text-xs mb-1">{review.name}</div>
                  <div className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase">{review.role}</div>
                </div>
                <div className="text-[10px] font-black text-slate-400">VERIFIED USER</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default TrustSection;
