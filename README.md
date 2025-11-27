# FlowAI Landing Page

A modern, responsive landing page built with Next.js and Tailwind CSS. This is a real-world project showcasing a clean, professional design for an AI automation platform.

## 🚀 Features

- ✨ Modern, beautiful UI design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js 14
- 🎨 Styled with Tailwind CSS
- 🎭 Smooth animations and transitions
- 🌟 Hero section with CTA buttons
- 💎 Features showcase with 6 key features
- 💬 Customer testimonials section
- 💰 Pricing section with 3 tiers
- 📧 Complete footer with links

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
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── Testimonials.tsx    # Testimonials section
│   ├── Pricing.tsx         # Pricing section
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🎨 Vercel v0 Usage

The following components were enhanced and refined using Vercel v0 for optimal UI/UX:

1. **Hero Section**: The gradient background design with floating animated elements was inspired by v0 patterns. The CTA button styling and badge component used v0 design suggestions for modern aesthetics.

2. **Features Section**: The card hover effects and icon placement were refined using v0 recommendations. The responsive grid layout and color scheme were optimized through v0's design system.

3. **Testimonials Section**: The testimonial card design with quote icons and star ratings was generated using v0's component library. The avatar integration and layout structure followed v0 best practices.

4. **Pricing Section**: The pricing card layouts, especially the "popular" badge and feature list styling, were created with v0 assistance. The gradient effects on the featured plan used v0 design patterns.

5. **Overall Responsiveness**: The mobile-first responsive breakpoints and animations were fine-tuned using v0's responsive design suggestions to ensure seamless experience across all devices.

6. **Color Palette**: The purple-to-blue gradient theme and color combinations were selected and tested using v0's design system for optimal contrast and visual appeal.

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

Made with ❤️ using Next.js and Tailwind CSS

