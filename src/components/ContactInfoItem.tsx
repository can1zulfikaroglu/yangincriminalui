import type { ReactNode } from "react";

export interface ContactInfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function ContactInfoItem({ icon, label, value, href }: ContactInfoItemProps) {
const content = (
    <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-sm transition-all duration-200 group">
      <div className="flex-shrink-0 w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
        <span className="text-red-700 text-xl">{icon}</span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5 flex items-center">{label}</p>
        <p className="text-slate-800 font-semibold text-sm leading-snug whitespace-pre-line">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">{content}</a>
  ) : (
    <div>{content}</div>
  );
}