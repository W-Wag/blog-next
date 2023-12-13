import { Heading } from '@/components/heading';
import { MainContainer } from '@/components/main_container';
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

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainContainer>
  );
}
