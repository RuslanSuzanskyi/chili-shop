"use client";

import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

type Props = {
  name: string;
  slug: string;
}

export default function CategoryCard({ name, slug }: Props) {
  return (
    <Card
      sx={{
        height: '40rem',
      }}
    >
      <CardContent>
        <Link href={`/catalog/${slug}`}>
          <Typography>{name}</Typography>
        </Link>
      </CardContent>
      <Link href={`/catalog/${slug}`}>
        <CardMedia />
      </Link>
    </Card>
  );
};