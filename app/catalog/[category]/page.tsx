import PageTitle from "@/app/components/PageTitle";
import { Metadata } from "next";

type Props = {
  params: {
    category?: string;
  }
};

export function generateMetadata({ params }: Props): Metadata {
  const categoryName = params.category ? decodeURIComponent(params.category) : "Каталог товарів";
  
  return {
    title: `${categoryName} | Chili Pepper`,
  };
};


export default function Catalog() {
  return (
    <PageTitle title="Каталог"/>
  );
};
