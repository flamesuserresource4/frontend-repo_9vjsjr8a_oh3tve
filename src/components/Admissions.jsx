import React from 'react';
import { FileDown, PhoneCall, CheckCircle2 } from 'lucide-react';

const Admissions = () => {
  const fees = [
    { label: 'Application Fee', amount: '₦5,000' },
    { label: 'Acceptance Fee', amount: '₦25,000' },
    { label: 'Tuition (per term)', amount: '₦180,000 – ₦250,000' },
    { label: 'Development & PTA (per term)', amount: '₦20,000' },
  ];

  const requirements = [
    'Completed application form',
    'Birth certificate',
    'Two recent passport photographs',
    'Last school result/transfer letter',
    'Medical fitness report',
  ];

  return (
    <section id="admissions" className="py-20 bg-orange-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Admissions</h2>
          <p className="mt-3 text-gray-700">
            We admit into JSS1–3 and SS1–3. We look for character, curiosity, and readiness to grow. Our process is simple and supportive.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Steps</h3>
            <ol className="mt-4 space-y-3 list-decimal list-inside text-gray-700">
              <li>Make an enquiry and schedule a visit or virtual meeting.</li>
              <li>Purchase and submit the application form.</li>
              <li>Sit for placement assessment and interview.</li>
              <li>Receive admission decision and complete acceptance.</li>
              <li>Attend orientation and begin classes.</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 font-semibold"
              >
                <FileDown className="w-4 h-4" /> Download Application Form (PDF)
              </a>
              <a
                href="tel:+2348000000000"
                className="inline-flex items-center gap-2 rounded-lg bg-white ring-1 ring-gray-200 hover:ring-gray-300 text-gray-900 px-4 py-2 font-semibold"
              >
                <PhoneCall className="w-4 h-4" /> Call Admissions
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Fees & Finance</h3>
            <ul className="mt-4 divide-y divide-gray-100">
              {fees.map((f) => (
                <li key={f.label} className="py-3 flex items-center justify-between">
                  <span className="text-gray-700">{f.label}</span>
                  <span className="font-semibold text-gray-900">{f.amount}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Flexible payment plans available per term. Sibling discounts up to 10% for the second child and 15% for the third.
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
            <ul className="mt-4 space-y-2">
              {requirements.map((r) => (
                <li key={r} className="inline-flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" /> {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Key Dates</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Admissions open year-round with rolling assessments.</li>
              <li>New intakes at the start of each term (September, January, April).</li>
              <li>Scholarship assessments announced on our news page.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
