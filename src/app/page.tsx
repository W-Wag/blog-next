import HomePage from '@/containers/home';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { GetPostsData } from '@/domain/post/types';

export default async function Home() {
  const posts: GetPostsData = await getAllPosts();
  return <HomePage posts={posts} />;
}
