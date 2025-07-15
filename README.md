# Geetek Global - Modern Technology Solutions Website

A high-performance, multi-page React website built with Vite, featuring cutting-edge animations, responsive design, and blazing-fast performance.

## 🚀 Tech Stack

### Core Framework
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Pre-built Tailwind components
- **@tailwindcss/typography** - Beautiful typography styles
- **Custom CSS Variables** - Brand colors and glass morphism effects

### Animation & Motion
- **Framer Motion** - Page transitions and micro-interactions
- **GSAP + ScrollTrigger** - Advanced scroll animations and parallax
- **React Spring** - Smooth number counters and physics-based animations
- **Swiper.js** - Touch-enabled sliders and carousels

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Zod integration for React Hook Form

### Data Management
- **TanStack Query (React Query)** - Server state management
- **React Helmet Async** - Dynamic meta tags and SEO

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

## 🎨 Design Features

- **Dark Neo Theme** - Futuristic dark design with neon accents
- **Glass Morphism** - Backdrop blur effects and translucent cards
- **Responsive Design** - Mobile-first approach with breakpoints
- **Custom Animations** - Smooth transitions and hover effects
- **Particle Background** - Dynamic animated background
- **Gradient Text** - Eye-catching gradient typography

## 📱 Pages & Sections

### Home Page Sections
1. **Hero** - Fullscreen slider with GSAP parallax
2. **About** - Animated counters and company information
3. **Services** - Interactive flip cards with hover effects
4. **Portfolio** - Filterable project gallery
5. **Testimonials** - Client testimonials carousel
6. **Tech Stack** - Horizontal scrolling technology showcase
7. **Blog Teaser** - Latest articles preview
8. **CTA Banner** - Call-to-action with marquee animation
9. **Contact Form** - Multi-step form with validation

### Additional Pages
- **About** - Detailed company information
- **Services** - Comprehensive service descriptions
- **Portfolio** - Full project showcase
- **Pricing** - Service packages and pricing
- **Blog** - Articles and insights
- **Contact** - Contact form and information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd geetek-global
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── LoadingSpinner.tsx
│   └── ParticleBackground.tsx
├── features/            # Feature-specific components
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Portfolio/
│   ├── Testimonials/
│   ├── TechStack/
│   ├── Blog/
│   ├── CTA/
│   └── Contact/
├── pages/               # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   ├── Blog.tsx
│   └── Contact.tsx
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Global styles
│   └── index.css
├── App.tsx              # Main app component
└── main.tsx             # App entry point
```

## 🎯 Performance Optimizations

- **Code Splitting** - Lazy loading of routes and components
- **Image Optimization** - Responsive images with lazy loading
- **Bundle Optimization** - Tree shaking and minification
- **Caching** - React Query for efficient data caching
- **SEO Optimization** - Dynamic meta tags and structured data

## 🌟 Key Features

### Animations
- Smooth page transitions with Framer Motion
- GSAP-powered parallax scrolling
- Hover effects and micro-interactions
- Staggered element reveals
- Physics-based spring animations

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Performance
- Lighthouse score 95+
- Fast loading times
- Optimized bundle size
- Efficient re-renders

### Accessibility
- WCAG-AA compliant
- Keyboard navigation
- Screen reader support
- High contrast ratios

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#00B0FF',
  accent: '#F7FF00',
  navy: '#002E55'
}
```

### Fonts
Modify font imports in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap');
```

### Content
Update content in respective component files under `src/features/` and `src/pages/`.

## 📧 Contact Form Integration

The contact form is ready for integration with:
- EmailJS
- Netlify Forms
- Custom API endpoints

Update the form submission logic in `src/features/Contact/ContactForm.tsx`.

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure server for SPA routing

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions, please contact:
- Email: info@geetekglobal.com
- Website: https://geetekglobal.com

---

Built with ❤️ by the Geetek Global team