import React from 'react';
import { APP_CONFIG } from '../constants';
import Button from './Button';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/logonavbar.png';
const Navbar: React.FC = () => {
  return (
<nav className="relative w-full overflow-hidden" style={{ background: '#1a0a08' }}>
  {/* Subtle grid texture */}
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 60px)',
    }}
  />

  <div className="relative flex items-center gap-0 px-8" style={{ height: 64 }}>

    <a href="/" className="flex flex-shrink-0 items-center gap-2.5 no-underline">
      <img src={Logo} alt="Logo" className="flex items-center justify-center" style={{ width: 120, height: 55 }} />
    </a>

    <div className="mx-8 flex-shrink-0" style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.12)' }} />

    <div className="hidden md:flex flex-1 items-center">
      {APP_CONFIG.NAV_ITEMS.MAIN_MENU.map((item) => (
        <a
          key={item.id}
          href={item.path}
          className="group relative flex items-center"
          style={{ height: 64, padding: '0 1.25rem', textDecoration: 'none' }}
        >
          <span
            className="text-xs font-normal tracking-widest transition-colors duration-200"
            style={{ color: 'rgba(245,237,232,0.6)', letterSpacing: '0.04em', fontSize: 13 }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f5ede8')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,237,232,0.6)')}
          >
            {item.title}
          </span>
          {/* Animated underline */}
          <span
            className="absolute bottom-0 left-5 right-5 origin-left scale-x-0 transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"
            style={{ height: 2, background: '#c0392b' }}
          />
        </a>
      ))}
    </div>

    <div className="ml-auto flex flex-shrink-0 items-center gap-3">
  <Button variant="ghost">Bilgi Bankası</Button>
  <Button variant="ghost">Sıkça Sorulan Sorular</Button>
<Button variant="primary" className="flex items-center gap-2">
  <FaWhatsapp size={18} /> {/* İkon boyutu yazıya uygun şekilde 18px yapıldı */}
  Whatsapp İletişim Hattı
</Button>
    </div>
  </div>
</nav>
  );
};

export default Navbar;