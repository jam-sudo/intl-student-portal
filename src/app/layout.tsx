import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "International Student Policy Hub",
  description: "Policy updates and guides for international students in the U.S.",
};

<<<<<<< HEAD
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
=======
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <header style={{ padding: "16px 24px", borderBottom: "1px solid #e5e7eb" }}>
          <strong>International Student Policy Hub</strong>
        </header>

        <div style={{ padding: "24px" }}>{children}</div>

        <footer style={{ padding: "16px 24px", borderTop: "1px solid #e5e7eb" }}>
          <small>
            Not legal advice. Always confirm with your school&apos;s DSO and official sources.
          </small>
        </footer>
>>>>>>> 1f9066819694795212a3812453369b49a9c66930
      </body>
    </html>
  );
}
