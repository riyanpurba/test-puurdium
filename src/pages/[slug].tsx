// pages/[slug].js
import React from 'react';
import { useRouter } from 'next/router';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div>This is the page for {slug}!</div>;
};

export default Slug;
