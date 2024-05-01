// pages/category/[categorySlug]/[subcategorySlug]/[subsubcategorySlug].js
import React from 'react';
import { useRouter } from 'next/router';

const SubsubcategoryIndex = () => {
  const router = useRouter();
  const { categorySlug, subcategorySlug, subsubcategorySlug } = router.query;

  return <div>This is the index page of {subsubcategorySlug} subsubcategory under {subcategorySlug} subcategory which is under {categorySlug}!</div>;
};

export default SubsubcategoryIndex;
