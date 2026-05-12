"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { History, Target, Users, Shield, Award, Zap, Activity, Cpu, UserCheck, Eye, ClipboardCheck, Timer, Smartphone, ShieldCheck, Microscope } from "lucide-react";


export default function AboutPage() {
  const [flippedOverview, setFlippedOverview] = React.useState<number | null>(null);
  const [flippedStandards, setFlippedStandards] = React.useState<number | null>(null);

  const overviewItems = [
    {
      icon: <History className="w-10 h-10" />,
      title: "HISTORY",
      desc: "Established with a vision to provide professional-grade hardware solutions in an increasingly complex digital world.",
      back: "Started in 2018 with a single workbench. Now operating with advanced micro-soldering labs and 15+ certified specialists across 3 locations."
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "MISSION",
      desc: "To deliver reliable, high-quality repair services using standardized protocols and premium components.",
      back: "Focusing on the 3 Pillars of Restoration: Circuit Integrity, Structural Stability, and Component Longevity. We aim for zero-return quality."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "TEAM",
      desc: "A group of certified technicians dedicated to maintaining the highest standards of technical hardware care.",
      back: "Our specialists hold Master Technician certifications. Regular internal training on emerging foldable and 5G technologies."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "VALUES",
      desc: "Integrity, precision, and transparency guide every interaction and technical procedure within our workshop.",
      back: "Radical Transparency: Real-time status. Engineering Precision: Micron-level accuracy. Absolute Reliability: 12-month warranty."
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "QUALITY",
      desc: "We maintain a rigorous quality assurance protocol to ensure every device meets factory specifications.",
      back: "Every device undergoes a 45-point diagnostic check. We use high-precision multimeters and thermal cameras for circuit validation."
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "INNOVATION",
      desc: "Continuously updating our diagnostic equipment and repair methodologies to match evolving hardware technology.",
      back: "Investing in AI-driven diagnostic tools and state-of-the-art BGA rework stations to handle next-gen mobile architecture."
    }
  ];

  const standardItems = [
    { title: "Diagnostics", desc: "Standardized testing procedures to accurately identify hardware failures.", icon: <Activity className="w-10 h-10" />, back: "Advanced software diagnostics and board-level current testing ensure we find the root cause, not just the symptom." },
    { title: "OEM Parts", desc: "We use only premium, original-spec replacement parts for maximum reliability.", icon: <Cpu className="w-10 h-10" />, back: "Every part is vetted for technical compliance with factory standards. No cheap clones, only professional-grade glass and chips." },
    { title: "Certified Staff", desc: "Repairs performed by experienced, certified technical specialists.", icon: <UserCheck className="w-10 h-10" />, back: "Our staff undergo rigorous quarterly certification tests to stay ahead of new device releases and repair techniques." },
    { title: "Transparency", desc: "Clear, upfront business pricing with no hidden service fees.", icon: <Eye className="w-10 h-10" />, back: "You get a detailed quote before work starts. We explain the 'why' behind every repair step for your peace of mind." },
    { title: "Warranty", desc: "Comprehensive service guarantee backing every component we replace.", icon: <ClipboardCheck className="w-10 h-10" />, back: "Our 1-year warranty covers both parts and labor. If the component fails due to a defect, we replace it at zero cost to you." },
    { title: "Speed", desc: "Optimized repair workflows ensuring rapid turnaround for essential devices.", icon: <Timer className="w-10 h-10" />, back: "90% of screen and battery repairs are completed in under 45 minutes while you wait in our comfortable lounge." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageHero
          title="ABOUT"
          highlight="MOBWIK."
          subtitle="A leading provider of high-precision repair services. Founded on technical excellence and customer transparency."
        />
        
        {/* Section 1: Overview */}
        <section className="py-24 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16 gap-6">
              <div className="space-y-4">
                <p className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase tracking-tighter">COMPANY <br />OVERVIEW</p>
              </div>
              <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                Founded on technical excellence and customer transparency. We deliver professional-grade hardware solutions with extreme precision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border overflow-hidden">
              {overviewItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setFlippedOverview(flippedOverview === index ? null : index)}
                  className={`flip-card ${flippedOverview === index ? "flipped" : ""} h-full flex flex-col`}
                >
                  <div className="flip-card-inner h-full flex flex-col flex-1">
                    {/* Front */}
                    <div className={`flip-card-front p-12 transition-colors group relative border-border flex flex-col items-center text-center h-full w-full flex-1
                      ${index % 2 === 0 ? "bg-white" : "bg-surface-2"} 
                      hover:bg-primary/5 transition-all duration-300`}>
                      <div className="text-primary mb-8 transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-black mb-4 text-secondary uppercase tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-medium min-h-[5rem]">{item.desc}</p>
                    </div>

                    {/* Back */}
                    <div className={`flip-card-back p-12 transition-colors flex flex-col items-center text-center justify-center
                      ${index % 2 === 0 ? "bg-surface-2" : "bg-white"}`}>
                      <h4 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">TECHNICAL INSIGHT</h4>
                      <p className="text-sm font-bold text-secondary uppercase tracking-tight leading-relaxed">
                        {item.back}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Service Standards */}
        <section className="py-24 bg-surface-2 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16 gap-6">
              <div className="space-y-4">
                <p className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase tracking-tighter">SERVICE <br />STANDARDS</p>
              </div>
              <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                We maintain strict quality control and standardized diagnostic procedures for every repair.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border overflow-hidden">
              {standardItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setFlippedStandards(flippedStandards === index ? null : index)}
                  className={`flip-card ${flippedStandards === index ? "flipped" : ""} h-full flex flex-col`}
                >
                  <div className="flip-card-inner h-full flex flex-col flex-1">
                    {/* Front */}
                    <div className={`flip-card-front p-12 transition-colors group relative border-border flex flex-col items-center text-center h-full w-full flex-1
                        ${index % 2 === 0 ? "bg-white" : "bg-surface-2"} 
                        hover:bg-primary/5 transition-all duration-300`}>
                      <div className="text-primary mb-8 transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-black mb-4 text-secondary uppercase tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-medium min-h-[4rem]">{item.desc}</p>
                    </div>

                    {/* Back */}
                    <div className={`flip-card-back p-12 transition-colors flex flex-col items-center text-center justify-center
                      ${index % 2 === 0 ? "bg-surface-2" : "bg-white"}`}>
                      <h4 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">TECHNICAL DATA</h4>
                      <p className="text-sm font-bold text-secondary uppercase tracking-tight leading-relaxed">
                        {item.back}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Careers CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary p-16 rounded-lg overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl">
              <div className="space-y-6">
                <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">JOIN OUR TEAM</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none">TECHNICAL<br />CAREERS</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  We are always looking for skilled technicians to join our growing operations. If you share our dedication to precision and quality, we want to hear from you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                <a href="mailto:careers@mobilewik.com" className="px-10 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all text-center rounded whitespace-nowrap">View Openings</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

