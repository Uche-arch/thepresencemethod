// app/layout.js
import { Montserrat, Inter } from 'next/font/google';
import "./globals.css"; // Ensure your Tailwind directives are here
import Header from "./components/header"
import Footer from "./components/footer"
import NextTopLoader from 'nextjs-toploader';
import CustomCursor from "./components/custom-cursor";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});
export const metadata = {
  title: "The Presence Method",
  description: "Digital Clarity. Emotional Regulation. Productive Living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}>
        <NextTopLoader 
          color="#FE7F2D"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false} // Keeping it "Clean & Serious" without the spinning circle
          easing="ease"
          speed={200}
          // shadow="0 0 10px #FE7F2D,0 0 5px #FE7F2D"
        />
        <Header />
        {/* <CustomCursor /> */}
        
        {/* The 'flex-grow' ensures the footer stays at the bottom even on short pages */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}