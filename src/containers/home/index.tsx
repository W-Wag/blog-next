'use client';

import { GetPostsData } from '@/domain/post/types';
import { MainContainer } from '@/components/main_container';
import { PostCard } from '@/components/post_card';
import { HomeContainer } from './providers';
import { CategoryTitle } from './style';
import { PaginationData } from '@/domain/post/pagination';
import { Pagination } from '@/components/pagination';

export interface HomePageProps {
  posts: GetPostsData;
  category?: string;
  pagination?: PaginationData;
}

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
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
      {pagination && <Pagination {...pagination} />}
    </MainContainer>
  );
}
