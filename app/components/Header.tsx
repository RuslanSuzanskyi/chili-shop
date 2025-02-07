import CatalogButton from "./CatalogButton";
import Container from "./Container";
import Navigation from "./Navigation";
import { AppBar, Toolbar } from '@mui/material'

const navItems = [
  { label: "Головна", href: "/" },
  { label: "Про магазин", href: "/about" },
  { label: "Контакти", href: "/contacts" },
  { label: "Блог", href: "/articles" },
];

export default function Header() {
  return (
    <AppBar position="sticky" sx={{
      backgroundColor: 'var(--white)',
      color: 'var(--black)',
      boxShadow: 'none'
    }}>
      <Container>
        <Toolbar component="nav">
          <Navigation navLinks={navItems} />
        </Toolbar>
        <Toolbar component="nav">
          <CatalogButton />
        </Toolbar> 
      </Container>
    </AppBar>
  );
}