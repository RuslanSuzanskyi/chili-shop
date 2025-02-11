export const getCategories = async () => {
  try {
    const response = await fetch("/api/categories", { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to load categories", error);
    throw error;
  }
};

export async function getCategoryName(slug: string): Promise<string> {
  try {
    const categories = await getCategories(); 
    const category = categories.find((cat: { slug: string }) => cat.slug === slug);
    return category ? category.name : "Каталог товарів";
  } catch (error) {
    console.error("Error fetching categories:", error);
    return "Каталог товарів";
  }
}
