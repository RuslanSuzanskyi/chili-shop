"use client";

import React, { useEffect, useState } from "react";
import { CircularProgress, Grid2 } from "@mui/material";
import { getCategories } from "@/services/getCategories";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <Grid2
        sx={{
          display: 'grid',
          gap: '1.6rem 0.8rem',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard
              key={category.id} 
              name={category.name} 
              categorySlug={category.categorySlug} 
            />
          ))
        ) : (
          <p>Немає категорій</p>
        )}
      </Grid2>
    </section>
  );
};

export default CategoryList;
