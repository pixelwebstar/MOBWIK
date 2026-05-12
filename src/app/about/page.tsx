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
      back: "• Started in 2018 with a single workbench\n• Now operating with advanced micro-soldering labs\n• 15+ certified specialists across 3 locations"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "MISSION",
      desc: "To deliver reliable, high-quality repair services using standardized protocols and premium components.",
      back: "• Focused on the 3 Pillars of Restoration\n• Circuit Integrity & Structural Stability\n• Aiming for zero-return quality"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "TEAM",
      desc: "A group of certified technicians dedicated to maintaining the highest standards of technical hardware care.",
      back: "• Master Technician certifications\n• Quarterly internal training on foldable tech\n• Specialized 5G hardware expertise"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "VALUES",
      desc: "Integrity, precision, and transparency guide every interaction and technical procedure within our workshop.",
      back: "• Radical Transparency: Real-time status\n• Engineering Precision: Micron-level accuracy\n• Absolute Reliability: 12-month warranty"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "QUALITY",
      desc: "We maintain a rigorous quality assurance protocol to ensure every device meets factory specifications.",
      back: "• 45-point software & hardware diagnostic\n• High-precision multimeter validation\n• Thermal camera circuit analysis"
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "INNOVATION",
      desc: "Continuously updating our diagnostic equipment and repair methodologies to match evolving hardware technology.",
      back: "• AI-driven diagnostic tools\n• State-of-the-art BGA rework stations\n• Adaptive next-gen mobile architecture labs"
    }
  ];

  const standardItems = [
    { title: "Diagnostics", desc: "Standardized testing procedures to accurately identify hardware failures.", icon: <Activity className="w-10 h-10" />, back: "• Root cause analysis\n• Board-level current testing\n• Pre-repair system health check" },
    { title: "OEM Parts", desc: "We use only premium, original-spec replacement parts for maximum reliability.", icon: <Cpu className="w-10 h-10" />, back: "• Factory standard compliance\n• Zero-clone policy\n• Professional-grade glass & chips" },
    { title: "Certified Staff", desc: "Repairs performed by experienced, certified technical specialists.", icon: <UserCheck className="w-10 h-10" />, back: "• Master Level Certifications\n• Quarterly proficiency testing\n• Specialized device training" },
    { title: "Transparency", desc: "Clear, upfront business pricing with no hidden service fees.", icon: <Eye className="w-10 h-10" />, back: "• Guaranteed quotes upfront\n• Detailed technical explanations\n• No hidden service fees" },
    { title: "Warranty", desc: "Comprehensive service guarantee backing every component we replace.", icon: <ClipboardCheck className="w-10 h-10" />, back: "• 1-year parts & labor coverage\n• Zero-cost defect replacement\n• Nationwide service guarantee" },
    { title: "Speed", desc: "Optimized repair workflows ensuring rapid turnaround for essential devices.", icon: <Timer className="w-10 h-10" />, back: "• 45-min screen & battery fix\n• Express diagnostic priority\n• Same-day restoration target" }
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

