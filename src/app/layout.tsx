import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "International Student Policy Hub",
  description: "Policy updates and guides for international students in the U.S.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#ffffff",
          color: "#111827",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              Intl Student Policy Hub
            </a>

            <NavBar />
          </div>
        </header>

        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 16px" }}>
          {children}
        </div>

        <footer
          style={{
            borderTop: "1px solid #e5e7eb",
            marginTop: 48,
            padding: "18px 16px",
          }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto", fontSize: 13, opacity: 0.8 }}>
            Not legal advice. Always confirm with your school&apos;s DSO and official sources.
          </div>
        </footer>
      </body>
    </html>
  );
}
