# Full-Stack Developer Portfolio 🚀👨‍💻

A modern, high-performance portfolio website architected to showcase full-stack engineering skills and real-world solutions.
Built with **React, TypeScript, and pure CSS**, focusing on clean code, component modularity, and a "Neon Dark" aesthetic without relying on heavy UI frameworks.

## 🌐 Overview

This portfolio serves as a digital business card and a showcase of my work in the **.NET ecosystem and React**.
The design features:

- **Glassmorphism & Neon Effects** for a modern, tech-forward look.
- **Responsive Layouts** that adapt seamlessly from mobile to desktop.
- **Component-Based Architecture** ensuring maintainability and scalability.

All styling is handled via **standard CSS variables** and scoped component styles, ensuring total control over the visual presentation.

## ✨ Features

- ⚛️ **React 18 & TypeScript** for type-safe, robust frontend logic.
- 🎨 **Pure CSS Styling** using native CSS variables (`:root`) for theming—no Tailwind or Bootstrap.
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
│   ├── assets/          # Static assets (profile images, project screenshots)
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx   # Glassmorphism navigation
│   │   ├── Hero.tsx     # Introduction & Tech Stack
│   │   ├── Projects.tsx # Dynamic project grid with hover effects
│   │   └── Contact.tsx  # Footer & Social links
│   ├── App.tsx          # Main application layout
│   └── index.css        # Global styles, reset, and theme variables
├── public/              # Public static files
└── index.html           # Entry point