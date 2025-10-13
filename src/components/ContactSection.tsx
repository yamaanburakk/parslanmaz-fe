'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#131C3C] mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-lg text-[#131C3C] max-w-2xl mx-auto font-medium">
            Projeleriniz için ücretsiz teklif alın ve uzman ekibimizle görüşün
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#66B2FF]/20">
            <h3 className="text-2xl font-semibold text-[#131C3C] mb-6">
              Teklif Formu
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#131C3C] mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-[#131C3C] transition-all duration-300"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#131C3C] mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-[#131C3C] transition-all duration-300"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#131C3C] mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-[#131C3C] transition-all duration-300"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#131C3C] mb-2">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-[#131C3C] transition-all duration-300"
                  placeholder="Projeniz hakkında detaylı bilgi verin..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#66B2FF] to-[#4E9EFF] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#4E9EFF] hover:to-[#66B2FF] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Teklif Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;