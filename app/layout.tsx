import { Inter, Bebas_Neue } from 'next/font/google';
import "./globals.css";
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export const metadata = {
  title: "John Morales — Designer",
  description: "Portfolio of John Morales, multidisciplinary designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable}`} suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
