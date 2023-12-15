import HomePage from '@/containers/home';
import { getAllPostsPerCategory } from '@/data/posts/get-all-posts-per-category';
import { GetPostsData } from '@/domain/post/types';

export interface CategoriesProps {
  params: {
    categorie: string;
  };
}

export default async function Categories({ params }: CategoriesProps) {
  const posts: GetPostsData = await getAllPostsPerCategory(
    `sort=id:desc&pagination[start]=0&pagination[limit]=10&filters[categorie][name][$eqi]=${params.categorie}`,
  );
  return (
    <HomePage
      posts={posts}
      category={posts.data[0].attributes.categorie.data.attributes.name}
    />
  );
}
