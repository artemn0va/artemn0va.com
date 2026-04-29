import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface Props {
  children: ReactNode;
  className?: string;
  variant?: TextVariant;
  size?: TextSize;
  isThemeRevert?: boolean;
}

export default function Typography({
  children,
  className,
  variant = 'p',
  size = 'base',
  isThemeRevert = false,
}: Readonly<Props>) {
  const baseStyle = `max-w-max ${variant !== 'p' ? 'whitespace-nowrap' : ''}`;

  // TODO: Refactor
  const variantStyles = {
    h1: isThemeRevert
      ? '2xl:text-[#FFF] 2xl:dark:text-[#29303E] 2xl:text-lg 2xl:leading-[24px]'
      : 'text-[#29303E] dark:text-[#FFF] 2xl:text-lg',
    h2: isThemeRevert
      ? 'text-[#95A3B6] dark:text-[#A5A9B0] 2xl:text-[#A5A9B0] 2xl:dark:text-[#95A3B6]'
      : 'text-[#95A3B6] dark:text-[#A5A9B0]',
    h3: isThemeRevert
      ? 'text-[#29303E] dark:text-[#FFF] 2xl:text-[#FFF] 2xl:dark:text-[#29303E]'
      : 'text-[#29303E] dark:text-[#FFF]',
    h4: isThemeRevert
      ? '2xl:text-[#8B8F95] 2xl:dark:text-[#A5A9B0]'
      : 'text-[#A5A9B0] dark:text-[#8B8F95]',
    p: isThemeRevert
      ? '2xl:text-[#FFF] 2xl:dark:text-[#29303E]'
      : 'text-[#29303E] dark:text-[#FFF]',
  };

  const ComponentTag = variant;

  const textStyle = cn(
    baseStyle,
    `text-${size}`,
    variantStyles[variant],
    className,
  );

  return <ComponentTag className={textStyle}>{children}</ComponentTag>;
}
