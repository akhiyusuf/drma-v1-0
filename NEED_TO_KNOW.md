# DRMA Website - Project Overview (Need to Know)

## 📋 Business & Project Overview
- **Project Name:** DRMA (Designing Resourceful Modest Attire)
- **Concept:** An affordable e-commerce marketplace for Muslim women seeking modest clothing.
- **Mission:** Raise awareness about child labor in fashion, educate on ethical production, and support artisans.
- **Target Audience:** Muslim women looking for affordable, ethical, and modest attire.
- **Scale:** Tier 3 Design marketplace featuring ~50 products initially.
- **Team Size:** 3 managers for content, products, and orders (The "Powerpuff Girls").

## 🛠️ Technical & Feature Requirements
- **Platform:** Traditional CMS (WordPress recommended).
- **Payment Gateway:** PayPal.
- **Shipping:** UPS (Live shipping rate calculation).
- **Taxes:** Texas and potentially other state taxes (TaxJar integration).
- **Product Details:**
  - Complex variations (Size, Color, Material) affecting price/inventory.
  - Initial 50 product details are prepared.
- **User Accounts:** Customer accounts required for order history and addresses.
- **Marketplace Structure:** Support for Vendors vs. Customers.

## ✨ Mission-Critical Features
- **Ethical Mission Section:** Dedicated space for articles, videos, and infographics on child labor and ethical production.
- **Brand Comparison:** Comparison with competitors (Zara, H&M, Shein) focusing on ethical scoring or external watchdog reports.
- **Product Tagging:** "Ethically Sourced" and "Artisan Made" filters/tags.
- **Required Data:** Production videos, factory info, physical inspection details, social media links.

## 🎨 Design & Content
- **Branding:** Needs an updated logo.
- **Pages:** Standard pages (About, FAQ, Privacy) + 3 complex custom pages.

## 🚫 Anti-Template & "Vibe Code" Manifesto
To ensure a unique "Tier 3" design and avoid the "vibe coded" giveaways found in quick-turnaround projects, we strictly adhere to these research-backed principles:

### 1. Aesthetic Red Flags to Avoid
- **The "SaaS" Look:** No generic gradients, glassmorphism, or "bento box" layouts. These scream "AI-generated prototype."
- **Generic Componentry:** No "vanilla" Tailwind/Bootstrap components. Every button, input, and card must have custom padding, borders, and interaction states.
- **Stock Overload:** Avoid over-used Unsplash/Pexels imagery. Prefer textured, editorial-style photography that focuses on "The Artisan."
- **Inconsistent Design Language:** We maintain a single, rigid design system (Earthy Palette, Editorial Typography) to avoid the "Frankenstein" look of mixed templates.

### 2. Technical Red Flags to Avoid
- **Monolithic Files:** We decompose the UI into small, reusable components (e.g., `<EthicalMetric />`, `<OriginBadge />`) rather than large, single-file pages.
- **"Vibe" Naming:** No generic variable names (e.g., `data`, `item1`). We use semantic, descriptive naming (e.g., `artisanOrigin`, `childLaborAuditDate`).
- **Bloated Dependencies:** We only use necessary libraries. No installing massive UI frameworks just for one component.
- **Accessibility Neglect:** Every custom element must be keyboard-navigable and screen-reader friendly (proper ARIA labels), a common omission in "vibe coded" projects.
- **Dry Principle:** Absolutely no copy-pasting code blocks. If a logic pattern repeats, it becomes a utility function or a hook.

## 💎 Must-Haves for Premium Ethical/Modest Marketplace
*Based on industry research for high-end modest and ethical brands:*

### 1. Visual & Content Must-Haves
- **Texture Focus:** Close-up shots showing the weave of the linen, the sheen of the silk, and the hand-stitched details. Customers cannot touch the fabric, so they must "feel" it through the screen.
- **Artisan Spotlights:** Every product should have a "Who Made This?" section with a small bio or cooperative name, connecting the buyer to the maker.
- **Transparency Map:** A visual representation of the supply chain (e.g., Fiber Origin -> Weaving Hub -> Dyeing Center -> Final Stitching).
- **Modesty Score/Guide:** Clear indications of opacity (e.g., "100% Opaque", "Requires Under-layer") and fit (e.g., "Loose Fit", "Structured Flow").
- **Care Rituals:** Instead of generic "wash cold," provide "Artisan Care" instructions to prolong the life of hand-made garments.

### 2. Design Interaction Must-Haves
- **Micro-animations:** Subtle, slow-fade transitions that mimic the graceful movement of an abaya or hijab. No "pop-up" or high-velocity UI.
- **Tactile Hover States:** Hovering over a product image should feel tactile (e.g., subtle grayscale-to-color shift or a soft zoom that highlights fabric grain).
- **Minimalist Data Viz:** Ethical metrics (wage multipliers, carbon offsets) should be presented as clean, understated infographics, not loud "sales badges."

## 🕒 Recent Status & Updates
- **Jan 17, 2026:** Audio calls held with client.
- **Jan 25, 2026:** Live MVP was promised for review.
- **Jan 26, 2026:** Discovery of bugs; MVP link delivery delayed until fixed.
