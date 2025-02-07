import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

type Props = {
  name: string;
  price: number;
  slug: string;
}

export default function CategoryCard({ name, slug }: Props) {
  const categoryLink = `/catalog/${slug}`;

  return (
    <Card
      sx={{
        height: '30rem',
      }}
    >
      <CardContent>
        <Link href={categoryLink}>
          <Typography>{name}</Typography>
        </Link>
      </CardContent>
      <Link href={categoryLink}>
        <CardMedia />
      </Link>
    </Card>
  );
};