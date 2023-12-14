import { Comments } from '@/components/comments';
import { Heading } from '@/components/heading';
import { MainContainer } from '@/components/main_container';
import { PostContainer } from '@/components/post-container';
import { PostDetails } from '@/components/post-details';
import { PostCover } from '@/components/post_cover';
import { PostAttributesData } from '@/domain/post/types';

export interface PostProps {
  post: PostAttributesData;
}

export function Post({ post }: PostProps) {
  return (
    <MainContainer>
      <Heading>{post.title}</Heading>
      <PostCover
        coverUrl={post.cover.data.attributes.formats.thumbnail.url}
        alt={post.title}
      />
      <PostDetails
        author={post.author.data.attributes.name}
        date={post.createdAt}
        categorie={post.categorie.data.attributes.name}
      />

      <PostContainer content={post.content} />

      <Comments slug={post.slug} title={post.title} />
    </MainContainer>
  );
}
