'use client';

import { GetPostsData } from '@/domain/post/types';
import { HomeContainer } from '@/containers/home/style';

export interface HomePageProps {
  posts: GetPostsData;
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <HomeContainer>
      {posts.data.map((post) => {
        return <h2 key={post.attributes.slug}>{post.attributes.title}</h2>;
      })}
    </HomeContainer>
  );
}
