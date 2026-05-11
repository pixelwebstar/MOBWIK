import React from "react";
import Link from "next/link";
import { Smartphone, Mail, Globe, X, MapPin, Phone, MessageSquare, UserPlus } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-surface-2 border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Branding */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded">
                <Smartphone className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-secondary tracking-tighter">MOBILE<span className="text-primary">WIK</span></span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed text-sm">
              Mobile Wik is dedicated to providing high-quality, reliable repair services for all your essential devices. We prioritize precision, transparency, and customer satisfaction in every repair we perform.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+1234567890" title="Call Us" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all rounded">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://wa.me/1234567890" title="WhatsApp" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all rounded">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" title="Google Business" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all rounded">
                <MapPin className="w-4 h-4" />
              </a>
              <a href="/about" title="Careers" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all rounded">
                <UserPlus className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">PAGES</h4>
            <ul className="flex flex-col gap-6">
              {["Home", "About", "Services", "Reviews", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : item === "Contact" ? "/contact?scroll=form" : `/${item.toLowerCase()}`} className="text-xs font-black text-secondary hover:text-primary transition-colors uppercase tracking-wider block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">SERVICES</h4>
            <ul className="flex flex-col gap-6">
              {["Screen Repair", "Battery Repair", "Water Damage", "Fix My Phone", "Camera Repair", "Back Glass"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-xs font-black text-secondary hover:text-primary transition-colors uppercase tracking-wider block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">BUSINESS INFO</h4>
            <ul className="flex flex-col gap-6">
              <li className="text-xs font-black text-secondary uppercase tracking-wider hover:text-primary transition-colors flex items-center">
                <span className="text-slate-400 w-16">HOURS:</span> 
                <span>MON-SAT 09:00 - 18:00</span>
              </li>
              <li className="text-xs font-black text-secondary uppercase tracking-wider hover:text-primary transition-colors flex items-center">
                <span className="text-slate-400 w-16">LOC:</span>
                <a href="https://maps.google.com/?q=11910+76th+Street" target="_blank" rel="noopener noreferrer">
                  11910 76TH STREET
                </a>
              </li>
              <li className="text-xs font-black text-secondary uppercase tracking-wider hover:text-primary transition-colors flex items-center">
                <span className="text-slate-400 w-16">TEL:</span>
                <a href="tel:+1234567890">+1.234.567.890</a>
              </li>
              <li className="text-xs font-black text-secondary uppercase tracking-wider hover:text-primary transition-colors flex items-center">
                <span className="text-slate-400 w-16">CHAT:</span>
                <a href="https://wa.me/1234567890">+1.234.567.890</a>
              </li>
              <li className="text-xs font-black text-secondary uppercase tracking-wider hover:text-primary transition-colors flex items-center">
                <span className="text-slate-400 w-16">MAIL:</span>
                <a href="mailto:repair@mobilewik.com">REPAIR@MOBILEWIK.COM</a>
              </li>
              <li className="text-xs font-black text-secondary uppercase tracking-wider hover:text-primary transition-colors flex items-center">
                <span className="text-slate-400 w-16">TEAM:</span>
                <a href="/contact?scroll=form">ONLINE 24/7</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-center items-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 gap-6">
          <p>© 2026 MOBILE WIK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      {/* Structured Action Buttons */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col space-y-3">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-[#25D366] text-white rounded-lg shadow-xl hover:scale-105 transition-all border-2 border-white/20 group"
          title="WhatsApp Support"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
        <a
          href="tel:+1234567890"
          className="p-5 bg-secondary text-white rounded-lg shadow-xl hover:scale-105 transition-all border-2 border-white/20 group"
          title="Call Terminal"
        >
          <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
