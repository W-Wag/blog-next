import { defaultTheme } from '@/styles/theme';
import { RenderResult, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

export function customRender(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);
}
