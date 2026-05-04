# بوابة النظام الأكاديمي – جامعة تبوك
## Academic Portal – University of Tabuk

A React + Vite + Tailwind CSS project for the University of Tabuk academic portal.

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 3 |
| React Router DOM | 7 |
| Lucide React | latest |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Sticky header with logo & language toggle
│   │   └── Footer.jsx        # Footer with links, social media, copyright
│   └── ui/
│       ├── AnnouncementCard.jsx  # Individual announcement card
│       ├── ServiceCard.jsx       # Quick-service card (clickable)
│       └── ServiceModal.jsx      # Modal popup for each service
├── contexts/
│   └── LanguageContext.jsx   # Arabic/English i18n context + RTL/LTR switch
├── data/
│   └── portalData.js         # All static data (announcements, services, modal content)
├── pages/
│   └── Home.jsx              # Main home page (login + announcements + services)
├── App.jsx                   # Root: BrowserRouter + layout shell + routes
├── main.jsx                  # Entry point
└── index.css                 # Tailwind directives + global styles
```

---

## Adding a New Page

1. Create `src/pages/YourPage.jsx`
2. Open `src/App.jsx` and add your route:

```jsx
import YourPage from './pages/YourPage';
// ...
<Route path="/your-path" element={<YourPage />} />
```

The `Header` and `Footer` are rendered automatically for every route.

---

## Development

```bash
npm install
npm run dev     # Start dev server (http://localhost:5173)
npm run build   # Production build → dist/
npm run preview # Preview production build locally
```

---

## Features

- **RTL/LTR support** – Arabic (RTL) and English (LTR) via `LanguageContext`
- **Fully component-based** – Each UI element is its own JSX component
- **Data-driven** – All announcements and services live in `src/data/portalData.js`
- **React Router ready** – Add any number of pages without touching the layout
- **Tailwind with custom university theme** – `ut-blue`, `ut-green`, `ut-lightblue` colors
