export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=447983512153&text=Hello,%20I%E2%80%99d%20like%20to%20plan%20a%20trip!"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Speak to us on WhatsApp"
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
}
