import React from 'react';

function Section9() {
  return (
    <div className="flex flex-col items-center bg-white p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Questions in mind?</h2>
      <p className="text-lg text-gray-700 mb-6">Read our FAQ</p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
        {[
          "How can a virtual office benefit my business in India?",
          "How can I cancel my virtual office service if needed?",
          "Can I legally register my business using a virtual office address in India?",
          "Is it possible to upgrade or downgrade my virtual office plan as my business needs change?",
          "How will I receive my business mail and packages with a virtual office?",
          "Can I access meeting rooms and conference facilities with a virtual office plan?",
          "Can I use a virtual office address for official correspondence and marketing materials?",
          "Are there any additional fees or hidden costs associated with virtual office services in India?",
          "Do virtual office services in India include call answering and forwarding?",
          "What kind of documentation do I need to provide to set up a virtual office in India?"
        ].map((question, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md">
            <p className="text-gray-700">{question}</p>
            <button className="text-blue-600 text-xl">+</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section9;