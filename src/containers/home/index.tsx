'use client';

import { GetPostsData } from '@/domain/post/types';
import { HomeContainer } from '@/containers/home/style';
import Image from 'next/image';
import { MainContainer } from '@/components/main_container';

export interface HomePageProps {
  posts: GetPostsData;
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <MainContainer>
      <HomeContainer>
        {posts.data.map((post) => {
          return (
            <div key={post.id}>
              <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
              <Image
                src={
                  post.attributes.cover.data.attributes.formats.thumbnail.url
                }
                width={225}
                height={225}
                alt=""
              />
            </div>
          );
        })}
      </HomeContainer>
    </MainContainer>
  );
}
