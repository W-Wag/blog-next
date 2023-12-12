import Link from 'next/link';
import { PostCardContainer, PostCardCover, PostCardHeading } from './style';
import Image from 'next/image';

export interface PostCardProps {
  slug: string;
  title: string;
  cover: string;
}

export function PostCard({ slug, title, cover }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <Image src={cover} alt={title} width={280} height={150} />
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          {title}
        </Link>
      </PostCardHeading>
    </PostCardContainer>
  );
}
