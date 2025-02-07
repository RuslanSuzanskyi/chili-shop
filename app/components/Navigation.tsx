'use client';

import { List, ListItem, Link } from "@mui/material";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  return (
    <List sx={{ display: 'flex', gap: 2, padding: 0 }}>
      {navLinks.map((link) => (
        <ListItem 
          key={link.label}
          sx={{
            padding: '0.4rem 0.8rem',
            '&:first-of-type': {
              padding: '0.4rem 0.8rem 0.4rem 0'
            },
          }}
        >
          <Link 
            href={link.href} 
            sx={{
              fontWeight: 'bold',
              "&:hover": {
                color: 'var(--green)'
              },
              "&:active": {
                color: 'var(--green)'
              }
            }}
          >
            {link.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
