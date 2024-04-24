"use client"
import { usePathname } from 'next/navigation'
import Head from 'next/head'; // Import Head component
import '../style/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js',
}

// COMPONENT
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   // Determine the current pathname
   const navigation = usePathname();

   // Check if the current page is the home, about, or contact page
   const isHomePage = navigation.pathname === "/";
   const isAboutPage = navigation.pathname === "/about";
   const isContactPage = navigation.pathname === "/contact";
   
    // Check if the current page is an error page
    const isErrorPage = navigation.pathname === "/not-found";
   
    // Check if the current page is not the home, about, or contact page and not an error page
    const isNotFoundPage = !isHomePage && !isAboutPage && !isContactPage && !isErrorPage;

  not found";
  return (
    <html lang="en">
        <Head>
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        </Head>
      <body>
        <div className="flex flex-col min-h-screen">
        {!isNotFoundPage && <Header/>}
        <div className="grow w-full h-full bg-violet-300">
         {children}
         </div>
         {!isNotFoundPage && <Footer/>}
        </div>
      </body>
    </html>
  );
}
