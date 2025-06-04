import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChatBot } from "@/components/chat-bot";
import { BackToTop } from "@/components/back-to-top";
import { Toaster } from "sonner";
import { NewsletterPopup } from "@/components/newsletter-popup";

export const metadata: Metadata = {
  title: 'Carlora Strategic Innovation Ltd',
  description: 'Empowering businesses through strategic innovation and expert consulting services.',
  keywords: ['business consulting', 'strategic innovation', 'digital transformation', 'business growth'],
  authors: [{ name: 'Carlora Strategic Innovation' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carlora.com',
    title: 'Carlora Strategic Innovation Ltd',
    description: 'Empowering businesses through strategic innovation and expert consulting services.',
    siteName: 'Carlora Strategic Innovation',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
            <ChatBot />
            <BackToTop />
            <NewsletterPopup />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}