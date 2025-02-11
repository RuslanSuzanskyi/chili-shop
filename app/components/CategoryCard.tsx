"use client";

import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { getCategoryLink } from "../utils/getLink";

type Props = {
  name: string;
  categorySlug: string;
}

export default function CategoryCard({ name, categorySlug }: Props) {
  return (
    <Card
      sx={{
        height: '40rem',
      }}
    >
      <CardContent>
        <Link href={getCategoryLink(categorySlug)}>
          <Typography>{name}</Typography>
        </Link>
      </CardContent>
      <Link href={getCategoryLink(categorySlug)}>
        <CardMedia />
      </Link>
    </Card>
  );
};