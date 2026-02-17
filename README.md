# 🌙 DRMA — Designing Resourceful Modest Attire

### *Modesty Redefined. Crafted with Conscience.*

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg?style=for-the-badge)](https://drma-v1-0.vercel.app)
[![Vercel Deployment](https://img.shields.io/badge/deployed-vercel-black.svg?style=for-the-badge)](https://vercel.com)
[![Next.js 14](https://img.shields.io/badge/Next.js-14-blue.svg?style=for-the-badge)](https://nextjs.org/)

---

## 📋 The Mission
DRMA is an affordable e-commerce marketplace for Muslim women seeking modest clothing without compromising on ethics. Our platform is built on **Radical Transparency**, focusing on:
- **Zero Child Labor:** 100% verified through rigorous physical inspection.
- **Fair Wages:** Supporting artisans with 2.5x the local minimum wage.
- **Artisan Focus:** Empowering woman-led cooperatives across Morocco, Egypt, and beyond.

---

## ✨ Features

### 🎨 Editorial "Tier 3" Design
No templates. No generic SaaS bento-boxes. DRMA features a rigid, research-backed design system:
- **Typography:** Calligraphic headings (**Aref Ruqaa**), authoritative body text (**Spectral**), and technical metadata (**Azeret Mono**).
- **Color Palette:** A curated earthy selection of Terracotta, Olive, Sand, and Charcoal.
- **Tactile UI:** Micro-animations and high-contrast interaction states that mimic the grace of modest fashion.

### 🖼️ High-Speed AI Visual Suite
Custom-built **Gemini CLI Skill** (`together-flux`) integrated with **Together AI (FLUX.1-schnell)**:
- **Strict Modesty:** All models wear full hijab; only faces and hands are visible.
- **Privacy First:** Models wear blacked-out luxury sun shades to obscure eyes.
- **Diversity:** High-fashion imagery representing Middle Eastern, African, South Asian, and East Asian ethnicities.
- **Precision Sizing:** Images generated to match the exact aspect ratios of site containers.

### ⚙️ MVP Commerce Engine
- **Shopping Bag:** Local storage persistent cart with dynamic item counting.
- **Checkout Flow:** Simulated order processing with PayPal gateway.
- **Live Rate Proxies:** Simulated **UPS shipping rates** and **TaxJar Texas sales tax** calculations.
- **Transparency Journey:** A step-by-step "Fiber to Stitch" map on every product page.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State:** React Context API
- **Fonts:** Google Fonts via `next/font`
- **AI Imagery:** [Together AI](https://www.together.ai/) + FLUX.1 [schnell]

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) (for automated development)
- Together AI API Key

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/akhiyusuf/drma-v1-0.git
   cd drma-v1-0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   export TOGETHER_API_KEY="your_key_here"
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Generate Assets:**
   To regenerate the AI visuals using our custom skill:
   ```bash
   bash generate_assets_together.sh
   ```

---

## 🚫 The Anti-Template Manifesto
DRMA is built to avoid "vibe coded" shortcuts. We strictly follow these rules:
- **No Generic Gradients:** Every color is chosen from our rigid earthy palette.
- **Small Components:** Decomposed UI logic into reusable elements like `<EthicalMetric />`.
- **Semantic Naming:** Variable names like `artisanOrigin` and `auditDate` ensure clarity over generic tags.

---

## 🤝 The Team
Managed by the "Powerpuff Girls" management team — a dedicated 3-person crew handling content, products, and global orders.

---

*DRMA V1.0 - Designing Resourceful Modest Attire. 2026 Official MVP Phase.*
