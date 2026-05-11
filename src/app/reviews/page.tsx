import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";
import PageHero from "@/components/PageHero";
import { Star, Quote } from "lucide-react";

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
    source: "Internal",
    name: "Alex K.",
    role: "Senior Technician",
    text: "I've been repairing phones here for 5 years. We use the best tools and parts available. We don't cut corners.",
    date: "Employee Team"
  },
  {
    source: "Business",
    name: "David H.",
    role: "Business Owner",
    text: "We send all our company iPads here for maintenance. They are fast, reliable, and the billing is always straightforward.",
    date: "Corporate Partner"
  }
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageHero 
          title="CLIENT"
          highlight="REVIEWS."
          subtitle="Real feedback from our customers and our team. We take pride in every repair we complete."
        />
        {/* Section 1: Quality Reviews */}
        <section className="py-24 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <p className="text-4xl lg:text-6xl font-black text-secondary leading-none">QUALITY <br />REVIEWS</p>
              </div>
              <p className="text-slate-500 max-w-md text-lg font-medium leading-relaxed">
                Honest feedback from across multiple platforms. We maintain strict transparency regarding our service quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border overflow-hidden">
              {reviewSources.map((review, i) => (
                <div 
                  key={i} 
                  className={`p-12 space-y-8 group transition-all duration-300 ${i % 2 === 0 ? "bg-white" : "bg-surface-2"} hover:bg-primary/5`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex text-primary space-x-1 transition-transform group-hover:scale-105">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>
                    <span className="text-[9px] font-black text-primary tracking-widest uppercase group-hover:text-primary/70 transition-colors">{review.date}</span>
                  </div>
                  <div className="relative">
                    <p className="text-lg font-medium text-slate-600 leading-relaxed min-h-[6rem]">"{review.text}"</p>
                  </div>
                  <div className="pt-8 border-t border-border">
                    <div className="font-black text-secondary uppercase tracking-widest text-xs mb-1">{review.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">{review.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Trust Standards */}
        <TrustSection />

        {/* Section 3: Submit Review */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary p-16 rounded-lg overflow-hidden flex flex-col items-center text-center">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">YOUR EXPERIENCE</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none mb-8">SUBMIT A <br />REVIEW</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-lg mb-12">
                We value your honest feedback. Help us maintain our rigorous service standards by sharing your repair experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://g.page/review" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all text-center rounded">Google Review</a>
                <a href="/contact?scroll=form" className="px-10 py-5 border border-border text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-center rounded">Direct Feedback</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
