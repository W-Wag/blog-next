import HomePage from '@/containers/home';
import { getMetaCategories } from '@/data/categories/get-meta-categories';
import { getAllPostsPerCategory } from '@/data/posts/get-all-posts-per-category';
import { GetCategoriesData } from '@/domain/category/types';
import { GetPostsData } from '@/domain/post/types';
import { Metadata, ResolvingMetadata } from 'next';

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

export async function generateMetadata(
  { params }: CategoriesProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const categoryName = params.categorie;

  const post: GetCategoriesData = await getMetaCategories(categoryName);

  return {
    title: `${post.data[0].attributes.name.toUpperCase()} | Next Blog`,
  };
}
