import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

type Props = {
  name: string;
  price: number;
  categorySlug: string;
  slug: string;
}

export default function ProductCard({ name, price, categorySlug, slug }: Props) {
  return (
    <Card
      sx={{
        height: '40rem',
      }}
    >
      <Link href={`/catalog/${categorySlug}/${slug}`}>
        <CardMedia />
      </Link>
      <CardContent>
        <Link href={`/catalog/${categorySlug}/${slug}`}>
          <Typography>{name}</Typography>
        </Link>
        <Typography>{price}</Typography>
      </CardContent>
    </Card>
  );
};