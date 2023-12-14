'use client';

import { PostTextContainer } from './style';

export interface PostContainerProps {
  content: string;
}

export function PostContainer({ content }: PostContainerProps) {
  return <PostTextContainer dangerouslySetInnerHTML={{ __html: content }} />;
}
