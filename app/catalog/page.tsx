import { Metadata } from "next";
import PageTitle from "../components/PageTitle";

export const metadata: Metadata = {
  title: "Каталог товарів | Chili Pepper",
};

export default function Catalog() {
  return (
    <PageTitle title="Каталог" />
  );
}
