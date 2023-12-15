'use client';

import { GetPostsData } from '@/domain/post/types';
import { MainContainer } from '@/components/main_container';
import { PostCard } from '@/components/post_card';
import { HomeContainer } from './providers';
import { CategoryTitle } from './style';

export interface HomePageProps {
  posts: GetPostsData;
  category?: string;
}

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <MainContainer>
      {category && <CategoryTitle>Categoria: {category}</CategoryTitle>}
      <HomeContainer>
        {posts.data.map((post) => {
          return (
            <PostCard
              key={post.attributes.slug}
              cover={
                post.attributes.cover.data.attributes.formats.thumbnail.url
              }
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          );
        })}
      </HomeContainer>
    </MainContainer>
  );
}
