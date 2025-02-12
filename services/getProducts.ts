export const getAllProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    const products = await response.json();
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    const products = await response.json();

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    const products = await response.json();
    
    return products.filter((product: any) => product.category === category);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

export const getProductsByName = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    const products = await response.json();
    const product = products.find((prod: { slug: string }) => prod.slug === slug);
    return product ? product.name : "Назва продукту";
  } catch (error) {
    console.error("Error fetching products:", error);
    return "Товар не знайдено";
  }
};
