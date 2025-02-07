import { Box } from "@mui/material";
import Container from "./Container";
import FooterList from "./FooterList";

const footerItems = [
  {
    title: 'Категорії',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/' },
      { label: 'About Us', href: '/' },
    ],
  },
  {
    title: 'Підтримка',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/' },
      { label: 'About Us', href: '/t' },
    ],
  },
  {
    title: 'Особиста інформація',
    links: [
      { label: 'Кабінет', href: '/' },
      { label: 'Історія замовлень', href: '/' },
      { label: 'Вибране', href: '/' },
    ],
  }
]

export default async function Footer() {
  return (
    <Box 
      component="footer"
      sx={{
        padding: '2.4rem 0'
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {footerItems.map((section) => (
            <FooterList key={section.title} title={section.title} links={section.links}/>
          ))}  
        </Box>
      </Container>
    </Box>
  );
}