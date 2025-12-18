type Row = {
  when: string;
  action: string;
  whyItMatters: string;
  tips: string;
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 22 }}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      {children}
    </section>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12,
        padding: "2px 10px",
        border: "1px solid #e5e7eb",
        borderRadius: 999,
        opacity: 0.9,
        marginRight: 6,
        marginBottom: 6,
      }}
    >
      {text}
    </span>
  );
}

function Card({
  title,
  desc,
  items,
}: {
  title: string;
  desc?: string;
  items: string[];
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        padding: 16,
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 6 }}>{title}</div>
      {desc ? <div style={{ opacity: 0.85, marginBottom: 10 }}>{desc}</div> : null}
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.55 }}>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function Table({ rows }: { rows: Row[] }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1.2fr 1fr 1fr",
          gap: 0,
          background: "#f9fafb",
          borderBottom: "1px solid #e5e7eb",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        <div style={{ padding: 12 }}>When</div>
        <div style={{ padding: 12 }}>What to do</div>
        <div style={{ padding: 12 }}>Why it matters</div>
        <div style={{ padding: 12 }}>Tips</div>
      </div>

      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1.2fr 1fr 1fr",
            borderBottom: i === rows.length - 1 ? "none" : "1px solid #e5e7eb",
            background: i % 2 === 0 ? "#ffffff" : "#fcfcfd",
          }}
        >
          <div style={{ padding: 12, fontWeight: 700 }}>{r.when}</div>
          <div style={{ padding: 12, lineHeight: 1.45 }}>{r.action}</div>
          <div style={{ padding: 12, lineHeight: 1.45, opacity: 0.9 }}>{r.whyItMatters}</div>
          <div style={{ padding: 12, lineHeight: 1.45, opacity: 0.9 }}>{r.tips}</div>
        </div>
      ))}
    </div>
  );
}

export default function OptGuide() {
  const timeline: Row[] = [
    {
      when: "Before applying",
      action:
        "Confirm your graduation/program end date and your school’s OPT process. Decide your requested OPT start date (within allowed window).",
      whyItMatters:
        "OPT timing is date-sensitive and school workflows vary. Your OPT start date affects work eligibility and unemployment clock.",
      tips:
        "Ask your DSO for internal deadlines and required documents. Keep a checklist folder (PDF copies).",
    },
    {
      when: "Request OPT I-20",
      action:
        "Request an OPT-recommended I-20 from your DSO and verify all fields (name, SEVIS ID, dates, degree level).",
      whyItMatters:
        "The OPT recommendation on the I-20 is foundational. Incorrect info can cause delays or denial.",
      tips:
        "Double-check every date. Save the new I-20 PDF immediately in multiple places.",
    },
    {
      when: "Prepare packet",
      action:
        "Gather required IDs and documents (passport, visa, I-94, I-20 with OPT recommendation, photo requirements, etc.).",
      whyItMatters:
        "Missing/incorrect docs are common reasons for RFE (Request for Evidence) or delays.",
      tips:
        "Use clear scans. Keep file names consistent: YYYY-MM-DD_docname.pdf",
    },
    {
      when: "Submit application",
      action:
        "Submit your OPT application following USCIS + your school guidance (online or mail, depending on your program’s instructions).",
      whyItMatters:
        "Submission timing controls processing and eligibility. The receipt notice matters for tracking.",
      tips:
        "Save confirmation pages/receipts. Screenshot submission success pages.",
    },
    {
      when: "After receipt",
      action:
        "Track your case. Respond quickly to any USCIS messages or RFE. Keep your DSO updated if required.",
      whyItMatters:
        "RFEs have deadlines. Missing one can end the case.",
      tips:
        "Create a reminder: check status weekly. Keep all mailing/tracking numbers.",
    },
    {
      when: "EAD approved",
      action:
        "Confirm EAD card details (name, dates). Plan your employment start within your authorized dates.",
      whyItMatters:
        "You can only work within authorized dates. Date errors must be fixed ASAP.",
      tips:
        "If anything is wrong on the card, contact your DSO and USCIS immediately.",
    },
    {
      when: "During OPT",
      action:
        "Follow reporting requirements (employment updates, address changes, etc.) as required by your school/SEVIS workflow.",
      whyItMatters:
        "Reporting problems can put status at risk even if you have an EAD.",
      tips:
        "Keep a simple log: employer name, start/end dates, role, hours/week, supervisor email.",
    },
  ];

  const quickChecklist = [
    "Know your program end date and earliest/latest possible OPT start dates (confirm with DSO).",
    "Request OPT I-20 and verify dates + personal info.",
    "Prepare documents (passport/visa/I-94/I-20) and clean scans.",
    "Submit application and save receipts + confirmation screenshots.",
    "Track case status; respond quickly to any RFE.",
    "After approval, verify EAD card dates and plan employment accordingly.",
    "During OPT, keep SEVIS/employment reporting up to date.",
  ];

  const commonMistakes = [
    "Assuming rules are identical across schools (DSO workflows differ).",
    "Not checking every date on the I-20 and EAD card.",
    "Submitting with inconsistent info across documents.",
    "Waiting too late and hitting internal school deadlines.",
    "Not keeping PDF copies of everything you submitted/received.",
    "Missing reporting obligations after approval.",
  ];

  const faq = [
    {
      q: "Is this legal advice?",
      a: "No. This is a student-friendly guide. Always verify with your DSO and the official source.",
    },
    {
      q: "What is the single most important step?",
      a: "Align your dates (program end date, OPT start date, I-20 recommendation date) and follow your school’s process exactly.",
    },
    {
      q: "What should I save?",
      a: "All PDFs and screenshots: I-20s, receipts, confirmation pages, notices, and any messages.",
    },
  ];

  return (
    <main style={{ maxWidth: 950 }}>
      <h1 style={{ marginBottom: 6 }}>OPT Guide</h1>
      <div style={{ opacity: 0.8, marginBottom: 14 }}>
        A practical timeline + checklist. Always confirm details with your DSO and the original USCIS page.
      </div>

      <div style={{ marginTop: 10 }}>
        <Pill text="F-1" />
        <Pill text="OPT" />
        <Pill text="Timeline" />
        <Pill text="Checklist" />
      </div>

      <Section title="Quick checklist">
        <Card title="Do these in order" items={quickChecklist} />
      </Section>

      <Section title="Timeline (high-level)">
        <div style={{ opacity: 0.85, marginBottom: 10 }}>
          This is a safe “workflow map.” Dates and exact rules vary by school and your situation—confirm with your DSO.
        </div>
        <Table rows={timeline} />
      </Section>

      <Section title="Common mistakes">
        <Card
          title="Avoid these"
          desc="Most OPT issues are paperwork + timing errors, not complicated law."
          items={commonMistakes}
        />
      </Section>

      <Section title="FAQ (starter)">
        <div style={{ display: "grid", gap: 12 }}>
          {faq.map((x) => (
            <div key={x.q} style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>{x.q}</div>
              <div style={{ opacity: 0.9, lineHeight: 1.5 }}>{x.a}</div>
            </div>
          ))}
        </div>
      </Section>

      <div style={{ marginTop: 28, fontSize: 13, opacity: 0.75 }}>
        Not legal advice. Always confirm with your school&apos;s DSO and official sources.
      </div>
    </main>
  );
}
