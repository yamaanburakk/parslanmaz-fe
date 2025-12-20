import { notFound } from 'next/navigation';

export const metadata = {
  title: "Projeler - Pars Endüstriyel Mutfak",
  description: "Bu sayfa şu anda kullanım dışıdır.",
};

// Projeler sayfası geçici olarak devre dışı
export default function ProjelerPage() {
  notFound();
}