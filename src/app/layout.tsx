import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "International Student Policy Hub",
  description: "Policy updates and guides for international students in the U.S.",
};

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        padding: "8px 10px",
        borderRadius: 10,
        border: isActive ? "1px solid #111827" : "1px solid transparent",
        background: isActive ? "#f3f4f6" : "transparent",
        fontWeight: isActive ? 700 : 500,
      }}
    >
      {label}
    </a>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // NOTE: This is a simple non-Next-aware active state. We'll upgrade it later.
  // For now it highlights "Home" only when you're on "/".
  // If you want true active highlighting, we’ll switch to next/navigation (client component).
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const items = [
    { href: "/", label: "Home" },
    { href: "/guides", label: "Guides" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
  ];

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

            <nav style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {items.map((it) => (
                <NavLink
                  key={it.href}
                  href={it.href}
                  label={it.label}
                  isActive={pathname === it.href || pathname.startsWith(it.href + "/")}
                />
              ))}
            </nav>
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
