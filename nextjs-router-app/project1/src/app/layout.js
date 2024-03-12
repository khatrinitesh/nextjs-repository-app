"use client";
import "../styles/globals.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// compoennts
import Header from "@/components/header";
import Footer from "@/components/footer";
import SplashPage from "@/components/SplashPage";

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  const timeoutDuration = 3000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, timeoutDuration);

    return () => clearTimeout(timeoutId);
  }, []);

  const pathname = usePathname();
  console.log(pathname);

  const validRoutes = ["/", "/about", "/service", "/contact"];

  return (
    <html lang="en">
      <body>
        {/* S > HEADER */}
        {validRoutes.includes(pathname) && <Header />}
        {/* E > HEADER */}

        {/* S > MAIN CONTENT */}
        {children}
        {/* E > MAIN CONTENT */}

        {/* S > FOOTER */}
        {validRoutes.includes(pathname) && <Footer />}
        {/* E > FOOTER */}

        {/* S > SPLASH PAGE */}
        {showSplash && validRoutes.includes(pathname) && <SplashPage />}
        {/* E > SPLASH PAGE */}
      </body>
    </html>
  );
}
