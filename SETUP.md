# 🚀 Portfolio Setup & Installation Guide

## ⚡ Quick Start (No Node.js Required)

If you want to preview the portfolio design **immediately**:

1. **Open `preview.html` in your browser**
   - Double-click `preview.html` in the project folder
   - Or right-click → "Open with" → Your browser
   - This shows the complete design and layout

This gives you an instant preview of:
- ✓ Hero section with navigation
- ✓ About section
- ✓ Projects grid layout
- ✓ Skills categorized
- ✓ Contact section
- ✓ Responsive design
- ✓ Smooth animations

---

## 📦 Full Setup (React + Vite Version)

The actual React version provides:
- **Interactive project modals** (click "View Case Study")
- **Form validation** (contact form)
- **Optimized performance** (Vite build)
- **Production-ready code** (proper structure)
- **Easy customization** (React components)

### Prerequisites

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Follow the installer steps
   - Restart your computer after installation

2. **Verify Installation**
   - Open Command Prompt (Win+R, type `cmd`)
   - Type: `node --version`
   - Type: `npm --version`
   - Both should show version numbers

### Installation Steps

1. **Open Command Prompt**
   - Press `Win + R`
   - Type: `cmd`
   - Press Enter

2. **Navigate to your project:**
   ```bash
   cd "d:\KU UNI\Projects\portfolio premium"
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   - This will take 1-3 minutes
   - You'll see many packages being installed

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   - The terminal will show: `Local: http://localhost:3000`
   - Open that URL in your browser
   - The site should load automatically

---

## 📁 Project Structure Explained

```
portfolio premium/
│
├── index.html                  # Main HTML file
├── package.json                # Project dependencies (React, Vite)
├── vite.config.js             # Build configuration
├── README.md                   # Full documentation
├── SETUP.md                    # This file
├── preview.html               # Static preview (no Node.js needed)
│
├── public/
│   └── assets/                # Your CV, images, etc.
│       └── README.md          # Where to put files
│
└── src/                       # Source code
    ├── main.jsx               # React entry point
    ├── App.jsx                # Main component
    ├── App.css                # App styles
    │
    ├── styles/
    │   └── global.css         # Design system, colors, fonts
    │
    ├── data/
    │   └── portfolio.js       # ALL YOUR CONTENT (easy to edit!)
    │
    ├── components/
    │   ├── Navbar.jsx/.css    # Navigation
    │   ├── Hero.jsx/.css      # Hero section
    │   ├── ProjectCard.jsx/.css      # Project cards
    │   └── ProjectCaseStudy.jsx/.css # Project modal
    │
    └── components/sections/
        ├── About.jsx/.css
        ├── Projects.jsx/.css
        ├── Skills.jsx/.css
        ├── Education.jsx/.css
        ├── Contact.jsx/.css
        └── Footer.jsx/.css
```

---

## ✏️ Easy Customization

### 1. **Update Your Information** (IMPORTANT!)

Open: `src/data/portfolio.js`

Change these values:

```javascript
export const personalInfo = {
  name: 'Shreeyash Kayastha',           // ← Your name
  email: 'your.email@gmail.com',        // ← Your email
  github: 'https://github.com/yourname', // ← Your GitHub
  linkedin: 'https://linkedin.com/in/yourname', // ← Your LinkedIn
  // ... more fields
}
```

### 2. **Add Projects**

In the same file, find `projectsData`:

```javascript
export const projectsData = [
  {
    id: 1,
    title: 'NEPSE Index Forecasting',  // ← Project name
    description: 'Time-series...',      // ← Description
    technologies: ['Python', 'XGBoost'], // ← Tech stack
    // ... more fields
  },
  // Add more projects here
]
```

### 3. **Update Skills**

In `src/data/portfolio.js`:

