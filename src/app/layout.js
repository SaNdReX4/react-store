import "./globals.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Store Project",
  description: "Next.js homework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {}
        <header>
          <NavBar/>
        </header>

        {}
        <main className="grow">
          {children}
        </main>

        {}
        <Footer />
      </body>
    </html>
  );
}