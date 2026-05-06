import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { APP_CONFIG } from '../constants';


const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-red-700 text-sm font-bold uppercase tracking-[0.2em] mb-4">{APP_CONFIG.HOME_PAGE_TEXT.HERO_TITLE1}</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 border-b-4 border-red-900 pb-4 inline-block">
              {APP_CONFIG.HOME_PAGE_TEXT.HERO_TITLE}<br />{APP_CONFIG.HOME_PAGE_TEXT.HERO_TITLE2}
            </h1>
            <p className="max-w-2x2 mx-auto text-slate-600 text-lg leading-relaxed">
              {APP_CONFIG.HOME_PAGE_TEXT.HERO_SUBTITLE}
            </p>
          </div>
        </section>
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-red-600 pl-4">
                {APP_CONFIG.HOME_PAGE_TEXT.SERVİCE_AREAS_TİTLE}
              </h3>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {APP_CONFIG.MY_SERVICES.SERVICES_LIST.map((service, index) => (
                  <div
                    key={service.id}
                    className={`p-10 transition-colors duration-300 hover:bg-red-50/50 border-gray-100
                      ${index % 2 === 0 ? 'md:border-r' : ''} 
                      ${index < 2 ? 'border-b' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-red-600 font-black text-2xl opacity-20">{service.id}</span>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;