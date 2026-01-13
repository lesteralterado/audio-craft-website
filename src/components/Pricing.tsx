import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₱5,000',
      features: [
        'Basic sound system setup',
        'Standard lighting for small events',
        '1 LED wall panel',
        'Up to 50 guests',
        '2 hours setup time'
      ]
    },
    {
      name: 'Standard',
      price: '₱10,000',
      features: [
        'Advanced sound system with mixer',
        'Dynamic lighting effects',
        '2-3 LED wall panels',
        'Up to 150 guests',
        '4 hours setup time',
        'Basic DJ services'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '₱20,000',
      features: [
        'Professional sound system with subwoofers',
        'Full lighting and laser show',
        'Custom LED wall setup',
        'Up to 300 guests',
        '8 hours setup time',
        'Professional DJ and MC',
        'Event coordination'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Event Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                plan.popular ? 'border-2 border-blue-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
              <div className="text-4xl font-bold text-center mb-6 text-blue-400">{plan.price}</div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;