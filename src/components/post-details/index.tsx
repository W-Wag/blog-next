'use client';
import Link from 'next/link';
import { Date } from '../date';
import { PostDetailsContainer } from './style';

export interface PostDetailsProps {
  date: string;
  author: string;
  categorie: string;
}

export function PostDetails({ date, author, categorie }: PostDetailsProps) {
  return (
    <PostDetailsContainer>
      Publicado em <Date date={date} /> por <span>{author}</span> na categoria{' '}
      <Link href={`/post/page/1/${categorie.toLowerCase()}`}>{categorie}</Link>
    </PostDetailsContainer>
  );
}
