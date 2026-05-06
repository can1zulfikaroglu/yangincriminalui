import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'primary'; // Buton tiplerini tanımlıyoruz
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}) => {
  // Ortak stiller
  const baseStyles = "text-xs tracking-widest transition-all duration-200 cursor-pointer";
  
  // Varyant stilleri
  const variants = {
    ghost: "bg-transparent text-red-100/60 hover:text-white px-[12px] py-[6px]",
    primary: "bg-[#f5ede8] text-[#1a0a08] font-medium px-[16px] py-[7px] hover:bg-red-600 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;