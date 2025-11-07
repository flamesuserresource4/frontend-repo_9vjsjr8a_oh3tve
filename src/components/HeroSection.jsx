import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Phone, Mail } from 'lucide-react';

const HeroSection = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
          <Rocket className="w-4 h-4" />
          Building Tomorrow’s Leaders
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Active Brains International Academy
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          A forward-looking day high school in Port Harcourt delivering the Nigerian curriculum with a global mindset, character, and leadership at the core.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('admissions')}
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold shadow-lg shadow-orange-600/20 transition"
            aria-label="Apply for Admission"
          >
            Apply for Admission
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="inline-flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-200 hover:ring-gray-300 text-gray-900 px-6 py-3 font-semibold"
            aria-label="Make an enquiry"
          >
            Make Enquiry
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
          <a href="tel:+2348000000000" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Phone className="w-4 h-4" /> +234 800 000 0000
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="mailto:admissions@activebrainsacademy.ng" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Mail className="w-4 h-4" /> admissions@activebrainsacademy.ng
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
