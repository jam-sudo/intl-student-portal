export default function GuidesPage() {
  const items = [
    {
      href: "/guides/f1",
      title: "F-1 Basics",
      desc: "Status rules, enrollment, travel, and common violations (overview).",
      tag: "Basics",
    },
    {
      href: "/guides/cpt",
      title: "CPT",
      desc: "Eligibility, offer letters, authorization timing, and common pitfalls.",
      tag: "Work",
    },
    {
      href: "/guides/opt",
      title: "OPT",
      desc: "Timeline, documents, reporting, and practical checklists.",
      tag: "Work",
    },
    {
      href: "/guides/stem-opt",
      title: "STEM OPT Extension",
      desc: "I-983 training plan, employer eligibility, reporting, and evaluations.",
      tag: "STEM",
    },
    {
      href: "/guides/ssn",
      title: "SSN",
      desc: "When you can apply, what documents you need, and typical steps.",
      tag: "Admin",
    },
  ];

  return (
    <main style={{ maxWidth: 1000 }}>
      <h1 style={{ marginBottom: 8 }}>Guides</h1>
      <p style={{ marginTop: 0, marginBottom: 20, opacity: 0.8 }}>
        Practical timelines and checklists for international students. Always confirm with your school&apos;s DSO and official sources.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 14,
        }}
      >
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              background: "#ffffff",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 800, fontSize: 18 }}>{it.title}</div>
              <span
                style={{
                  fontSize: 12,
                  padding: "2px 8px",
                  borderRadius: 999,
                  border: "1px solid #e5e7eb",
                  opacity: 0.9,
                }}
              >
                {it.tag}
              </span>
            </div>

            <div style={{ opacity: 0.85, lineHeight: 1.45 }}>{it.desc}</div>

            <div style={{ marginTop: "auto", fontSize: 13, opacity: 0.8 }}>
              Open →
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
