import { useEffect, useRef, useState } from 'react';
import { socialLinks } from '../data/siteData.js';

const initialForm = {
  name: '',
  email: '',
  destination: '',
  message: '',
  _honey: '',
};

const contactEmail = 'contact@roneiandnaomitour.com';
const contactEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData._honey) {
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          destination: formData.destination || 'Not specified',
          message: formData.message,
          _honey: formData._honey,
          _subject: 'New travel enquiry from R&N Tour website',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully. We will be in touch shortly.',
      });
      setFormData(initialForm);

      timeoutRef.current = window.setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, we could not send your message. Please email us directly or try WhatsApp.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contato-container">
          <div className="contato-info reveal">
            <h2>Ready For Your Next Trip?</h2>
            <p>
              Tell us where you want to go and we will help shape an itinerary that feels right for
              your timing, budget and comfort.
            </p>

            <div className="contact-details">
              <div className="contact-card">
                <i className="fab fa-whatsapp" />
                <div>
                  <h4>WhatsApp</h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=447983512153&text=Hello,%20I%E2%80%99d%20like%20to%20plan%20a%20trip!"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +44 7983 512153
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <i className="fas fa-envelope" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
              </div>
              <div className="contact-card social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                      <i className={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contato-form reveal delay-2">
            <form className="form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                className="hidden-field"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. James Smith"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. james@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="destination">Destination of Interest</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="e.g. London, Tokyo, Rio de Janeiro"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us what you need and we will be in touch shortly."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={isSending}>
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <i className="fas fa-paper-plane" />
                  </>
                )}
              </button>
              <div className="form-status" aria-live="polite">
                {status.message ? (
                  <span className={`${status.type}-message`}>
                    <i className={`fas ${status.type === 'success' ? 'fa-check-circle' : 'fa-circle-exclamation'}`} />{' '}
                    {status.message}
                  </span>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
