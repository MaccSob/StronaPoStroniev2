# Strona po Stronie

Business website / portfolio for **Strona po Stronie** — a Polish book editing, proofreading and typesetting service. The site showcases published books she has worked on, client reviews, an offer/pricing page, an about page, and a contact form.

**Live site:** https://stronapostronie.pl

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router, TypeScript)
- **[Tailwind CSS v4](https://tailwindcss.com/)** + **Sass/SCSS**
- **[Radix UI](https://www.radix-ui.com/)** / shadcn-style components (`class-variance-authority`, `tailwind-merge`)
- **[next-themes](https://github.com/pacocoursey/next-themes)** — light/dark mode toggle
- **[EmailJS](https://www.emailjs.com/)** — sending messages from the contact form (client-side, via SMTP configured in the EmailJS dashboard)
- **[react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent)** — cookie/GDPR consent banner
- **[Lucide](https://lucide.dev/)** / **react-icons** — icons

## 📄 Pages & Sections

- **Home** — landing page
- **About** (`/about`) — about Izabela / the business
- **Portfolio** (`/portfolio`) — book covers showcase, with a hover preview of sample interior pages
- **Products** (`/products`) — services / pricing
- **Contact** (`/contact`) — contact form (EmailJS)
- **Policy** (`/policy`) — privacy policy
- **Reviews** — client testimonials, sourced from `components/data.js`
- **Navbar / Footer** — shared layout components, including the theme toggle

## 📦 Installation

```bash
npm install
```

## 🧑‍💻 Local Development

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 🏗️ Production Build

```bash
npm run build
```

Unlike a typical static export, this app runs as a **standalone Node.js server** (see `server.js`), which is required for the shared hosting environment it's deployed to. After building, start it with:

```bash
npm start
```

or, in production, let the hosting panel manage the process (see Deployment below).

## 🌐 Deployment

This app is deployed on a shared Node.js hosting environment (Plesk / CloudLinux-based), **not** GitHub Pages or a static export. Key points:

- `output: "export"` is **not** used — the app needs a live Node process to run (`server.js` as the startup file).
- After uploading changed files, you must SSH into the server, activate the Node.js virtual environment, and run `npm run build` manually — the hosting panel does not rebuild automatically on file upload.
- Example build command on the server:
  ```bash
  source ~/nodevenv/stronapostronie.pl/24/bin/activate && cd ~/stronapostronie.pl && npm run build
  ```
- After a successful build, restart the app from the hosting panel for changes to go live.
- Environment variables (e.g. `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`) are set in the hosting panel's Node.js app settings, not committed to the repo.

## 🔍 Linting

```bash
npm run lint
```

or with auto-fix:

```bash
npm run lint:fix
```

## 📁 Project Structure

```
app/          # pages and layouts (App Router)
components/   # reusable components (Navbar, Footer, Review, ThemeToggle, data.js, etc.)
lib/          # helper functions
public/       # static assets (images, icons)
server.js     # custom Node.js server entrypoint (used by the hosting panel)
```

## ⚙️ Environment Variables

The contact form uses EmailJS, which requires these client-side (`NEXT_PUBLIC_`) variables:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Note: `NEXT_PUBLIC_` variables are inlined into the JavaScript bundle **at build time**, not read at runtime — if you change them, you must rebuild (`npm run build`) for the change to take effect.

## 🔗 Social

- [Instagram](https://instagram.com/izabela_stronapostronie)
- [Facebook](https://facebook.com/people/Strona-po-stronie/61555588812737/)
- [LinkedIn](https://linkedin.com/in/izabela-sobolewska-3407a3290)
