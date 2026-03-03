# 🍽️ Restaurant Website Template

A professional, fully editable Next.js website template for small restaurants.
Dark luxury aesthetic — Playfair Display typography, gold accents, smooth scroll animations.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## ✏️ Customising for a New Client

**99% of changes are made in one file: `config.js`**

Open `config.js` and update:

| Field | What to change |
|---|---|
| `restaurant.name` | Business name |
| `restaurant.tagline` | One-line description |
| `restaurant.description` | About paragraph |
| `restaurant.phone` | Phone number |
| `restaurant.email` | Email address |
| `restaurant.address` | Full address |
| `hours` | Opening hours per day |
| `menu` | All menu sections and items |
| `social` | Instagram / Facebook URLs |
| `mapEmbedUrl` | Google Maps embed URL |
| `formspreeEndpoint` | Formspree form URL |
| `theme` | Colours (hex values) |

---

## 🖼️ Replacing Images

Images are defined at the top of each component file with a clear comment:

- **Hero image** → `components/Hero.jsx` → `HERO_IMAGE`
- **About image** → `components/About.jsx` → `ABOUT_IMAGE`
- **Gallery images** → `components/Gallery.jsx` → `GALLERY_IMAGES`

Replace the Unsplash placeholder URLs with the client's actual photos.

For local images, put them in `/public/images/` and reference as `/images/filename.jpg`

---

## 🌐 Getting a Google Maps Embed URL

1. Go to maps.google.com
2. Search the restaurant address
3. Click Share → Embed a map
4. Copy only the `src="..."` URL
5. Paste into `config.js` → `mapEmbedUrl`

---

## 📬 Setting Up the Contact Form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the endpoint URL (e.g. `https://formspree.io/f/xyzabc`)
4. Paste into `config.js` → `formspreeEndpoint`

Form submissions will be emailed directly to the client.

---

## 🚢 Deploying to Vercel

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

Then in Vercel dashboard → Settings → Domains → add client's custom domain.
Point the domain's DNS A record to `76.76.21.21` (Vercel).

---

## 🎨 Changing the Colour Theme

Edit `theme` in `config.js`:

```js
theme: {
  primary:    "#C9A96E",  // Gold accent — buttons, highlights
  background: "#111111",  // Page background
  surface:    "#1A1A1A",  // Cards, sections
  text:       "#F5F0E8",  // Main text colour
  muted:      "#888888",  // Secondary text
  border:     "#2A2A2A",  // Dividers
}
```

For a light theme restaurant, try:
```js
theme: {
  primary:    "#8B6914",
  background: "#FAFAF8",
  surface:    "#F2F0EC",
  text:       "#1A1A1A",
  muted:      "#777777",
  border:     "#E0DDD8",
}
```

---

## 📁 Project Structure

```
/
├── config.js           ← ALL client data lives here
├── pages/
│   ├── _app.js         ← Injects theme, global styles
│   └── index.js        ← Page assembly + SEO head
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Menu.jsx
│   ├── Gallery.jsx
│   ├── FindUs.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useReveal.js    ← Scroll animation hook
├── styles/
│   └── globals.css     ← All CSS, animations, variables
└── public/
    └── images/         ← Put client images here
```
