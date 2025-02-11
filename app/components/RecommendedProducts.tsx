"use client";

import React, { useEffect, useState } from "react";
import { CircularProgress, Grid2, Typography } from "@mui/material";
import { getRecommendedProducts } from "@/services/getProducts";
import ProductCard from "./ProductCard";

const RecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecommendedProducts()
      .then(setRecommendedProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <Typography 
        variant="h2"
        sx={{
          fontWeight: 'bold'
        }}
      >
        Рекомендовані товари
      </Typography>
      <Grid2
        sx={{
          display: 'grid',
          gap: '1.6rem 0.8rem',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(3, auto)'
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : recommendedProducts.length > 0 ? (
          recommendedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              categorySlug={product.categorySlug} 
              productSlug={product.productSlug}
            />
          ))
        ) : (
          <p>Немає рекомендованих товарів</p>
        )}
      </Grid2>
    </section>
  );
};

export default RecommendedProducts;
