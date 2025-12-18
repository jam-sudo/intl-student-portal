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
          gridTemplateColumns: "170px 1.2fr 1fr 1fr",
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
            gridTemplateColumns: "170px 1.2fr 1fr 1fr",
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

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
      <div style={{ fontWeight: 800, marginBottom: 6 }}>{q}</div>
      <div style={{ opacity: 0.92, lineHeight: 1.5 }}>{a}</div>
    </div>
  );
}

export default function StemOptGuide() {
  const quickChecklist = [
    "Confirm you have a STEM-eligible degree for the extension (ask DSO if unsure).",
    "Confirm your employer is eligible (E-Verify + training plan support).",
    "Complete Form I-983 (training plan) with your employer; double-check dates, role, and supervision details.",
    "Submit I-983 + required documents to your DSO and request a new I-20 recommending STEM OPT.",
    "File the STEM OPT extension application on time following USCIS + DSO guidance.",
    "Keep a reporting routine: address/employment updates, self-evaluations, and any school portal reporting.",
  ];

  const timeline: Row[] = [
    {
      when: "2–4 months before OPT ends",
      action:
        "Talk to your DSO + employer early. Confirm STEM eligibility + employer E-Verify + willingness to do I-983 training plan + evaluations.",
      whyItMatters:
        "STEM OPT isn’t just paperwork. If the employer can’t support the training plan, you’ll lose time.",
      tips:
        "Start early if HR is slow. Set a deadline for employer signatures and internal review.",
    },
    {
      when: "Draft I-983",
      action:
        "Prepare Form I-983 with your employer: learning objectives, supervision, compensation, hours, site address, and how the role uses your STEM degree.",
      whyItMatters:
        "I-983 quality is the #1 friction point. Schools review for completeness and plausibility.",
      tips:
        "Keep it specific: tools/skills, what you will learn, who supervises, and how progress is measured.",
    },
    {
      when: "Request STEM OPT I-20",
      action:
        "Submit I-983 and required docs to your DSO and request the I-20 recommending STEM OPT.",
      whyItMatters:
        "You generally need the STEM recommendation I-20 before filing your extension application.",
      tips:
        "Verify every field (name, SEVIS ID, dates, employer info). Save PDFs immediately.",
    },
    {
      when: "File the extension",
      action:
        "File the STEM OPT extension following USCIS + DSO guidance (online or mail, depending on your instructions).",
      whyItMatters:
        "Timing matters. Late filing can break eligibility. Receipt notice is important for tracking.",
      tips:
        "Save submission confirmation and receipts. Create a folder with every doc/version.",
    },
    {
      when: "While pending",
      action:
        "Track the case. Keep working and reporting as your school requires (if eligible to continue employment while pending).",
      whyItMatters:
        "Most problems during this phase are missing updates or not responding to requests promptly.",
      tips:
        "Check status weekly. If you get a request/RFE, act fast and involve your DSO.",
    },
    {
      when: "After approval",
      action:
        "Verify EAD dates and continue STEM reporting requirements: periodic validations + required self-evaluations on I-983 schedule.",
      whyItMatters:
        "STEM OPT has structured reporting. Missing it can create SEVIS issues later.",
      tips:
        "Set calendar reminders for evaluations and validations; keep copies of all submissions.",
    },
  ];

  const i983KeyPoints = [
    "Training plan should read like a real plan: what you learn, what you do, and how supervision happens.",
    "Role duties should clearly connect to your STEM degree (avoid vague generic duties).",
    "Worksite address and supervisor contact must match reality (especially if hybrid/remote).",
    "Hours/week and compensation should be consistent with the offer letter / HR documents.",
    "Keep a versioned copy (v1, v2, final) and date each revision.",
  ];

  const commonMistakes = [
    "Waiting until the last minute—HR signatures + DSO review can be slow.",
    "I-983 too vague (no measurable learning objectives, unclear supervision).",
    "Mismatch across documents (dates, address, employer name formatting, role title).",
    "Assuming reporting is “optional” after approval (it’s not).",
    "Changing job/site/supervisor without updating your DSO/school portal as required.",
  ];

  const faq = [
    {
      q: "What is the single hardest part?",
      a: "Form I-983. Schools look for a coherent, realistic training plan and clear supervision. Start early and be specific.",
    },
    {
      q: "Is any employer OK if they use E-Verify?",
      a: "Employer eligibility is more than a checkbox. They must support the training plan, supervision, and required evaluations/reporting.",
    },
    {
      q: "What should I save?",
      a: "Everything: I-983 drafts/final, I-20s, receipts, notices, EAD copies, and proof of any reporting submissions.",
    },
    {
      q: "Is this legal advice?",
      a: "No. This is a practical guide. Always verify with your DSO and official sources.",
    },
  ];

  return (
    <main style={{ maxWidth: 950 }}>
      <h1 style={{ marginBottom: 6 }}>STEM OPT Extension Guide</h1>
      <div style={{ opacity: 0.8, marginBottom: 14 }}>
        A practical workflow focused on Form I-983 + reporting. Always confirm details with your DSO and the original official guidance.
      </div>

      <div style={{ marginTop: 10 }}>
        <Pill text="F-1" />
        <Pill text="STEM OPT" />
        <Pill text="I-983" />
        <Pill text="Reporting" />
      </div>

      <Section title="Quick checklist">
        <Card title="Do these in order" items={quickChecklist} />
      </Section>

      <Section title="Timeline (high-level)">
        <div style={{ opacity: 0.85, marginBottom: 10 }}>
          Treat this as a workflow map. Exact requirements and deadlines can vary by school process.
        </div>
        <Table rows={timeline} />
      </Section>

      <Section title="I-983: what schools typically care about">
        <Card
          title="Make your training plan “review-proof”"
          desc="If you do these well, most STEM OPT applications become straightforward."
          items={i983KeyPoints}
        />
      </Section>

      <Section title="Common mistakes">
        <Card
          title="Avoid these"
          desc="Most STEM OPT issues are timing + mismatched details + weak I-983 content."
          items={commonMistakes}
        />
      </Section>

      <Section title="FAQ (starter)">
        <div style={{ display: "grid", gap: 12 }}>
          {faq.map((x) => (
            <FaqItem key={x.q} q={x.q} a={x.a} />
          ))}
        </div>
      </Section>

      <div style={{ marginTop: 28, fontSize: 13, opacity: 0.75 }}>
        Not legal advice. Always verify with your school&apos;s DSO and official sources.
      </div>
    </main>
  );
}
