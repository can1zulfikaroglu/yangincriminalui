import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfoItem from "../components/ContactInfoItem";
import { APP_CONFIG } from "../constants";



export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />
            <main className="flex-1">
                <section className="py-10 bg-white border-b border-gray-100 flex flex-col items-center">
                    <div className="container mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-red-700 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                            {APP_CONFIG.CONTACT_PAGE_TEXT.HERO_TITLE}
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 border-b-4 border-red-900 pb-4 inline-block text-center">
                            {APP_CONFIG.CONTACT_PAGE_TEXT.HERO_TITLE1}
                        </h1>
                        <p className="w-full max-w-2xl text-center text-slate-600 text-lg leading-relaxed">
                            {APP_CONFIG.CONTACT_PAGE_TEXT.HERO_SUBTITLE}
                        </p>
                    </div>
                </section>
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-12">
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-red-600 pl-4">
                                    {APP_CONFIG.CONTACT_PAGE_TEXT.CONTACT_INFORMATION}
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {APP_CONFIG.CONTACT_INFO.map((item) => (
                                        <ContactInfoItem
                                            key={item.id}
                                            icon={item.icon}
                                            label={item.label}
                                            value={item.value}
                                            href={item.href}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-3">
                                <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-red-600 pl-4 mb-6">
                                    {APP_CONFIG.CONTACT_PAGE_TEXT.SENT_MESSAGE}
                                </h3>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                                <span className="text-red-700 text-base">📌</span>
                                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">{APP_CONFIG.CONTACT_PAGE_TEXT.LOCATION}</span>
                            </div>
                            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]" >
                                <iframe
                                    title="Ofis Konumu"
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3009.4935420247043!2d28.982492476041912!3d41.03633497134664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzEwLjgiTiAyOMKwNTknMDYuMiJF!5e0!3m2!1sen!2str!4v1778063521998!5m2!1sen!2str"
                                    className="w-full h-full border-0"
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}