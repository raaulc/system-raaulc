// components/page-background.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MeteorsBackground } from './meteors-background';
import AnimatedGridPattern from './ui/animated-grid-pattern';
import GridPattern from './ui/grid-pattern';
import { InteractiveGridPattern } from './ui/interactive-grid-pattern';

export function PageBackground() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything on the server to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  const isBlogPage = pathname?.includes('/blog');
  const isGadgetsPage = pathname?.includes('/gadgets');

  if (isBlogPage) {
    return <GridPattern className="w-full h-full" />;
  }

  if (isGadgetsPage) {
    return <GridPattern className="w-full h-full" />;
  }
  // Show meteors on all other pages
  return <MeteorsBackground />;
}