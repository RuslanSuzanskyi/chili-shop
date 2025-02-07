'use client';

import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';
import { Button } from '@mui/material';

const CatalogButton = () => {
  return (
    <Link href="/catalog" style={{ textDecoration: 'none' }}>
      <Button
        startIcon={<GridViewIcon sx={{ color: 'var(--white)' }} />}
        sx={{
          backgroundColor: 'var(--black)',
          color: 'var(--white)',
          padding: '0.8rem 1.6rem',
          fontWeight: '600'
        }}
      >
        Каталог
      </Button>
    </Link>
  );
};

export default CatalogButton;
