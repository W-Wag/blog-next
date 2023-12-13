import { Heading } from '@/components/heading';
import { MainContainer } from '@/components/main_container';
import { PostAttributesData } from '@/domain/post/types';

export interface PostProps {
  post: PostAttributesData;
}

export function Post({ post }: PostProps) {
  return (
    <MainContainer>
      <Heading>{post.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainContainer>
  );
}
