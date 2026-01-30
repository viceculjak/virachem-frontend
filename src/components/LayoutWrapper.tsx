'use client';

import { usePathname } from 'next/navigation';
import MoleculeBgLayer from '@/components/MoleculeBgLayer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  if (isHomepage) {
    const [header, main, footer] = children as any;
    return (
      <>
        {/* Mobile + Tablet: molecule layer inside same stacking context, then content on top */}
        <div className="lg:hidden min-h-screen flex flex-col relative">
          <MoleculeBgLayer />
          <div className="min-h-screen flex flex-col relative z-10 layout-content-bg">
            {header}
            <main className="flex-grow">{main.props.children}</main>
            {footer}
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex h-screen flex-col overflow-hidden relative">
          <MoleculeBgLayer />
          <div className="h-screen flex flex-col overflow-hidden relative z-10 layout-content-bg">
            {header}
            <main className="flex-1 overflow-auto">{main.props.children}</main>
            {footer}
          </div>
        </div>
      </>
    );
  }

  const [header, main, footer] = children as any;
  return (
    <div className="min-h-screen flex flex-col relative">
      <MoleculeBgLayer />
      <div className="min-h-screen flex flex-col relative z-10 layout-content-bg">
        {header}
        <main className="flex-grow">{main.props.children}</main>
        {footer}
      </div>
    </div>
  );
}
