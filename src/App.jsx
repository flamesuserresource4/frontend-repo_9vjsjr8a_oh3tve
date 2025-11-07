import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Admissions from './components/Admissions';
import { AboutSection, ProgrammesSection, FacilitiesSection, TestimonialsSection, ContactSection } from './components/Sections';

const App = () => {
  return (
    <div className="font-inter text-gray-900">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgrammesSection />
        <Admissions />
        <FacilitiesSection />
        <TestimonialsSection />
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ & Finance</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900">What curriculum do you run?</h3>
                <p className="mt-2 text-gray-700">We run the Nigerian curriculum with enhancements in digital skills, leadership, and entrepreneurship.</p>
                <h3 className="mt-6 font-semibold text-gray-900">Do you offer sibling discounts?</h3>
                <p className="mt-2 text-gray-700">Yes — 10% for the second child and 15% for the third child on tuition.</p>
                <h3 className="mt-6 font-semibold text-gray-900">How much is tuition?</h3>
                <p className="mt-2 text-gray-700">Tuition ranges from ₦180,000 to ₦250,000 per term depending on class and chosen pathway.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900">Do you have boarding?</h3>
                <p className="mt-2 text-gray-700">We are a day school with extended learning and supervised after-school clubs.</p>
                <h3 className="mt-6 font-semibold text-gray-900">Can I visit the school?</h3>
                <p className="mt-2 text-gray-700">Absolutely. Book a tour any weekday between 9am and 3pm. Virtual tours are available on request.</p>
                <h3 className="mt-6 font-semibold text-gray-900">Exams prepared for</h3>
                <p className="mt-2 text-gray-700">BECE, WASSCE/WAEC, and NECO with additional support for UTME.</p>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
        <footer className="py-8 border-t border-gray-100 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Active Brains International Academy — Port Harcourt, Nigeria.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
