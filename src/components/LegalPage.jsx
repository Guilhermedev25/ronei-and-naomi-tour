export default function LegalPage({ page }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <a href="#home" className="legal-back-link">
            <i className="fas fa-arrow-left" /> Back to home
          </a>
          <p className="legal-kicker">Legal information</p>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          <span>Last updated: {page.updatedAt}</span>
        </div>
      </section>

      <section className="legal-content section-padding">
        <div className="container legal-content-container">
          {page.sections.map((section) => (
            <article key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </article>
          ))}

          <div className="legal-disclaimer">
            <i className="fas fa-circle-info" />
            <p>
              This page is written for general website information and does not replace professional
              legal advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
