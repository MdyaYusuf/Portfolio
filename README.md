# Full-Stack Developer Portfolio 🚀👨‍💻

A modern, high-performance portfolio website architected to showcase full-stack engineering skills and real-world solutions.
Built with **React, TypeScript, and pure CSS**, focusing on clean code, component modularity, and a "Neon Dark" aesthetic without relying on heavy UI frameworks.

## 🌐 Overview

This portfolio serves as a digital business card and a showcase of my work.
The design features:

- **Glassmorphism & Neon Effects** for a modern, tech-forward look.
- **Responsive Layouts** that adapt seamlessly from mobile to desktop.
- **Component-Based Architecture** ensuring maintainability and scalability.

All styling is handled via **standard CSS variables** and scoped component styles, ensuring total control over the visual presentation.

## ✨ Features

- ⚛️ **React 18 & TypeScript** for type-safe, robust frontend logic.
- 🎨 **Pure CSS Styling** using native CSS variables (`:root`) for theming.
- 📱 **Fully Responsive** grid and flexbox layouts.
- ⌨️ **Typewriter Animation** and subtle hover effects for an engaging UX.
- 🖼️ **Dynamic Project Cards** showcasing key works like *Altyapi.net* and *Antrenoryum*.
- 🔧 **Vite** for lightning-fast development and optimized production builds.

## 🛠 Tech Stack

- **Core:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 (CSS Variables, Flexbox, Grid)
- **Icons:** Material UI Icons

## 📂 Project Structure

```text
Portfolio/
├── src/
│   ├── assets/                 # Static assets (images, icons, screenshots)
│   ├── components/             # Reusable UI sections/components
│   │   ├── Navbar.tsx          # Navigation (desktop/mobile)
│   │   ├── Navbar.css
│   │   ├── Hero.tsx            # Landing section (headline + tech badges)
│   │   ├── Hero.css
│   │   ├── About.tsx           # About section (bio + skills/stack)
│   │   ├── About.css
│   │   ├── Journey.tsx         # Experience/Education timeline (career journey)
│   │   ├── Journey.css
│   │   ├── Projects.tsx        # Projects grid/cards
│   │   ├── Projects.css
│   │   ├── Contact.tsx         # Contact + social links/footer
│   │   ├── Contact.css
│   ├── App.tsx                 # Page composition (section order)
│   ├── App.css                 # App-level styling (layout/spacings)
│   ├── main.tsx                # React entry (mounts App)
│   └── index.css               # Global styles, resets, theme variables
├── public/                     # Public static files
├── index.html                  # Vite HTML entry
├── package.json                # Dependencies & scripts
├── package-lock.json           # Lockfile
├── eslint.config.js            # ESLint configuration
├── tsconfig.json               # Base TS config
├── tsconfig.app.json           # App TS config
├── tsconfig.node.json          # Node/Vite TS config
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation