import { socialLinks } from '../data/siteData.js';
import { legalPages } from '../data/legalPages.js';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo footer-logo">
            <span>R&amp;N</span> Tour
          </a>
          <p>
            Your travel partner for long-haul flight bookings and personal support, with a strong
            focus on comfort across intercontinental routes.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            {legalPages.map((link) => (
              <li key={link.slug}>
                <a href={`#/legal/${link.slug}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ronei and Naomi Tour. All rights reserved.</p>
        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
