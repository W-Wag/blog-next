import { ReactNode } from 'react';
import { MainContainerStyled } from './style';

export interface MainContainerProps {
  children: ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return <MainContainerStyled>{children}</MainContainerStyled>;
}
