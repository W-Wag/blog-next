'use client';

import { HeadingContainer } from './style';

export interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <HeadingContainer>{children}</HeadingContainer>;
}
