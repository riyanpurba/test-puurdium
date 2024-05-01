// pages/article/[articleSlug].js
import React from 'react';
import { useRouter } from 'next/router';

const ArticleSlug = () => {
  const router = useRouter();
  const { articleSlug } = router.query;

  return <div>This is the article page for {articleSlug}!</div>;
};

export default ArticleSlug;
