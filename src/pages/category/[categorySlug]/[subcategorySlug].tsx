// pages/category/[categorySlug]/[subcategorySlug].js
import React from 'react';
import { useRouter } from 'next/router';

const SubcategoryIndex = () => {
  const router = useRouter();
  const { categorySlug, subcategorySlug } = router.query;

  return <div>This is the index page of {subcategorySlug} subcategory under {categorySlug}!</div>;
};

export default SubcategoryIndex;