```javascript
export const skillsData = {
  programming: ['Python', 'SQL'],     // ← Your programming languages
  data: ['Pandas', 'NumPy'],          // ← Data science libraries
  visualization: ['Matplotlib'],      // ← Visualization tools
  // ... more categories
}
```

### 4. **Change Colors**

Open: `src/styles/global.css`

Find the `:root` section and change:

```css
:root {
  --color-accent: #1e40af;      /* ← Primary color (currently blue) */
  --color-bg: #fafaf8;          /* ← Background color */
  --color-text-primary: #1a1a1a; /* ← Text color */
  /* ... more colors */
}
```

### 5. **Add Your CV/Resume**

1. Save your PDF to: `public/assets/Shreeyash_Kayastha_CV.pdf`
2. Update the link in `src/data/portfolio.js`:
   ```javascript
   resume: '/assets/Shreeyash_Kayastha_CV.pdf'
   ```

---

## 🏗️ Building for Deployment

When you're ready to publish:

### Build the site:
```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts - your site will be live in minutes!

**Vercel URL Example:** `https://shreeyash-portfolio.vercel.app`

### Deploy to Netlify

1. Go to https://netlify.com
2. Sign up with GitHub
3. Drag and drop the `dist/` folder
4. Site goes live instantly!

### Deploy to GitHub Pages

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select branch and save
4. Site will be available at: `https://yourusername.github.io/portfolio`

---

## 🔧 Troubleshooting

### "npm: command not found"
- Node.js is not installed
- Solution: Download and install from https://nodejs.org/
- **Restart your computer after installing**

### "Port 3000 already in use"
- Another app is using port 3000
- Solution: Change port in `vite.config.js`:
  ```javascript
  server: {
    port: 3001  // Change to 3001 or another number
  }
  ```

### "Module not found" errors
- Dependencies not installed
- Solution:
  ```bash
  rm -r node_modules package-lock.json
  npm install
  ```

### Changes not showing in browser
- Vite might not be detecting changes
- Solution: Stop dev server (Ctrl+C) and restart:
  ```bash
  npm run dev
  ```

### Build fails
- Clear dist folder and try again:
  ```bash
  rm -r dist
  npm run build
  ```

---

## 💡 Tips & Best Practices

### Performance
- Optimize images before uploading (use TinyPNG, Squoosh)
- Use SVG for icons (scalable, small file size)
- Keep animations smooth (avoid heavy effects)

### SEO
- Update `<meta>` tags in `index.html`
- Use descriptive project titles and descriptions
- Include proper heading hierarchy

### Mobile Testing
- Test on your phone/tablet
- Use Chrome DevTools (F12) → Toggle device toolbar
- Ensure buttons are easy to tap (at least 44×44px)

### Accessibility
- Alt text for images
- Sufficient color contrast (already built in)
- Keyboard navigation support

---

## 📚 Learning Resources

If you want to customize further:

- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript:** https://javascript.info

---

## 🎯 Next Steps

1. **Immediate (Today):**
   - [ ] Open `preview.html` to see the design
   - [ ] Customize `src/data/portfolio.js` with your info
   - [ ] Update social links and email

2. **Short-term (This Week):**
   - [ ] Add your real projects with details
   - [ ] Upload your CV/Resume
   - [ ] Set up contact form (optional)
   - [ ] Test on mobile

3. **Deploy (When Ready):**
   - [ ] Run `npm run build`
   - [ ] Deploy to Vercel/Netlify/GitHub Pages
   - [ ] Share your portfolio URL!

---

## 📞 Need Help?

1. Check the troubleshooting section above
2. Read README.md for detailed documentation
3. Look at component files - they have comments explaining the code
4. Stack Overflow for general web development questions

---

## 🎉 You're All Set!

Your premium portfolio is ready to showcase your data analytics skills and computational mathematics background. Make it yours by:

✓ Personalizing the content
✓ Adding your best projects
✓ Keeping it updated
✓ Deploying it live

**Good luck with your applications! 🚀**
