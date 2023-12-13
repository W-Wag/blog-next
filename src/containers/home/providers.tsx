'use client';

import { HomeContainerStyle } from './style';

export interface HomeContainerProps {
  children: React.ReactNode;
}

export function HomeContainer({ children }: HomeContainerProps) {
  return <HomeContainerStyle>{children}</HomeContainerStyle>;
}
