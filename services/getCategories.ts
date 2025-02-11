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
