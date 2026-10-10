# Vineet Jain — The Journey

A cinematic, responsive portfolio experience for Vineet Jain, built with React, TypeScript, and Vite.

## What is included

- The supplied Vineet profile image is used as a restrained atmospheric background across the full single-page experience.
- Cinematic entry overlay inspired by streaming-series pacing, followed by a portfolio layout with smooth section navigation.
- Factual portfolio sections for education, projects, progress timeline, skills, linked certifications, downloadable resume, and contact.
- Dimensional project cards and a project detail modal.
- Reduced-motion support, readable contrast overlays, and lightweight CSS motion.
- Responsive desktop/mobile layout with keyboard-visible focus states.
- `public/manus-routes.json` for Webdev route discovery.
- Vercel-ready Vite build with no backend, secret, paid API, or paid asset dependency.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (the configured preview runtime uses port 3000).

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Vercel for free

1. Push this folder to a GitHub repository you control.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy. No environment variables are required.

This project has not been claimed as live until a deployment URL is actually created and checked.

## Placeholders to replace

- `public/resume.pdf` contains the supplied `Vineet_Jain_CV.pdf` and is available through the Download resume button.
- `Smart Study Manager Web` and `Smart Campus Management` point to verified public repositories. `Smart Study Manager` points to Vineet’s verified GitHub profile because the same-named public repository currently describes a different Python/Tkinter implementation than the supplied HTML/CSS/JavaScript project brief.
- Five certification/activity entries now link to the supplied LinkedIn sources. They use only titles, issuers, and dates visible in the accessible public posts/documents.
- Internship progress now includes verified CodeAlpha selection details and the SAM AI Technologies remote offer-letter details; missing dates or terms remain explicitly marked as unavailable.
- `app.config.ts` contains a durable uploaded VJ mark URL used for project metadata.

## Content source

Personal details and project claims are based on the supplied portfolio brief. The design takes visual cues from `https://github.com/Sushmitadasari/Portfolio_series` without reusing its identity, personal information, or branding.
