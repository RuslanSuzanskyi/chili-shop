"use client";

import PageTitle from "@/app/components/PageTitle";
import { getCategoryName } from "@/services/getCategories";
import { useEffect, useState } from "react";

export default function Catalog({ params }: { params: Promise<{ category: string }> }) {
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    const fetchCategoryName = async () => {
      const resolvedParams = await params;
      const categorySlug = resolvedParams.category;

      if (categorySlug) {
        const name = await getCategoryName(categorySlug);
        setCategoryName(name);
      }
    };

    fetchCategoryName();
  }, [params]);

  return (
    <div>
      <PageTitle title={categoryName }/>
    </div>
  );
}
