'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
}

export default function ThemeSwitch({ className }: Readonly<Props>) {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isLightMode = resolvedTheme !== 'dark';

  return (
    <div
      className={cn(
        'bg-section shadow-theme-switch dark:bg-theme-switch-dark dark:shadow-theme-switch-dark flex justify-center items-center gap-x-3 px-3 py-[9px] rounded-full',
        className,
      )}
    >
      {isMounted && (
        <>
          <Button
            variant='dot'
            className={cn(
              'w-[18px] h-[18px] bg-page shadow-theme-switch-inactive dark:shadow-theme-switch-inactive-dark duration-150',
              {
                'w-[32px] shadow-theme-switch-active dark:shadow-theme-switch-active-dark':
                  isLightMode,
              },
            )}
            aria-label='Toggle light mode'
            aria-pressed={isLightMode}
            onClick={() => setTheme('light')}
          />
          <Button
            variant='dot'
            className={cn(
              'w-[18px] h-[18px] bg-[#4e565f] shadow-theme-switch-inactive dark:shadow-theme-switch-inactive-dark duration-150',
              {
                'w-[32px] shadow-theme-switch-active dark:shadow-theme-switch-active-dark':
                  !isLightMode,
              },
            )}
            aria-label='Toggle dark mode'
            aria-pressed={!isLightMode}
            onClick={() => setTheme('dark')}
          />
        </>
      )}
    </div>
  );
}
