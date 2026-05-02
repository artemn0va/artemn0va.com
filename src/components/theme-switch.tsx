'use client';

import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
}

export default function ThemeSwitch({ className }: Readonly<Props>) {
  const { setTheme } = useTheme();

  return (
    <div
      className={cn(
        'bg-section shadow-theme-switch dark:bg-theme-switch-dark dark:shadow-theme-switch-dark flex justify-center items-center gap-x-3 px-3 py-[9px] rounded-full',
        className,
      )}
    >
      <Button
        variant='dot'
        className='h-[18px] w-[32px] bg-page shadow-theme-switch-active duration-150 dark:w-[18px] dark:shadow-theme-switch-inactive-dark'
        aria-label='Toggle light mode'
        onClick={() => setTheme('light')}
      />
      <Button
        variant='dot'
        className='h-[18px] w-[18px] bg-[#4e565f] shadow-theme-switch-inactive duration-150 dark:w-[32px] dark:shadow-theme-switch-active-dark'
        aria-label='Toggle dark mode'
        onClick={() => setTheme('dark')}
      />
    </div>
  );
}
