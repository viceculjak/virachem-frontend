'use client';

import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  if (isHomepage) {
    // Sticky footer layout for homepage only - no scroll, footer at bottom
    const [header, main, footer] = children as any;
    return (
      <div className="h-screen bg-background flex flex-col overflow-hidden">
        {header}
        <main className="flex-1 overflow-auto">{main.props.children}</main>
        {footer}
      </div>
    );
  }

  // Normal layout for all other pages - content scrolls, footer at end
  const [header, main, footer] = children as any;
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {header}
      <main className="flex-grow">{main.props.children}</main>
      {footer}
    </div>
  );
}
