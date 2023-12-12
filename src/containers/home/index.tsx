'use client';

import { GetPostsData } from '@/domain/post/types';
import { HomeContainer } from '@/containers/home/style';
import Image from 'next/image';
import { MainContainer } from '@/components/main_container';
import { PostCard } from '@/components/post_card';

export interface HomePageProps {
  posts: GetPostsData;
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <MainContainer>
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
