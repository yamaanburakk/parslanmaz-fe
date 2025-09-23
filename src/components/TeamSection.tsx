const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ahmet Pars",
      position: "Kurucu & Genel Müdür",
      description: "15+ yıllık endüstriyel mutfak deneyimi",
      expertise: "Stratejik Planlama, İş Geliştirme"
    },
    {
      name: "Mehmet Yılmaz",
      position: "Üretim Müdürü",
      description: "Paslanmaz çelik üretim uzmanı",
      expertise: "Kalite Kontrol, Üretim Optimizasyonu"
    },
    {
      name: "Ayşe Demir",
      position: "Tasarım Uzmanı",
      description: "Endüstriyel tasarım ve ergonomi uzmanı",
      expertise: "3D Tasarım, Proje Yönetimi"
    },
    {
      name: "Can Özkan",
      position: "Satış Müdürü",
      description: "B2B satış ve müşteri ilişkileri uzmanı",
      expertise: "Müşteri İlişkileri, Teknik Satış"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uzman Ekibimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deneyimli ve uzman kadromuzla projelerinizi en yüksek kalitede hayata geçiriyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary-600 font-semibold mb-3">
                  {member.position}
                </p>
                
                <p className="text-gray-600 text-sm mb-4">
                  {member.description}
                </p>
                
                <div className="bg-primary-50 p-3 rounded-lg">
                  <p className="text-primary-700 text-xs font-medium">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Company Values */}
          <div className="mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Şirket Değerlerimiz
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Kalite</h4>
                  <p className="text-gray-600 text-sm">
                    Her üründe en yüksek kalite standartlarını uygularız.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">İnovasyon</h4>
                  <p className="text-gray-600 text-sm">
                    Sürekli gelişim ve yenilik odaklı yaklaşım sergileriz.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Güven</h4>
                  <p className="text-gray-600 text-sm">
                    Müşterilerimizle uzun vadeli güven ilişkileri kurarız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;