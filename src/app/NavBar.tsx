"use client";

import { usePathname } from "next/navigation";

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

export default function NavBar() {
  const pathname = usePathname() || "/";

  const items = [
    { href: "/", label: "Home" },
    { href: "/guides", label: "Guides" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {items.map((it) => {
        const active =
          it.href === "/"
            ? pathname === "/"
            : pathname === it.href || pathname.startsWith(it.href + "/");

        return (
          <NavLink key={it.href} href={it.href} label={it.label} isActive={active} />
        );
      })}
    </nav>
  );
}
