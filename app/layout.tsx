import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import '../styles/globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from '../styles/theme';
import Container from './components/Container';

export const metadata: Metadata = {
  title: "Інтернет-магазин | Chili Pepper",
  description: "Купити насіння гострого перцю",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main className="main">
              <Container>
                {children}  
              </Container>
            </main>
            <Footer />
          </ThemeProvider>  
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
