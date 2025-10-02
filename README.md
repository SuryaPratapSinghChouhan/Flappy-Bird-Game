# Company Portfolio Website

A modern, responsive company portfolio website built with React and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎯 **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 📧 **Contact Form**: Functional contact form with validation
- 🎭 **Smooth Scrolling**: Smooth navigation between sections
- 🌟 **Interactive Elements**: Hover effects, animations, and interactive components

## Sections

- **Header**: Navigation with mobile menu
- **Hero**: Eye-catching landing section with company stats
- **About**: Company information and mission
- **Services**: Detailed service offerings
- **Portfolio**: Project showcase with filtering
- **Contact**: Contact form and business information
- **Footer**: Links, social media, and newsletter signup

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` to view the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom primary colors
  },
  secondary: {
    // Your custom secondary colors
  }
}
```

### Content
Update the content in each component file:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section content
- `src/components/Services.jsx` - Services and features
- `src/components/Portfolio.jsx` - Project portfolio
- `src/components/Contact.jsx` - Contact information

### Images
Replace placeholder images with your own:
- Add images to `public/` folder
- Update image paths in components

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and configure the build

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact us at hello@yourcompany.com