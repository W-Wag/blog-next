import HomePage from '@/containers/home';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PaginationData } from '@/domain/post/pagination';
import { GetPostsData } from '@/domain/post/types';

export interface PageProps {
  params: {
    pageParams: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const page = Number(params.pageParams[0]);
  const category = params.pageParams[1] || '';
  const postPerPage = 3;
  const startFrom = (page - 1) * postPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `&filters[categorie][name][$eqi]=${category}`
    : '';

  const numberOfPosts = await countAllPosts();
  const posts: GetPostsData = await getAllPosts(
    `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postPerPage}${categoryQuery}`,
  );

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postPerPage,
    previousPage,
    category,
  };

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

/* export async function generateStaticParams() {
  const numberOfPosts = await countAllPosts();
  const posts: GetPostsData = await getAllPosts(
    `pagination[limit]=${numberOfPosts}`,
  );

  return posts.data.map((post) => ({
    params: post.attributes,
  }));
} */
