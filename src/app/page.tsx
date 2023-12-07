import { PostData, GetPostsData } from '@/domain/post/types';

export default async function Home() {
  const posts: GetPostsData = await getData();
  return (
    <div>
      {posts.data.map((post) => {
        return <h2 key={post.attributes.slug}>{post.attributes.title}</h2>;
      })}
    </div>
  );
}

export const getData = async () => {
  const res = await fetch(
    'https://blog-strapi-api-dvx0.onrender.com/api/posts?populate=*',
  );
  if (!res.ok) {
    console.log(res.status);
  }
  return res.json();
};
