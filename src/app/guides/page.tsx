export default function GuidesPage() {
  const items = [
    { href: "/guides/f1", title: "F-1 Basics", desc: "Status, I-20, travel, violations (overview)." },
    { href: "/guides/cpt", title: "CPT", desc: "Eligibility, timing, common pitfalls." },
    { href: "/guides/opt", title: "OPT", desc: "Timeline, documents, reporting, STEM OPT basics." },
    { href: "/guides/ssn", title: "SSN", desc: "When you can apply, what you need, typical steps." },
  ];

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ marginBottom: 8 }}>Guides</h1>
      <p style={{ marginTop: 0, marginBottom: 24 }}>
        Practical checklists and timelines. Always confirm with your school&apos;s DSO and official sources.
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12, maxWidth: 800 }}>
        {items.map((it) => (
          <li key={it.href} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <a href={it.href} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>{it.title}</div>
              <div style={{ opacity: 0.8 }}>{it.desc}</div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
