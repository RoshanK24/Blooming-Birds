# Blooming Birds Preschool 🌸

A warm, playful "liquid-glass" (glassmorphism) redesign for Blooming Birds Preschool,
Dehradun. Built with **React + Vite + Tailwind CSS**.

## Design system
- **Look:** frosted-glass cards floating over a dreamy pastel gradient with drifting orbs
- **Colors:** coral `#FF8C6B`, sky `#6FC3E8`, mint `#7ED9B0`, lavender `#B49BE8`, sunshine `#FFC15E`, ink `#4A3B52`
- **Fonts:** Fredoka (display) + Nunito (body)

## Run locally
```bash
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy (Vercel)
Push to a Git repo and import into Vercel, or:
```bash
npm i -g vercel && vercel
```
Framework preset: **Vite**. No env vars needed.

## Where to customise
| What | File |
|------|------|
| All text / programs / FAQs / activities | `src/data.js` |
| Colors, fonts, animations | `tailwind.config.js` |
| Glass styles & background gradient | `src/index.css` |
| Gallery photos | `src/data.js` (the `gallery` array `img` URLs) |
| Logo | `src/components/Logo.jsx` + `public/favicon.svg` |

### Swapping gallery images
Replace the Unsplash URLs in `src/data.js` → `gallery[].img` with your own
real classroom photos (drop them in `/public` and use `/your-photo.jpg`).
Broken images auto-fall back to a coloured tile with an emoji, so nothing ever looks empty.

### Wiring the contact form
`src/components/Contact.jsx` currently shows a success message on submit.
Hook the `submit()` function to your backend / Google Apps Script / email service.
# Blooming-Birds
