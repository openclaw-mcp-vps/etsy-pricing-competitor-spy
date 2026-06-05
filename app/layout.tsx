import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EtsySpy – Track Competitor Pricing Automatically",
  description:
    "Monitor competitor Etsy shops for price changes, new listings, and sales patterns. Get instant alerts so you always stay ahead."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="93a9924f-bb3b-4ade-a970-7ee2ea0efc1f"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
