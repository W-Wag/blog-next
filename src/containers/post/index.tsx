import { Heading } from '@/components/heading';
import { MainContainer } from '@/components/main_container';
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
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainContainer>
  );
}
