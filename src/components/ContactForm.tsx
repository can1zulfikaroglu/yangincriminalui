import { useState, type ChangeEvent, type FormEvent } from 'react';
// import { APP_CONFIG } from '../constants'; // Eğer bu dosyada kullanmıyorsan silebilirsin

export default function ContactForm() {
  // 1. Form verilerini tutan state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  // 2. Formun gönderim durumunu tutan state (Bunu eklemeyi unutmuştun)
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);

  // 3. Input değişikliklerini yakalayan fonksiyon
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    
    // Checkbox için özel kontrol
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }));
  }

  // 4. Form gönderimini yöneten fonksiyon
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.consent) return;
    
    // Form gönderme durumu
    setStatus("sending");
    
    // Örnek başarı simülasyonu (Gerçek API bağlandığında burası değişecek)
    setTimeout(() => setStatus("success"), 1500);
  }

  return (
    // React kuralı: En dışta tek bir kapsayıcı div olmalı. Orijinal tasarımdaki kutu div'ini buraya ekledik.
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="h-1.5 bg-gradient-to-r from-red-800 to-red-600" />
      
      <div className="p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl">✅</div>
            <h4 className="text-2xl font-extrabold text-slate-900">Mesajınız İletildi!</h4>
            <p className="text-slate-500 max-w-sm">En kısa sürede size dönüş yapacağız.</p>
            <button
              onClick={() => { 
                setStatus(null); 
                setForm({ name:"", email:"", phone:"", subject:"", message:"", consent:false }); 
              }}
              className="mt-2 px-6 py-2.5 bg-red-700 text-white text-sm font-bold rounded-lg hover:bg-red-800 transition-colors"
            >
              Yeni Mesaj Gönder
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">Ad Soyad *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Adınız ve soyadınız"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-800 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">E-posta *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-800 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+90 5xx xxx xx xx"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-800 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">Konu *</label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-800 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all bg-white"
                >
                  <option value="">Konu seçiniz...</option>
                  <option value="aile">Aile Hukuku</option>
                  <option value="ticaret">Ticaret Hukuku</option>
                  <option value="is">İş Hukuku</option>
                  <option value="ceza">Ceza Hukuku</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
            </div>
            
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">Mesajınız *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Mesajınız..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-slate-800 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all resize-none"
              />
            </div>
            
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-red-700"
                />
                <span className="text-xs text-slate-500">
                  KVKK Aydınlatma Metni'ni okudum.
                </span>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={!form.consent || status === "sending"}
              className={`w-full py-3.5 rounded-lg font-bold text-sm uppercase tracking-widest transition-all ${
                form.consent ? "bg-red-700 text-white hover:bg-red-800" : "bg-gray-100 text-gray-400"
              }`}
            >
              {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}