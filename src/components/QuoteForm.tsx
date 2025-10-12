'use client';

import { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
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
        product: '',
        message: '',
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
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Teklif Formu</h2>
        <p className="text-[#131C3C] font-medium text-sm">
          Endüstriyel mutfak ekipmanları için detaylı teklif almak için formu doldurun.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-700 font-medium">Teklif talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-red-700 font-medium">Bir hata oluştu. Lütfen tekrar deneyin.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-[#131C3C] mb-2">
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent transition-colors text-gray-900"
              placeholder="Adınızı ve soyadınızı girin"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-[#131C3C] mb-2">
              E-posta Adresi *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent transition-colors text-gray-900"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-[#131C3C] mb-2">
              Telefon Numarası *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent transition-colors text-gray-900"
              placeholder="+90 555 123 45 67"
              required
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-xs font-medium text-[#131C3C] mb-2">
              Şirket Adı
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent transition-colors text-gray-900"
              placeholder="Şirket adınızı girin"
            />
          </div>
        </div>

        {/* Product Selection */}
        <div>
          <label htmlFor="product" className="block text-xs font-medium text-[#131C3C] mb-2">
            Ürün Kategorisi *
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-gray-900"
            required
          >
            <option value="">Ürün kategorisini seçiniz</option>
            <option value="endustriyel-mutfak">Endüstriyel Mutfak Ekipmanları</option>
            <option value="acik-bufe">Açık Büfe Ekipmanları & Servis Üniteleri</option>
            <option value="ekmek-unlu">Ekmek & Unlu Mamuller Dolapları</option>
            <option value="pasta-sarkuteri">Pasta & Şarküteri Dolapları</option>
            <option value="waffle-kumpir">Waffle & Kumpir Dolapları</option>
            <option value="cikolata-lokum">Çikolata & Lokum Dolapları</option>
            <option value="borek-baklava">Börek & Baklava Dolapları</option>
          </select>
        </div>

        {/* Budget and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-xs font-medium text-[#131C3C] mb-2">
              Bütçe Aralığı
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent transition-colors text-gray-900"
            >
              <option value="">Bütçe aralığını seçiniz</option>
              <option value="0-50k">0 - 50.000 TL</option>
              <option value="50k-100k">50.000 - 100.000 TL</option>
              <option value="100k-250k">100.000 - 250.000 TL</option>
              <option value="250k-500k">250.000 - 500.000 TL</option>
              <option value="500k+">500.000 TL+</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="timeline" className="block text-xs font-medium text-[#131C3C] mb-2">
              Zaman Çizelgesi
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent transition-colors text-gray-900"
            >
              <option value="">Zaman çizelgesini seçiniz</option>
              <option value="acil">Acil (1 hafta)</option>
              <option value="1-ay">1 Ay</option>
              <option value="3-ay">3 Ay</option>
              <option value="6-ay">6 Ay</option>
              <option value="1-yil">1 Yıl</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-[#131C3C] mb-2">
            Ekstra Notlar
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            maxLength={180}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-gray-900"
            placeholder="Projeniz hakkında detaylı bilgi verebilirsiniz..."
          />
          <div className="text-right text-xs text-[#131C3C] mt-1 font-medium">
            {formData.message.length}/180
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="privacy"
            className="mt-1 w-4 h-4 text-[#66B2FF] border-gray-300 rounded focus:ring-[#66B2FF]"
            required
          />
          <label htmlFor="privacy" className="text-xs text-[#131C3C] font-medium">
            <a href="/gizlilik" className="text-[#66B2FF] hover:text-[#4A90E2]">Gizlilik Politikası</a>&apos;nı okudum ve kabul ediyorum. 
            Kişisel verilerimin işlenmesine onay veriyorum.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#B8860B] to-[#CD853F] hover:from-[#CD853F] hover:to-[#B8860B] disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#B8860B]/25 border border-[#B8860B]/40 flex items-center justify-center text-sm"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gönderiliyor...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Hemen Teklif Al
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;