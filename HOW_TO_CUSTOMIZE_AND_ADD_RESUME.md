# 📝 How to Add Your Resume & Edit Your Portfolio

This portfolio was designed so you can customize **everything** in one simple file and drop your resume in with zero coding hassle.

---

## 📄 1. How to Add Your Real Resume (2 Easy Steps)

### Step 1: Copy your Resume PDF into `public/`
1. Take your real resume PDF file (e.g. `My_Resume.pdf`).
2. Copy or save it into your portfolio's `public/` folder:
   ```
   e:\PORTFOLIO\public\resume.pdf
   ```
   *(Naming it `resume.pdf` works automatically with no code changes needed!)*

### Step 2: (Optional) Set Custom File Name
If you prefer a different file name, open `src/data/portfolioData.js` and change lines 22-23:
```javascript
resumeUrl: "/your-file-name.pdf",
resumeFileName: "Prathosh_Resume.pdf",
```

Whenever visitors click **"Download CV"** or **"Resume"** (on both Desktop and Mobile), your exact resume will download instantly with confetti feedback!

---

## ✏️ 2. How to Edit Your Content

All portfolio content is located in a single file:
👉 [`src/data/portfolioData.js`](file:///e:/PORTFOLIO/src/data/portfolioData.js)

You can edit:
- **`PERSONAL_INFO`**: Your name, role, bio, email, GitHub/LinkedIn links, location, and stats.
- **`PROJECTS`**: Add, remove, or edit your projects (title, description, tags, GitHub link, live link, thumbnail image).
- **`SKILL_CATEGORIES`**: Add, rename, or adjust skills and proficiency levels.
- **`EXPERIENCES`**: Add your work history, projects, dates, and achievements.

---

## 🚀 3. How to Push Updates to GitHub & Vercel

Whenever you replace your resume or edit `portfolioData.js`:

```bash
git add .
git commit -m "update: added my resume and updated profile"
git push origin main
```

**Vercel will automatically detect your push and deploy your changes live within seconds!**
