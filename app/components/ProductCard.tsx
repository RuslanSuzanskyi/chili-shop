import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { getProductLink } from "../utils/getLink";

type Props = {
  name: string;
  price: number;
  categorySlug: string;
  productSlug: string;
}

export default function ProductCard({ name, price, categorySlug, productSlug }: Props) {
  const productLink = getProductLink(categorySlug, productSlug);

  return (
    <Card
      sx={{
        height: '40rem',
      }}
    >
      <Link href={productLink}>
        <CardMedia />
      </Link>
      <CardContent>
        <Link href={productLink}>
          <Typography>{name}</Typography>
        </Link>
        <Typography>{price}</Typography>
      </CardContent>
    </Card>
  );
};