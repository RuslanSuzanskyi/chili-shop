export const getAllProducts = async () => {
  try {
    const response = await fetch("/api/products", { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to load products", error);
    throw error;
  }
};

export const getProductsBySearch = async (search: string) => {
  try {
    const products = await getAllProducts();

    const filteredProducts = products.filter((product: any) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    return filteredProducts;
  } catch (error) {
    console.error("Failed to load products by search", error);
    throw error;
  }
};

export const getRecommendedProducts = async () => {
  try {
    const products = await getAllProducts();

    const recommendedProducts = products.filter((product: any) => 
      product.rating >= 4.5
    );

    return recommendedProducts.slice(0, 12);
  } catch (error) {
    console.error("Error fetching recommended products:", error);
    throw error;
  }
};

export const getProductsByCategory = async (category: string) => {
  try {
    const products = await getAllProducts();
    
    return products.filter((product: any) => product.category === category);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

export const getProductName = async (slug: string) => {
  try {
    const response = await fetch(`/api/products/${slug}`);
    if (!response.ok) {
      throw new Error("Error fetching product");
    }

    const product = await response.json();
    return product.name;
  } catch (error) {
    console.error("Error fetching product name:", error);
    throw error;
  }
};
