import React from 'react';
import clsx from 'clsx';

interface EthicalMetricProps {
  label: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  theme?: 'terracotta' | 'olive' | 'charcoal';
}

export function EthicalMetric({ label, value, description, icon, theme = 'terracotta' }: EthicalMetricProps) {
  const themeClasses = {
    terracotta: "text-drma-terracotta border-drma-terracotta/20 bg-drma-terracotta/5",
    olive: "text-drma-olive border-drma-olive/20 bg-drma-olive/5",
    charcoal: "text-drma-charcoal border-drma-charcoal/20 bg-drma-charcoal/5",
  };

  return (
    <div className={clsx("p-8 border rounded-sm transition-all hover:shadow-lg", themeClasses[theme])}>
      <div className="flex items-center justify-between mb-6">
        <span className="uppercase text-[10px] tracking-[0.3em] font-bold opacity-80 font-detail">{label}</span>
        <div className="p-2 bg-white rounded-full shadow-sm">
          {icon}
        </div>
      </div>
      <div className="text-4xl font-display mb-4 italic">{value}</div>
      <p className="font-interface text-xs leading-relaxed opacity-70 italic">
        {description}
      </p>
    </div>
  );
}

interface OriginBadgeProps {
  location: string;
  auditDate?: string;
}

export function OriginBadge({ location, auditDate }: OriginBadgeProps) {
  return (
    <div className="inline-flex flex-col border-l-2 border-drma-terracotta pl-4 py-1">
      <span className="text-[10px] uppercase tracking-widest font-bold text-drma-terracotta font-detail">Artisan Origin</span>
      <span className="text-sm font-display italic">{location}</span>
      {auditDate && (
        <span className="text-[8px] uppercase tracking-tighter opacity-40 mt-1 font-detail">Last Audit: {auditDate}</span>
      )}
    </div>
  );
}
