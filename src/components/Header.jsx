import { useEffect, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact Us', button: true },
];

export default function Header({ forceSolid = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled || forceSolid ? 'scrolled' : ''}`} id="header">
      <div className="container header-container">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-highlight">R&amp;N</span> Tour
        </a>

        <nav className={`nav ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${item.button ? 'btn btn-primary' : ''}`.trim()}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="nav-close"
            id="nav-close"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-times" />
          </button>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(true)}
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </header>
  );
}
