export const getCategories = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to load categories", error);
    throw error;
  }
};

export const getCategoryName = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);

    if (!response.ok) {
      throw new Error("Error fetching categories");
    }

    const categories = await response.json();
    const category = categories.find((cat: { slug: string }) => cat.slug === slug);
    return category ? category.name : "Каталог товарів";
  } catch (error) {
    console.error("Error fetching categories:", error);
    return "Каталог товарів";
  }
};
