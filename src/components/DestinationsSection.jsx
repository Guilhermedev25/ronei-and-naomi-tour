import { useEffect, useRef } from 'react';
import { destinations } from '../data/siteData.js';

export default function DestinationsSection() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return undefined;
    }

    let isPointerDown = false;
    let didDrag = false;
    let startX = 0;
    let startScrollLeft = 0;
    let activePointerId = null;

    const endDrag = () => {
      if (!isPointerDown) {
        return;
      }

      isPointerDown = false;
      carousel.classList.remove('is-dragging');

      if (activePointerId !== null && carousel.hasPointerCapture?.(activePointerId)) {
        carousel.releasePointerCapture(activePointerId);
      }

      activePointerId = null;

      window.setTimeout(() => {
        didDrag = false;
      }, 0);
    };

    const onPointerDown = (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }

      isPointerDown = true;
      didDrag = false;
      activePointerId = event.pointerId;
      startX = event.clientX;
      startScrollLeft = carousel.scrollLeft;
      carousel.classList.add('is-dragging');
      carousel.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!isPointerDown || event.pointerId !== activePointerId) {
        return;
      }

      const distance = event.clientX - startX;

      if (Math.abs(distance) > 6) {
        didDrag = true;
      }

      if (!didDrag) {
        return;
      }

      carousel.scrollLeft = startScrollLeft - distance;
    };

    const onPointerUp = (event) => {
      if (event.pointerId !== activePointerId) {
        return;
      }

      endDrag();
    };

    const onClickCapture = (event) => {
      if (!didDrag) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
    };

    carousel.addEventListener('pointerdown', onPointerDown);
    carousel.addEventListener('pointermove', onPointerMove);
    carousel.addEventListener('pointerup', onPointerUp);
    carousel.addEventListener('pointercancel', endDrag);
    carousel.addEventListener('lostpointercapture', endDrag);
    carousel.addEventListener('click', onClickCapture, true);

    return () => {
      carousel.removeEventListener('pointerdown', onPointerDown);
      carousel.removeEventListener('pointermove', onPointerMove);
      carousel.removeEventListener('pointerup', onPointerUp);
      carousel.removeEventListener('pointercancel', endDrag);
      carousel.removeEventListener('lostpointercapture', endDrag);
      carousel.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  const scrollByCard = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({ left: direction * 330, behavior: 'smooth' });
  };

  return (
    <section className="destinations section-padding" id="destinations">
      <div className="container">
        <div className="section-title-wrapper reveal">
          <h2>Popular Destinations</h2>
          <p>
            From vibrant global metropolises to life-changing long-haul journeys, we help you
            travel smarter to the places that matter most.
          </p>
        </div>

        <div className="destinos-carousel-wrapper">
          <button
            type="button"
            className="carousel-btn prev-btn"
            id="prev-btn"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
          >
            <i className="fas fa-chevron-left" />
          </button>

          <div className="destinos-carousel" id="destinos-carousel" ref={carouselRef}>
            {destinations.map((destination, index) => (
              <article
                key={destination.title}
                className={`destination-card reveal delay-${Math.min(index + 1, 5)}`}
              >
                <div className="card-image">
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                  {destination.badge ? <div className="card-badge">{destination.badge}</div> : null}
                </div>
                <div className="card-content">
                  <div className="card-location">
                    <i className="fas fa-map-marker-alt" /> {destination.country}
                  </div>
                  <h3>{destination.title}</h3>
                  <p>{destination.description}</p>
                  <a href={destination.href} target="_blank" rel="noreferrer" className="card-link">
                    Find Out More <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="carousel-btn next-btn"
            id="next-btn"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
