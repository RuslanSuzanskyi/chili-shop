import PageContent from "./components/PageContent";
import PageTitle from "./components/PageTitle";
import RecommendedProducts from "./components/RecommendedProducts";

export default function Home() {
  return (
    <PageContent>
      <PageTitle title="Інтернет магазин Chili Pepper" />
      <RecommendedProducts />   
    </PageContent>
  );
}
