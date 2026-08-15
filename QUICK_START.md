# 🚀 QUICK START GUIDE

## Three Ways to Get Started

### 👀 Option 1: See It Instantly (30 seconds)
```
1. Open folder: d:\KU UNI\Projects\portfolio premium
2. Find file: preview.html
3. Double-click it
4. Done! See your portfolio in the browser
```

### 💻 Option 2: Full Interactive Version (10 minutes)
```bash
1. Install Node.js from https://nodejs.org/
2. Open Command Prompt
3. cd "d:\KU UNI\Projects\portfolio premium"
4. npm install
5. npm run dev
6. Open http://localhost:3000 in browser
```

### 📦 Option 3: Deploy Live (5 minutes)
```bash
1. Complete Option 2 above
2. npm run build
3. Go to https://vercel.com or https://netlify.com
4. Upload the dist/ folder
5. Done! Your site is live
```

---

## ✏️ Edit Your Information

### Most Important File
**File:** `src/data/portfolio.js`

Change these values:
```javascript
name: 'Shreeyash Kayastha',
email: 'your.email@gmail.com',
github: 'https://github.com/yourprofile',
linkedin: 'https://linkedin.com/in/yourprofile',
```

Then add/update your projects, skills, and education.

**That's it!** No coding required.

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `preview.html` | 🎨 See design instantly |
| `src/data/portfolio.js` | ✏️ Edit your content |
| `src/styles/global.css` | 🎨 Edit colors/fonts |
| `SETUP.md` | 📖 Installation guide |
| `README.md` | 📖 Full documentation |

---

## 🎨 Change Colors

**File:** `src/styles/global.css`

Find this section:
```css
:root {
  --color-accent: #1e40af;  /* Change this! */
  --color-bg: #fafaf8;
  --color-text-primary: #1a1a1a;
}
```

Popular color alternatives:
- Blue: `#1e40af` (current)
- Teal: `#0d9488`
- Purple: `#7c3aed`
- Green: `#059669`

---

## 📱 What You Get

✅ Responsive design (mobile, tablet, desktop)  
✅ Smooth animations  
✅ Interactive project modals  
✅ Contact form with validation  
✅ Professional design  
✅ Easy customization  
✅ Production-ready code  

---

## ❓ Common Questions

**Q: Do I need to code?**  
A: No! Edit `src/data/portfolio.js` - no coding required.

**Q: Will it work on mobile?**  
A: Yes! Fully responsive design for all devices.

**Q: How do I deploy?**  
A: Use Vercel (easiest) or Netlify. Instructions in README.md

**Q: Can I customize colors?**  
A: Yes! Edit `src/styles/global.css`

**Q: How do I add my projects?**  
A: Edit `src/data/portfolio.js` - add to `projectsData` array.

**Q: Will the contact form send emails?**  
A: Not automatically. See README.md for email setup options.

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "npm not found" | Install Node.js from nodejs.org |
| "Port 3000 in use" | Change port in vite.config.js |
| "Changes not showing" | Restart dev server (Ctrl+C, npm run dev) |
| "Build fails" | Delete node_modules, run npm install |
| "Site looks ugly" | Check preview.html - it should look good |

---

## 📋 Customization Checklist

- [ ] Read SETUP.md
- [ ] Open preview.html
- [ ] Edit src/data/portfolio.js
  - [ ] Update name, email, links
  - [ ] Edit project descriptions
  - [ ] Update skills
  - [ ] Add education info
- [ ] Add CV to public/assets/
- [ ] Optional: Change colors in global.css
- [ ] Test on mobile
- [ ] Deploy when ready

---

## 🔗 Useful Links

- **Node.js Download:** https://nodejs.org/
- **Vercel (Deploy):** https://vercel.com
- **Netlify (Deploy):** https://netlify.com
- **Formspree (Email):** https://formspree.io
- **EmailJS (Email):** https://emailjs.com

---

## 📞 Need More Help?

- **Installation?** → Read SETUP.md
- **Features?** → Read README.md
- **Structure?** → Read FILE_STRUCTURE.md
- **How to edit?** → This guide!

---

**You're ready to go! 🎉**

**Start with:** `preview.html` → `SETUP.md` → `src/data/portfolio.js`
