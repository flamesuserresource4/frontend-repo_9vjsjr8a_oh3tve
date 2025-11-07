import React from 'react';
import { School, Users2, BookOpen, Award, Building2, FlaskConical, Football, Star, MapPin, Mail, Phone } from 'lucide-react';

export const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-gray-700">
          Active Brains International Academy is a day high school in Port Harcourt dedicated to nurturing future-ready leaders. 
          We deliver the Nigerian curriculum with a global outlook, emphasizing critical thinking, digital literacy, and character.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {[
            { icon: <Award className="w-5 h-5 text-orange-600" />, title: 'Accredited', text: 'Approved by relevant education authorities.' },
            { icon: <Users2 className="w-5 h-5 text-orange-600" />, title: 'Small Class Sizes', text: 'Personalized attention for every learner.' },
            { icon: <School className="w-5 h-5 text-orange-600" />, title: 'Experienced Faculty', text: 'Caring professionals and mentors.' },
            { icon: <Star className="w-5 h-5 text-orange-600" />, title: 'Leadership Culture', text: 'Service, integrity, excellence.' },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900">Vision, Mission & Values</h3>
        <div className="mt-4 space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-900">Vision</h4>
            <p>To be a model African school shaping confident, compassionate leaders ready for a changing world.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Mission</h4>
            <p>We provide a safe, inspiring environment where students excel academically, develop strong character, and learn to lead with purpose.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Core Values</h4>
            <ul className="list-disc list-inside">
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Service</li>
              <li>Curiosity</li>
              <li>Respect</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Leadership</h4>
            <p>Our faculty is led by experienced educators and industry professionals who mentor students through academics and life skills.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ProgrammesSection = () => (
  <section id="programmes" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Programmes & Curriculum</h2>
      <p className="mt-3 text-gray-700 max-w-3xl">
        We offer the Nigerian curriculum across JSS1–3 and SS1–3 with a strong emphasis on STEM, communication, and leadership. Students are prepared for BECE and WASSCE/NECO examinations, alongside digital skills and entrepreneurship.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { icon: <BookOpen className="w-6 h-6 text-orange-600" />, title: 'Junior Secondary (JSS1–3)', text: 'Foundational subjects including Math, English, Basic Science, Social Studies, ICT, Civic Education.' },
          { icon: <BookOpen className="w-6 h-6 text-orange-600" />, title: 'Senior Secondary (SS1–3)', text: 'Science, Arts, and Commercial pathways; preparation for WASSCE/NECO and university readiness.' },
          { icon: <Award className="w-6 h-6 text-orange-600" />, title: 'Unique Programmes', text: 'Leadership labs, coding & robotics, debate & Model UN, entrepreneurship, community service.' },
        ].map((c) => (
          <div key={c.title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-start gap-3">
              {c.icon}
              <div>
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-gray-700 text-sm">{c.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FacilitiesSection = () => (
  <section id="facilities" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Facilities & Student Life</h2>
      <p className="mt-3 text-gray-700 max-w-3xl">
        A safe, vibrant campus with inspiring learning spaces and activities that build confidence and teamwork.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Building2 className="w-6 h-6 text-orange-600" />, title: 'Modern Classrooms' },
          { icon: <FlaskConical className="w-6 h-6 text-orange-600" />, title: 'Science Labs' },
          { icon: <Football className="w-6 h-6 text-orange-600" />, title: 'Sports & Clubs' },
          { icon: <Users2 className="w-6 h-6 text-orange-600" />, title: 'Mentorship Culture' },
        ].map((f) => (
          <div key={f.title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3">
              {f.icon}
            </div>
            <h3 className="font-semibold text-gray-900">{f.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonials & Reviews</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { quote: 'My son has grown in confidence and discipline. The teachers truly care.', name: 'Mrs. D., Parent' },
          { quote: 'Active Brains helped me discover my love for science and coding.', name: 'Favour, SS2' },
          { quote: 'Safe environment, strong academics, and great values — highly recommended.', name: 'Mr. O., Parent' },
        ].map((t) => (
          <figure key={t.name} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <Star className="w-5 h-5 text-amber-500" />
            <blockquote className="mt-3 text-gray-700">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-gray-900">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact & Location</h2>
        <p className="mt-3 text-gray-700">We’re happy to answer your questions and help you begin your journey with us.</p>

        <div className="mt-6 space-y-3 text-gray-700">
          <p className="inline-flex items-start gap-2"><MapPin className="w-5 h-5 text-orange-600 mt-0.5" /> No 15 Bende Street, Rumuomasi, Port Harcourt, Rivers State</p>
          <p className="inline-flex items-start gap-2"><Phone className="w-5 h-5 text-orange-600 mt-0.5" /> +234 800 000 0000</p>
          <p className="inline-flex items-start gap-2"><Mail className="w-5 h-5 text-orange-600 mt-0.5" /> admissions@activebrainsacademy.ng</p>
        </div>

        <div className="mt-6">
          <iframe
            title="School location map"
            className="w-full h-64 rounded-xl border border-gray-200"
            src="https://www.google.com/maps?q=Rumuomasi+Port+Harcourt&output=embed"
            loading="lazy"
          />
        </div>
      </div>

      <form className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">Send us a message</h3>
        <div className="mt-4 grid gap-4">
          <input aria-label="Full name" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Full name" />
          <input aria-label="Email address" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email address" />
          <textarea aria-label="Message" className="w-full rounded-lg border border-gray-300 px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your message" />
          <button type="button" className="inline-flex justify-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 font-semibold">Send Enquiry</button>
        </div>
      </form>
    </div>
  </section>
);
