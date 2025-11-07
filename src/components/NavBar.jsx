import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Programmes', target: 'programmes' },
    { label: 'Admissions', target: 'admissions' },
    { label: 'Facilities', target: 'facilities' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'FAQ/Finance', target: 'faq' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-extrabold text-xl text-gray-900">
          <span className="text-orange-600">Active</span> Brains
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleScroll(item.target)}
              className="hover:text-orange-600 transition"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScroll('admissions')}
            className="ml-2 inline-flex items-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 font-semibold"
          >
            Apply Now
          </button>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleScroll(item.target)}
                className="text-left py-2 px-2 rounded hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll('admissions')}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 font-semibold"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
