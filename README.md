# Portfolio Website - Bipin Neupane

A modern, interactive portfolio website showcasing DevOps expertise with smooth animations, interactive skill demonstrations, and a professional timeline of experience.

## 🎨 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphic elements
- **Interactive Elements**: 
  - Animated skill cards with hover effects
  - Smooth transitions and parallax effects
  - Interactive terminal window
  - Progress bars for proficiency levels
  - Animated timeline for experience
  
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

- **Performance Optimized**: Fast load times and smooth animations

- **Accessibility**: Keyboard navigation and proper semantic HTML

## 📁 File Structure

```
├── index.html       # Main HTML file with all sections
├── styles.css       # Complete CSS with animations and responsive design
├── script.js        # Interactive JavaScript functionality
└── README.md        # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `bipinneupane` (or your desired username)
3. Do NOT initialize with README, .gitignore, or license

### Step 2: Upload Files to Repository

**Using Git (Recommended):**

```bash
# Navigate to your project directory
cd /path/to/portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website commit"

# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/yourusername/bipinneupane.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"
5. Your site will be published at: `https://yourusername.github.io/bipinneupane/`

### Step 4: Custom Domain (Optional)

If you want to use your custom domain `bipinneupane.com.np`:

1. In repository **Settings** → **Pages**
2. Under "Custom domain", enter: `bipinneupane.com.np`
3. Update your domain DNS settings to point to GitHub Pages:
   - Add A records pointing to GitHub's IP addresses, OR
   - Add CNAME record pointing to `yourusername.github.io`
4. Wait for DNS propagation (can take up to 48 hours)

## 🎯 Sections

### 1. **Hero Section**
- Interactive terminal window with typing effect
- Call-to-action buttons
- Animated background elements

### 2. **About Section**
- Professional summary
- Key statistics (servers managed, years of experience, technologies)
- Contact information card

### 3. **Skills Section**
- 8 skill categories with 15+ technologies
- Hover interactive skill cards with emojis
- Proficiency level bar chart showing expertise percentages

### 4. **Experience Section**
- Timeline view of 3 positions
- Detailed achievements for each role
- Animated timeline dots

### 5. **Achievements Section**
- 6 key achievement cards
- Security, infrastructure, automation highlights
- Hover effects and animations

### 6. **Contact Section**
- 4 ways to connect (Email, Phone, LinkedIn, GitHub)
- Interactive contact cards
- Direct links for quick contact

## 🔧 Customization

### Update Contact Information

Edit `index.html` and update:

```html
<!-- Email -->
<a href="mailto:youremail@gmail.com">

<!-- Phone -->
<a href="tel:+977-9867297187">

<!-- Social Links -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://github.com/yourusername" target="_blank">
```

### Modify Colors

Edit `styles.css` variables at the top:

```css
:root {
    --primary-color: #00d4ff;      /* Cyan accent */
    --secondary-color: #6366f1;    /* Indigo */
    --tertiary-color: #8b5cf6;     /* Purple */
    --dark-bg: #0f172a;            /* Dark background */
    --text-primary: #f1f5f9;       /* Light text */
}
```

### Add More Skills

In the Skills section, add new skill categories:

```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-items">
        <div class="skill-item" data-skill="Tool Name">
            <div class="skill-icon">🔧</div>
            <span>Tool Name</span>
        </div>
    </div>
</div>
```

### Update Experience

Modify the timeline items in the Experience section:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="exp-header">
            <h3>Your Position</h3>
            <span class="exp-date">Start – End</span>
        </div>
        <p class="company">Company Name</p>
        <ul class="exp-highlights">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
    </div>
</div>
```

## 🎬 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Images**: Keep hero visual lightweight
2. **Animations**: Disabled on reduced motion preferences
3. **Fonts**: Uses Google Fonts (Poppins, Space Mono)
3. **CSS**: Minify in production for better performance

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- 768px (tablets)
- 480px (mobile)

All interactive elements are touch-friendly with appropriate spacing.

## 🔐 Security Notes

- No sensitive information should be stored in code
- All external links use `target="_blank"` with security considerations
- Form submissions should be handled through secure services

## 📊 SEO Optimization

Update these meta tags in `index.html`:

```html
<meta name="description" content="Bipin Neupane - DevOps Engineer">
<meta name="keywords" content="DevOps, Docker, Kubernetes, AWS, Infrastructure">
<meta property="og:title" content="Bipin Neupane - DevOps Engineer">
<meta property="og:description" content="Professional portfolio showcasing DevOps expertise">
```

## 📝 License

This portfolio template is free to use and modify for personal or professional use.

## 💡 Tips for Best Results

1. **Keep it Updated**: Update experience and skills regularly
2. **Add Project Links**: Consider adding links to GitHub projects or case studies
3. **Professional Photo**: Consider adding a professional headshot in the about section
4. **Regular Backups**: Backup your repository regularly
5. **Testing**: Test on multiple devices and browsers before deployment

## 🚀 Next Steps

1. Replace contact information with your own
2. Update social media links
3. Add your GitHub/LinkedIn profiles
4. Deploy to GitHub Pages
5. Set up custom domain
6. Share with recruiters and network!

## 📧 Support

For issues or questions about this template, feel free to reach out through the contact section.

---

**Last Updated**: June 2024
**Built with**: HTML5, CSS3, JavaScript (Vanilla)
