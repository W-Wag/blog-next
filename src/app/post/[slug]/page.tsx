import { Post } from '@/containers/post';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { GetPostsData } from '@/domain/post/types';
import { markdownToHtml } from '@/lib/markdown-to-html';
import { redirect } from 'next/navigation';

export interface DynamicPostProps {
  params: {
    slug: string;
  };
}

export default async function DynamicPost({ params }: DynamicPostProps) {
  const post: GetPostsData = await getPost(params.slug);

  if (post.data.length === 0) {
    return redirect('/404');
  }
  const { attributes } = post.data[0];
  const content = await markdownToHtml(attributes.content);
  const postData = { ...attributes, content };
  return <Post post={postData} />;
}

export async function generateStaticParams() {
  const numberOfPosts = await countAllPosts();
  const posts: GetPostsData = await getAllPosts(
    `pagination[limit]=${numberOfPosts}`,
  );

  return posts.data.map((post) => ({
    slug: post.attributes.slug,
  }));
}
