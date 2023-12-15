import Link from 'next/link';
import { ContainerHeader } from './style';

export function Header() {
  return (
    <ContainerHeader>
      <Link href="/">Blog Next</Link>
    </ContainerHeader>
  );
}
