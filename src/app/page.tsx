import HomePage from '@/containers/home';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { GetPostsData } from '@/domain/post/types';

export default async function Home() {
  const posts: GetPostsData = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=6',
  );
  return <HomePage posts={posts} />;
}
