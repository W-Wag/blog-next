'use client';

import Image from 'next/image';
import { ContainerPostCover } from './style';

export interface PostCoverProps {
  coverUrl: string;
  alt: string;
}

export function PostCover({ coverUrl, alt }: PostCoverProps) {
  return (
    <ContainerPostCover>
      <Image src={coverUrl} alt={alt} width={300} height={180} />
    </ContainerPostCover>
  );
}
