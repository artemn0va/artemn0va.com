'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Readonly<Props>) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      storageKey='theme'
    >
      {children}
    </NextThemesProvider>
  );
}
