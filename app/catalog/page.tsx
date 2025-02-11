import { Metadata } from "next";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";
import CategoryList from "../components/CategoryList";

export const metadata: Metadata = {
  title: "Каталог товарів | Chili Pepper",
};

export default function Catalog() {
  return (
    <PageContent>
      <PageTitle title="Каталог" />
      <CategoryList />  
    </PageContent>
    
  );
}
