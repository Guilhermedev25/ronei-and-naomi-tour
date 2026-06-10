export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content container reveal">
        <span className="hero-subtitle">Travel Further, Travel Better</span>
        <h1>
          Your Next Big Journey Starts <span className="text-gold">Here</span>
        </h1>
        <p>
          <strong>Ronei and Naomi Tour</strong> helps travellers across the UK book long-haul
          flights with confidence. From family visits to multi-stop holidays, we make complex
          itineraries feel straightforward, personal and well looked after.
        </p>
        <div className="hero-buttons">
          <a
            href="https://api.whatsapp.com/send?phone=447983512153&text=Hello,%20I%E2%80%99d%20like%20to%20plan%20a%20trip!"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <i className="fab fa-whatsapp" />Plan Your Trip
          </a>
          <a href="#destinations" className="btn btn-outline">
            Explore Destinations
          </a>
        </div>
      </div>

      <aside className="hero-promo reveal delay-1">
        <div className="promo-card">
          <i className="fas fa-plane-departure" />
          <div>
            <h4>Popular Request</h4>
            <p>Brazil, Japan and Australia route support</p>
          </div>
        </div>
      </aside>
    </section>
  );
}
