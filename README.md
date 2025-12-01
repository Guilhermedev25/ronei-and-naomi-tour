# R&N Tour – Travel Agency Landing Page

![R&N Tour landing page screenshot](https://github.com/user-attachments/assets/b9c4632b-1f7e-4257-a836-ea56c94f19f4)

This repo contains a responsive landing page built for **R&N Tour**, a travel agency based in London that offers personalized trips to international destinations.

The main idea of this project is to:

- Present the agency in a clear and simple way  
- Highlight some featured destinations  
- Make it very easy for users to contact the team (especially through WhatsApp)

Over the last few months I’ve been revisiting and improving this page as I learn more about front-end. Every time I understand something new in HTML, CSS or JavaScript, I try to apply it here and make the project a bit more “real-world”.

---

## 🔗 Live Demo

- **GitHub Pages:** https://guilhermedev25.github.io/ronei-and-naomi-tour/  
- **Custom domain:** https://www.roneiandnaomitour.com/  

---

## 🎯 Project Goals

- Create a clean and modern **landing page** for a travel agency  
- Practice **responsive design** (mobile-first and desktop)  
- Use a small **design system with CSS variables (HSL)**  
- Add a simple **image carousel** in the hero section  
- Focus on clear **calls to action** (WhatsApp, contact section, destinations)

---

## 🧩 Main Features

### 1. Hero section

- Headline: **“Discover Your Next Destination”**  
- Short description explaining what R&N Tour does  
- Primary CTA: **“View Your Destination”** – scrolls to the featured destinations section  
- Side image carousel showing different travel locations

### 2. About section

- Explains that R&N Tour is a travel agency based in **London**  
- Focus on helping **Brazilians and international travelers**  
- Mentions flights, accommodation, transfers and experiences  
- Highlights that the support is **personal and in Portuguese**, from the first contact until the end of the trip

### 3. Safety section

- Emphasis on **travel safety**  
- Mentions trusted partners, travel insurance options and **24/7 assistance**  
- Goal: give more confidence to users when booking a trip

### 4. Featured Destinations

Cards for some of the main destinations:

- Brazil  
- Australia  
- United States  
- London  
- Singapore  
- Thailand  

Each card includes:

- Image of the destination  
- Short description  
- Button **“View your destination”** that opens WhatsApp with a **pre-filled message** for that specific place (for example: “I’d like to plan a trip to Brazil”)

### 5. Contact section

- Phone number (UK)  
- Email address  
- Location (London, United Kingdom)  
- CTA button **“Contact Us”** that opens a WhatsApp chat with the agency

### 6. Footer

- Brand name and slogan: **“Your Travel Agency For Amazing Trips”**  
- Simple navigation links (services, about)  
- “Support” and “Customer help” links that also open WhatsApp with pre-filled messages  

### 7. Basic SEO & Social Preview

- `<title>` and `meta description`  
- Open Graph meta tags for better preview when sharing the link  
- Favicon / logo used in the header and About section

---

## 🛠️ Tech Stack

- **HTML5**  
  - Semantic structure with sections for hero, about, safety, destinations, contact and footer  

- **CSS3**  
  - CSS variables for colors, fonts and spacing  
  - HSL color system to build and adjust the brand palette  
  - Flexbox and CSS Grid for layout  
  - Responsive design with media queries  
  - Small polish on the image carousel for mobile (border radius, `object-fit: cover`, etc.)

- **JavaScript (Vanilla)**  
  - Simple image carousel logic  
  - Navigation menu toggle for mobile  
  - Scroll-related behaviours (like the active link when scrolling)

---

## 📂 Project Structure (simplified)

```bash
.
├── index.html          # Main landing page
├── assets
│   ├── css
│   │   └── style.css   # Styles and responsive layout
│   ├── js
│   │   └── main.js     # Carousel + interactions (menu, scroll)
│   └── img             # Logo and destination images
