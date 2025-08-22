'use client'
import { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    // You can add validation here before submitting
    if (formData.name && formData.email && formData.phone && formData.purpose) {
      alert('Thank you! We will get back to you soon.');
      // Reset form
      setFormData({ name: '', email: '', phone: '', purpose: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const purposeOptions = [
    { value: '', label: 'Purpose' },
    { value: 'website-development', label: 'Website Development' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'seo-services', label: 'SEO Services' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'content-marketing', label: 'Content Marketing' },
    { value: 'ppc-advertising', label: 'PPC Advertising' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#9a0c28' }}>
      <div className="!max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Looking for the best digital marketing services in<br />
            Hyderabad?
          </h2>
        </div>

        {/* Contact Form */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
          {/* Name Input */}
          <div className="flex-1 min-w-[200px] max-w-[280px]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-lg border-0 text-gray-700 placeholder-gray-500 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 bg-white"
            />
          </div>

          {/* Email Input */}
          <div className="flex-1 min-w-[200px] max-w-[280px]">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-lg border-0 text-gray-700 placeholder-gray-500 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 bg-white"
            />
          </div>

          {/* Phone Input */}
          <div className="flex-1 min-w-[200px] max-w-[280px]">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-lg border-0 text-gray-700 placeholder-gray-500 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 bg-white"
            />
          </div>

          {/* Purpose Dropdown */}
          <div className="flex-1 min-w-[200px] max-w-[280px]">
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-lg border-0 text-gray-700 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 appearance-none bg-white cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1.5rem center',
                backgroundSize: '1rem'
              }}
            >
              {purposeOptions.map((option) => (
                <option 
                  key={option.value} 
                  value={option.value}
                  disabled={option.value === ''}
                  className={option.value === '' ? 'text-gray-500' : 'text-gray-700'}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          
           {/* Let's Talk Button */}
                <div className="pt-4 flex shrink-0 justify-center">
                    <div className='relative'>
                        <div className='absolute top-[9px] left-[4px] h-8 w-28 bg-yellow-400 rounded-md'></div>
                        <button className="relative z-5 text-[#9a0c28] bg-white font-medium py-1 px-4 rounded-md text-lg transition-all">
                            Let's Talk
                        </button>
                    </div>
                </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;