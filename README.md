# Shreeyash Kayastha - Premium Data Analyst Portfolio

A sophisticated, modern portfolio website for Shreeyash Kayastha, a Computational Mathematics student and aspiring Data Analyst.

## 📋 Overview

This is a production-quality portfolio website built with:
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Pure CSS** - No frameworks, custom design system
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Sophisticated transitions

## ✨ Features

- **Premium Design** - Inspired by professional portfolio aesthetics
- **Responsive Layouts** - Desktop, tablet, and mobile
- **Interactive Project Cards** - Expandable case study modals
- **Form Validation** - Client-side validation with error handling
- **Smooth Navigation** - Sticky navbar with active section indicators
- **Accessibility** - Semantic HTML, keyboard navigation, focus states
- **Performance** - Optimized for fast load times
- **Animations** - Subtle, sophisticated micro-interactions

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v16 or higher) and **npm** installed:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

### Installation & Setup

1. **Navigate to project directory:**
   ```bash
   cd "d:\KU UNI\Projects\portfolio premium"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The dev server will automatically open the site at `http://localhost:3000`
   - If not, manually navigate to that URL

5. **Build for production:**
   ```bash
   npm run build
   ```

   The optimized build will be created in the `dist/` folder.

## 📁 Project Structure

```
portfolio-premium/
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main app component
│   ├── App.css             # App-level styles
│   ├── styles/
│   │   └── global.css      # Global styles & design system
│   ├── data/
│   │   └── portfolio.js    # Content data (projects, skills, education)
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Navbar.css
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Hero.css
│   │   ├── ProjectCard.jsx # Project card component
│   │   ├── ProjectCard.css
│   │   ├── ProjectCaseStudy.jsx # Modal case study
│   │   └── ProjectCaseStudy.css
│   └── components/sections/
│       ├── About.jsx       # About section
│       ├── About.css
│       ├── Projects.jsx    # Projects grid
│       ├── Projects.css
│       ├── Skills.jsx      # Skills section
│       ├── Skills.css
│       ├── Education.jsx   # Education section
│       ├── Education.css
│       ├── Contact.jsx     # Contact form
│       ├── Contact.css
│       ├── Footer.jsx      # Footer
│       └── Footer.css
└── .gitignore             # Git ignore rules
```

## ✏️ Customization Guide

### Edit Personal Information
All personal details and portfolio content are centralized in `src/data/portfolio.js`:

```javascript
// Update name, contact info, bio, etc.
export const personalInfo = {
  name: 'Shreeyash Kayastha',
  email: 'your.email@gmail.com',
  github: 'https://github.com/yourprofile',
  linkedin: 'https://linkedin.com/in/yourprofile',
  // ...
}

// Add, edit, or remove projects
export const projectsData = [
  {
    id: 1,
    title: 'Your Project Title',
    // ... project details
  }
]

// Update skills
export const skillsData = {
  programming: ['Python', 'SQL', 'R'],
  // ...
}
```

### Add Projects
1. Open `src/data/portfolio.js`
2. Add a new project object to `projectsData` array
3. Include all fields: title, description, technologies, caseStudy, etc.
4. Projects automatically appear on the website

### Update Resume
Place your CV/Resume PDF at `/public/assets/Shreeyash_Kayastha_CV.pdf` and update links in:
- `src/data/portfolio.js` - Update the `resume` path
- `src/components/sections/Education.jsx` - Update button links

### Customize Colors & Typography
Edit `src/styles/global.css` to modify:
- Color palette (--color-accent, --color-primary, etc.)
- Font sizes and families
- Spacing scale
- Shadows and animations

### Modify Animations
All animations are defined in `src/styles/global.css`:
- Adjust `--transition-fast`, `--transition-base`, `--transition-slow` durations
- Modify keyframe animations (fadeIn, slideUp, etc.)
- Update animation delays in component CSS files

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://netlify.com)**
3. **Drag and drop the `dist/` folder**

### Deploy to GitHub Pages

1. **Update `vite.config.js` to add base path** (if using subdirectory)
2. **Build the project:**
   ```bash
   npm run build
   ```
3. **Push `dist/` to GitHub Pages**

## 📧 Contact Form

The contact form includes:
- **Client-side validation** for name, email, and message
- **Error messages** for invalid inputs
- **Success feedback** when form is submitted

Currently, the form shows a success message but doesn't send emails. To enable email functionality:

**Option 1: Use Formspree**
1. Go to [formspree.io](https://formspree.io)
2. Create a new form with your email
3. Update the form `onSubmit` in `src/components/sections/Contact.jsx`

**Option 2: Use EmailJS**
1. Go to [emailjs.com](https://emailjs.com)
2. Set up a service and template
3. Update the form handling in Contact.jsx

**Option 3: Use a Backend Service**
Create a simple backend endpoint and send form data to it.

## 🎨 Design System

### Color Palette
- **Primary:** `#1e40af` (Deep Blue)
- **Background:** `#fafaf8` (Off-white)
- **Text Primary:** `#1a1a1a` (Near-black)
- **Text Secondary:** `#4a4a4a` (Dark Gray)
- **Border:** `#e8e8e8` (Light Gray)

### Typography
- **Headings:** System fonts (SF Pro Display, Segoe UI, Helvetica Neue)
- **Body:** System fonts with fallbacks
- **Monospace:** Monaco, Courier New (for code/metrics)

### Spacing Scale
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 3rem
- 3xl: 4rem
- etc.

## ♿ Accessibility

The site includes:
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on buttons
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Support for `prefers-reduced-motion`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## ⚡ Performance Tips

1. **Optimize images** before adding them
2. **Keep animations performant** - avoid heavy transforms
3. **Use CSS over JavaScript** for animations
4. **Minify assets** before deployment
5. **Test on real devices** for mobile experience

## 🐛 Troubleshooting

### Port already in use
If port 3000 is already in use, change it in `vite.config.js`:
```javascript
server: {
  port: 3001  // Change to available port
}
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear dist folder and rebuild
rm -r dist
npm run build
```

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)

## 📄 License

This portfolio is personal work. Feel free to use it as inspiration for your own portfolio, but please create original content.

---

**Questions or issues?** Check the troubleshooting section or refer to documentation links above.
