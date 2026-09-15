import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  Compass,
  Activity,
  Brain,
  Shield,
  ExternalLink,
  Eye
} from 'lucide-react';
import { USER_PROFILE_CONSTANTS } from '../data/protocol198cm';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Boshqaruv Markazi', icon: LayoutDashboard, badge: 'Asosiy' },
    { path: '/visual-guides', label: 'Jang San’ati & Mashqlar', icon: Eye, badge: '6 Qo‘llanma' },
    { path: '/encyclopedia', label: '13 Asar Ensiklopediyasi', icon: BookOpen, badge: '13 Kitob' },
    { path: '/protocol', label: 'Actionable Protokol', icon: CalendarCheck, badge: '7 Kun' },
    { path: '/lever-calculator', label: '198cm Richag Hisobi', icon: Compass, badge: 'τ = F·r' },
    { path: '/sit-trainer', label: 'SIT Stress Trenajori', icon: Shield, badge: 'Grossman' },
    { path: '/dual-n-back', label: 'Dual N-Back Trenajori', icon: Brain, badge: 'Gf Aql' },
  ];

  return (
    <aside className="w-64 bg-dark-900 border-r border-subtle flex flex-col justify-between shrink-0 h-screen sticky top-0">
      <div>
        {/* Logo & Persona Badge */}
        <div className="p-5 border-b border-subtle">
          <div className="flex items-center justify-between">
            <span className="text-base font-black tracking-wider text-white font-mono uppercase">
              MiyaIQ <span className="text-titanium-400 font-normal text-xs">v2.0</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-dark-800 text-titanium-300 border border-subtle">
              PREMIUM
            </span>
          </div>
          <p className="text-[11px] text-titanium-400 mt-1 font-mono">
            198cm • INTJ-T • 2X Elita
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-dark-800 text-white border border-subtle font-semibold shadow-sm'
                    : 'text-titanium-400 hover:text-white hover:bg-dark-850'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={16} className={isActive ? 'text-white' : 'text-titanium-500'} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-dark-950 text-titanium-200 border border-subtle' : 'text-titanium-500'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Biometrics Capsule */}
      <div className="p-4 border-t border-subtle bg-dark-950/60">
        <div className="text-[11px] font-mono space-y-1 text-titanium-400">
          <div className="flex justify-between">
            <span>Bo‘y / Quloch:</span>
            <span className="text-white font-bold">{USER_PROFILE_CONSTANTS.height_cm} sm / {USER_PROFILE_CONSTANTS.wingspan_cm} sm</span>
          </div>
          <div className="flex justify-between">
            <span>Vazn / SMM:</span>
            <span className="text-white font-bold">{USER_PROFILE_CONSTANTS.weight_kg} kg / {USER_PROFILE_CONSTANTS.skeletal_muscle_mass_kg} kg</span>
          </div>
          <div className="flex justify-between">
            <span>Tana Yog‘i:</span>
            <span className="text-tactic-emerald font-bold">{USER_PROFILE_CONSTANTS.body_fat_percentage}%</span>
          </div>
          <div className="flex justify-between">
            <span>Psixotip:</span>
            <span className="text-tactic-amber font-bold">INTJ-T</span>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-subtle flex items-center justify-between text-[10px] text-titanium-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-tactic-emerald animate-pulse" />
            Tizim Faol
          </span>
          <span className="font-mono">Obsidian Core</span>
        </div>
      </div>
    </aside>
  );
}
