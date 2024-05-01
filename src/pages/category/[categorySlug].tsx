// pages/category/[categorySlug].js
import React from 'react';
import { useRouter } from 'next/router';

const CategorySlug = () => {
  const router = useRouter();
  const { categorySlug } = router.query;

  return <div>This is the category page for {categorySlug}!</div>;
};

export default CategorySlug;
