"use client";

import React from "react";
import { Star } from "lucide-react";

const reviewSources = [
  {
    source: "Google",
    name: "John D.",
    role: "Customer",
    text: "Best screen repair in town. Fast, honest, and much cheaper than the official store. My iPhone looks new again.",
    date: "Google Review"
  },
  {
    source: "Yelp",
    name: "Sarah L.",
    role: "Customer",
    text: "They fixed my water-damaged Samsung in just 4 hours. Really friendly staff and they explained everything clearly.",
    date: "Yelp Review"
  },
  {
    source: "Facebook",
    name: "Mike T.",
    role: "Customer",
    text: "Reliable guys. I've taken three different devices here and they never disappoint. The quality of parts is top-notch.",
    date: "Facebook Review"
  },
  {
    source: "Trustpilot",
    name: "Emma W.",
    role: "Customer",
    text: "Highly professional service. They actually care about fixing your phone properly rather than just taking your money.",
    date: "Trustpilot Review"
  },
  {
    source: "Google",
    name: "Chris P.",
    role: "Customer",
    text: "The only place I trust with my MacBook. They provided a detailed diagnostic and the repair was completed ahead of schedule.",
    date: "Google Review"
  },
  {
    source: "Yelp",
    name: "Jessica R.",
    role: "Customer",
    text: "Super impressed with the transparency. They showed me exactly what was wrong and gave me options for the repair. 5 stars!",
    date: "Yelp Review"
  }
];

interface QualityReviewsProps {
  background?: "white" | "surface-2";
}

const QualityReviews = ({ background = "white" }: QualityReviewsProps) => {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const trustIndicators = [
    "Certified Hardware Solutions",
    "Technical Quality Protocol",
    "Transparent Service Workflow",
    "OEM Component Standards",
    "Post-Repair System Testing",
    "Direct Technical Accountability"
  ];

  return (
    <section className={`py-24 ${background === "white" ? "bg-white" : "bg-surface-2"} border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase">QUALITY <br />REVIEWS</p>
          </div>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Honest feedback from across multiple platforms. We maintain strict transparency regarding our service quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border overflow-hidden">
          {reviewSources.map((review, i) => (
            <div 
              key={i} 
              onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
              className={`flip-card ${flippedIndex === i ? "flipped" : ""}`}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className={`flip-card-front p-12 space-y-8 transition-all duration-300
                  ${i % 2 === 0 ? "bg-white" : "bg-surface-2"} hover:bg-primary/5`}>
                  <div className="flex justify-between items-start">
                    <div className="flex text-primary space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>
                    <span className="text-[9px] font-black text-primary tracking-widest uppercase">{review.date}</span>
                  </div>
                  <div className="relative">
                    <p className="text-lg font-medium text-slate-600 leading-relaxed min-h-[6rem]">"{review.text}"</p>
                  </div>
                  <div className="pt-8 border-t border-border">
                    <div className="font-black text-secondary uppercase tracking-widest text-xs mb-1">{review.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">{review.role}</div>
                  </div>
                </div>

                {/* Back */}
                <div className={`flip-card-back p-12 transition-colors flex flex-col items-center text-center justify-center
                  ${i % 2 === 0 ? "bg-surface-2" : "bg-white"}`}>
                  <h4 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">SERVICE TRUST</h4>
                  <p className="text-sm font-bold text-secondary uppercase tracking-tight mb-8">
                    {trustIndicators[i % trustIndicators.length]}
                  </p>
                  <a 
                    href="/contact?scroll=form"
                    className="inline-flex items-center justify-center w-full py-4 bg-secondary text-white font-black uppercase tracking-widest text-xs hover:bg-secondary/90 transition-all shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default QualityReviews;
