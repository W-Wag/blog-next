import { GetPostsData } from '@/domain/post/types';

export const getPost = async (
  slug: string | string[],
): Promise<GetPostsData> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${process.env.POSTS_URL}?populate=deep&filters[slug][$eq]=${slugString}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.log(res.status);
  }
  const response = res.json();
  return response;
};
