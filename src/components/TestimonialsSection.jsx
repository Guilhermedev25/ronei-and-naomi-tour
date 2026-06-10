export default function TestimonialsSection() {
  return (
    <section className="testimonials section-padding bg-light" id="testimonials">
      <div className="container">
        <div className="section-title-wrapper reveal">
          <h2>What You Can Expect</h2>
          <p>Clear answers, practical options and direct support while your trip takes shape.</p>
        </div>

        <div className="testimonial-slider reveal delay-1">
          <div className="testimonial-card">
            <div className="stars">
              <i className="fas fa-route" />
              <i className="fas fa-headset" />
              <i className="fas fa-plane" />
            </div>
            <p>
              We focus on the details that matter on long-haul journeys: route options, stopover
              times, luggage rules, passenger details and clear communication before booking.
            </p>
            <div className="client-info">
              <h4>Personal travel support</h4>
              <span>From first enquiry to confirmed itinerary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
