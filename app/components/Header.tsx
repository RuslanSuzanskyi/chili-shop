import CatalogButton from "./CatalogButton";
import Container from "./Container";
import Navigation from "./Navigation";
import { AppBar, Toolbar } from '@mui/material'
import ProductsSearch from "./ProductsSearch";

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
        <Toolbar component="nav" sx={{display: "flex", justifyContent: "space-between", gap: 8}}>
          <CatalogButton />
          <ProductsSearch />
        </Toolbar> 
      </Container>
    </AppBar>
  );
}