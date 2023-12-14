'use client';

import { DiscussionEmbed } from 'disqus-react';
import { CommentsContainer } from './style';

export interface CommentsProps {
  slug: string;
  title: string;
}

export function Comments({ slug, title }: CommentsProps) {
  return (
    <CommentsContainer>
      <DiscussionEmbed
        shortname="blog-strapi-1"
        config={{
          url: `${process.env.SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </CommentsContainer>
  );
}
