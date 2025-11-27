# TechHub Electronics - Landing Page

A modern, responsive e-commerce landing page built with Next.js and Tailwind CSS. Showcasing a clean, professional design for an electronics retail store.

## 🚀 Features

- ✨ Modern, e-commerce focused UI design
- 📱 Fully responsive across all devices (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎨 Styled with Tailwind CSS
- 🎭 Smooth animations and transitions
- 🛍️ Hero section showcasing premium electronics
- 💎 6 key features (delivery, warranty, support, packaging, payment, returns)
- 💬 Real customer testimonials with ratings
- 📦 Product categories (Bestsellers, Premium, Flagship)
- 📧 Complete footer with shopping & support links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd AutoBotWa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📄 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with electronics showcase
│   ├── Features.tsx        # Key features (delivery, warranty, etc.)
│   ├── Testimonials.tsx    # Customer reviews & ratings
│   ├── Pricing.tsx         # Product categories by price range
│   └── Footer.tsx          # Footer with shopping links
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🎨 Vercel v0 Usage

The following components were enhanced and refined using Vercel v0 for optimal e-commerce UI/UX:

1. **Hero Section**: The gradient background with floating animated elements creates an engaging first impression. The CTA buttons ("Shop Now" and "View Deals") were designed using v0's e-commerce patterns for maximum conversion.

2. **Features Section**: Designed 6 cards highlighting key shopping benefits (24hr delivery, authenticity guarantee, support, packaging, payments, returns). The icon placement and color-coding were optimized using v0's design system.

3. **Testimonials Section**: Customer review cards with star ratings and Indian customer names/locations for local market appeal. The quote icon positioning and avatar integration followed v0 best practices for social proof.

4. **Product Categories Section**: Three-tier product showcase (Bestsellers, Premium, Flagship) with rupee pricing. The "Popular" badge design and feature lists were created with v0 assistance to guide purchase decisions.

5. **Overall Responsiveness**: Mobile-first design ensures seamless shopping experience on all devices. Breakpoints and animations were fine-tuned using v0's responsive design suggestions.

6. **E-commerce Optimization**: Purple-to-blue gradient theme creates trust and excitement. Color combinations were tested using v0's design system for optimal conversion and visual appeal in electronics retail.

## 📝 Customization

### Changing Colors

Edit the Tailwind configuration in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Updating Content

- Edit section content in respective component files in `/components`
- Update metadata in `app/layout.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or feedback, please reach out through the contact section on the website.

## 📄 License

This project is licensed under the MIT License.

---

**TechHub Electronics** - Made with ❤️ for tech lovers | Built with Next.js & Tailwind CSS

