'use client';

import { GetPostsData } from '@/domain/post/types';
import { MainContainer } from '@/components/main_container';
import { PostCard } from '@/components/post_card';
import { HomeContainer } from './providers';
import { AllPostLink, CategoryTitle } from './style';
import { PaginationData } from '@/domain/post/pagination';
import { Pagination } from '@/components/pagination';
import Link from 'next/link';

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
      {category && (
        <CategoryTitle>
          Categoria: {category.replace(/%20/g, ' ')}
        </CategoryTitle>
      )}
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
      {!pagination?.nextPage && (
        <AllPostLink>
          <Link href="/post/page/1">Para ver todos os posts clique aqui</Link>
        </AllPostLink>
      )}
    </MainContainer>
  );
}
