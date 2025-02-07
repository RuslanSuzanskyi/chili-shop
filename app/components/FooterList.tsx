'use client';

import { Box, Link, List, ListItem, Typography } from "@mui/material";

type Props = {
  title: string;
  links: { label: string; href: string }[];
}

const FooterList = ({ title, links }: Props) => {
  return (
    <Box
      sx={{
        width: '30%',
        verticalAlign: 'baseline'
      }}
    >
      <Typography 
        variant="h3"
        sx={{
          color: 'var(--black)',
          fontWeight: 'bold',
          margin: '1.8rem 0'
        }}
      >
        {title}
      </Typography>

      <List 
        sx={{
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        {links.map((link) => (
          <ListItem 
            key={link.label}
            sx={{
              margin: '0.8rem 0',
              padding: 0
            }}
          >
            <Link
              href={link.href}
              sx={{
                color: 'var(--blue)',
                '&:hover': {
                  color: 'var(--red)'
                },
                '&:active': {
                  color: 'var(--red)'
                },
              }}
            >
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterList;