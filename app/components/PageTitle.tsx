'use client'

import { Typography } from "@mui/material";

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return <Typography variant="h1" sx={{fontWeight: 800}}>{title}</Typography>;
};

export default PageTitle;

