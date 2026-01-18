'use client';

const GoogleMap = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl md:rounded-3xl shadow-2xl border border-[#334155]/20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#8B5CF6]/20"></div>
        <div className="absolute top-4 right-4 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#8B5CF6]/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Professional Header */}
        <div className="p-6 md:p-8 border-b border-white/20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30 shadow-lg">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white">Konumumuz</h3>
              <p className="text-white/70 text-sm md:text-base">Merkez ofisimizi haritada görüntüleyin</p>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7!2d28.9087!3d41.0088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9f4e0000000%3A0x0!2zTWFsdGVwZSBNYWguIEfDvG3DvMWfc3V5dSBDYWQuIEhhY8Sxb8SfbHUgU2FuYXlpIFNpdGVzaSBObzogNTEsIFpleXRpbmJ1cm51LCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1704376800000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pars Endüstriyel Mutfak - Zeytinburnu İstanbul Konum Haritası"
            className="rounded-none"
          ></iframe>
        </div>

        {/* Map Info */}
        <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-black text-white mb-3 md:mb-4">Adres</h4>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium">
              Maltepe Mah. Gümüşsuyu Cad.<br />
              Hacıoğlu Sanayi Sitesi No: 51<br />
              Zeytinburnu / İstanbul
            </p>
          </div>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <a 
                href="https://maps.google.com/?q=Maltepe+Mah.+Gümüşsuyu+Cad.+Hacıoğlu+Sanayi+Sitesi+No:+51,+Zeytinburnu,+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#60A5FA] to-[#9CA3AF] hover:from-[#4E9EFF] hover:to-[#8B5CF6] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Google Maps&apos;te Aç
              </a>
              <a 
                href="https://wa.me/905412288366"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"></div>
    </div>
  );
};

export default GoogleMap;