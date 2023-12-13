import { MainContainer } from '@/components/main_container';
import { PostAttributesData } from '@/domain/post/types';

export interface PostProps {
  post: PostAttributesData;
}

export function Post({ post }: PostProps) {
  return (
    <MainContainer>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainContainer>
  );
}
