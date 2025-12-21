'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: '',
        budget: '',
        timeline: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl shadow-2xl border border-[#334155]/20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#8B5CF6]/20"></div>
        <div className="absolute top-4 right-4 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#8B5CF6]/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        {/* Professional Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-[#60A5FA]/20 to-[#9CA3AF]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 border border-[#60A5FA]/30">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] rounded-full mr-2 md:mr-3 animate-pulse"></div>
            <span className="text-white font-semibold text-xs md:text-sm tracking-wider uppercase">İletişim Formu</span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#9CA3AF] to-[#60A5FA] rounded-full ml-2 md:ml-3 animate-pulse"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#CBD5E1] bg-clip-text text-transparent">
              Profesyonel
            </span>
            <span className="block bg-gradient-to-r from-[#60A5FA] via-[#9CA3AF] to-[#64748B] bg-clip-text text-transparent">
              İletişim Merkezi
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Endüstriyel mutfak ekipmanları konusunda 
            <span className="text-[#60A5FA] font-bold"> uzman ekibimizle</span> iletişime geçin.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-[#10B981]/20 to-[#059669]/20 backdrop-blur-sm border border-[#10B981]/30 rounded-xl md:rounded-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg mr-3 md:mr-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-bold text-base md:text-lg">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-[#EF4444]/20 to-[#DC2626]/20 backdrop-blur-sm border border-[#EF4444]/30 rounded-xl md:rounded-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg mr-3 md:mr-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-white font-bold text-base md:text-lg">Bir hata oluştu. Lütfen tekrar deneyin.</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                Adınız Soyadınız *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white placeholder-white/60 text-base md:text-lg font-medium"
                placeholder="Adınızı girin"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                E-posta Adresiniz *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white placeholder-white/60 text-base md:text-lg font-medium"
                placeholder="E-posta adresinizi girin"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                Telefon Numaranız
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white placeholder-white/60 text-base md:text-lg font-medium"
                placeholder="+90 555 123 45 67"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                Şirket Adı
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white placeholder-white/60 text-base md:text-lg font-medium"
                placeholder="Şirket adınızı girin"
              />
            </div>
          </div>

          {/* Service Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <label htmlFor="service" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                Hizmet Türü
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white text-base md:text-lg font-medium"
                style={{
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <option value="" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Seçiniz</option>
                <option value="ekipman-satis" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Ekipman Satışı</option>
                <option value="kurulum" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Kurulum Hizmeti</option>
                <option value="bakim" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Bakım & Onarım</option>
                <option value="danismanlik" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Danışmanlık</option>
                <option value="ozel-uretim" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Özel Üretim</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                Bütçe Aralığı
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white text-base md:text-lg font-medium"
                style={{
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <option value="" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Seçiniz</option>
                <option value="0-50k" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>0 - 50.000 TL</option>
                <option value="50k-100k" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>50.000 - 100.000 TL</option>
                <option value="100k-250k" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>100.000 - 250.000 TL</option>
                <option value="250k-500k" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>250.000 - 500.000 TL</option>
                <option value="500k+" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>500.000 TL+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                Zaman Çizelgesi
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white text-base md:text-lg font-medium"
                style={{
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <option value="" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Seçiniz</option>
                <option value="acil" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>Acil (1 hafta)</option>
                <option value="1-ay" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>1 Ay</option>
                <option value="3-ay" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>3 Ay</option>
                <option value="6-ay" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>6 Ay</option>
                <option value="1-yil" style={{ color: '#ffffff', backgroundColor: '#1E293B' }}>1 Yıl</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
              Konu *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 text-white placeholder-white/60 text-base md:text-lg font-medium"
              placeholder="Mesajınızın konusunu girin"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm md:text-base font-bold text-white mb-2 md:mb-3">
              Mesajınız *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#60A5FA]/50 focus:border-[#60A5FA]/50 transition-all duration-300 resize-none text-white placeholder-white/60 text-base md:text-lg font-medium"
              placeholder="Detaylı mesajınızı yazın..."
              required
            />
          </div>

          <div className="flex items-start space-x-3 md:space-x-4">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 w-4 h-4 md:w-5 md:h-5 text-[#60A5FA] border-white/30 rounded focus:ring-[#60A5FA]/50 bg-white/10"
              required
            />
            <label htmlFor="privacy" className="text-sm md:text-base text-white/80 font-medium">
              <a href="/gizlilik" className="text-[#60A5FA] hover:text-[#9CA3AF] font-bold">Gizlilik Politikası</a>&apos;nı okudum ve kabul ediyorum. 
              Kişisel verilerimin işlenmesine onay veriyorum.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] hover:from-[#4E9EFF] hover:to-[#8B5CF6] disabled:from-[#6B7280] disabled:to-[#4B5563] text-white py-4 md:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 md:h-6 md:w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gönderiliyor...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Mesaj Gönder
              </>
            )}
          </button>
        </form>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"></div>
    </div>
  );
};

export default ContactForm;