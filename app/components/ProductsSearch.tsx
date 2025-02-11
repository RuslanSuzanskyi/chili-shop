"use client";

import { getProductsBySearch } from "@/services/getProducts";
import { Box, List, ListItem, Paper, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProductsSearch = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (search.trim().length > 0) {
      setShowResults(true);
      fetchProducts();
    } else {
      setProducts([]);
      setShowResults(false);
    }
  }, [search]);

  const fetchProducts = async () => {
    const result = await getProductsBySearch(search);
    setProducts(result);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box
      component="form" 
      ref={searchRef}
      sx={{ 
        position: "relative", 
        width: "100%" 
      }}
    >   
      <TextField
        type="search"
        label="Пошук"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          maxWidth: "45rem"
        }}
      />

      {showResults && products.length > 0 && (
        <Paper
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            zIndex: 10,
            maxHeight: "300px",
            overflowY: "auto",
            mt: 1,
          }}
        >
          <List>
            {products.map((product) => (
              <ListItem key={product.id} sx={{ px: 2, py: 1 }}>
                <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>
                  <Typography>{product.name}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default ProductsSearch;
