'use client';

import { PropsWithChildren } from 'react';
import { GlobalStyles } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
