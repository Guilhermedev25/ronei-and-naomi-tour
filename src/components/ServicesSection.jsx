import { services } from '../data/siteData.js';

export default function ServicesSection() {
  return (
    <section className="services section-padding bg-light" id="services">
      <div className="container">
        <div className="section-title-wrapper reveal">
          <h2>Our Services</h2>
          <p>
            We handle the details that make long-haul travel easier, so you can focus on the trip
            rather than the stress around it.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.title} className={`service-item reveal delay-${index + 1}`}>
              <i className={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
