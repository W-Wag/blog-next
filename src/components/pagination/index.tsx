'use client';

import { PaginationData } from '@/domain/post/pagination';
import { NextLink, PaginationContainer, PreviousLink } from './style';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export function Pagination({
  nextPage,
  previousPage,
  postPerPage,
  numberOfPosts,
  category,
}: PaginationProps) {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postPerPage < postPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  console.log(postPerPage);

  return (
    <PaginationContainer>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href={previousLink}>Previous</Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>Next</Link>
        </NextLink>
      )}
    </PaginationContainer>
  );
}
