// app/product/[product]/page.tsx
import PageContent from "@/app/components/PageContent";
import PageTitle from "@/app/components/PageTitle";
import { getProductsByName } from "@/services/getProducts";
import { notFound } from "next/navigation";

export default async function Product({ params }: { params: { product: string } }) {
  try {
    const productName = await getProductsByName(params.product);
    if (!productName) {
      notFound();
    }

    return (
      <PageContent>
        <PageTitle title={productName} />
        {/* Render product details here */}
      </PageContent>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <PageContent>
        <PageTitle title={notFound()} />
        <p>There was an error loading the product.</p>
      </PageContent>
    );
  }
}
