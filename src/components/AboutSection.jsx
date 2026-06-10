import { aboutFeatures } from '../data/siteData.js';

export default function AboutSection() {
  return (
    <section className="about section-padding" id="about">
      <div className="container sobre-container">
        <div className="sobre-image reveal">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="About Ronei and Naomi Tour"
            loading="lazy"
          />
        </div>
        <div className="sobre-content reveal delay-2">
          <h2>
            By Your Side On Every
            <br /> Long-Haul Flight
          </h2>
          <p>
            <strong>Ronei and Naomi Tour</strong> was built to make international travel feel more
            personal. We support passengers who want clear guidance, practical advice and a smoother
            experience from booking through to arrival.
          </p>
          <p>
            We may be a growing business, but our approach is simple: careful planning, honest
            communication and proper attention to the details that matter when you are travelling
            across continents.
          </p>
          <ul className="sobre-features">
            {aboutFeatures.map((feature) => (
              <li key={feature}>
                <i className="fas fa-check-circle" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Speak to Us
          </a>
        </div>
      </div>
    </section>
  );
}
