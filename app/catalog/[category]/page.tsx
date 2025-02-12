// app/catalog/[category]/page.tsx
import PageContent from "@/app/components/PageContent";
import PageTitle from "@/app/components/PageTitle";
import { getCategoryName } from "@/services/getCategories";
import { notFound } from "next/navigation";

export default async function Catalog({ params }: { params: { category: string } }) {
  try {
    const categoryName = await getCategoryName(params.category);
    if (!categoryName) {
      notFound();
    }

    return (
      <PageContent>
        <PageTitle title={categoryName} />
        {/* Render products related to the category */}
      </PageContent>
    );
  } catch (error) {
    console.error("Error fetching category:", error);
    return (
      <PageContent>
        <PageTitle title={notFound()} />
        <p>There was an error loading the category.</p>
      </PageContent>
    );
  }
}
