# Quick Start Guide

## 🚀 Your site has been deployed!

### GitHub Actions Workflow
A GitHub Actions workflow has been set up to automatically build and deploy your site to GitHub Pages.

### Next Steps:

1. **Enable GitHub Pages** (if not already enabled):
   - Go to: https://github.com/otiseduncan/soggydoggy/settings/pages
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Save the settings

2. **Wait for deployment**:
   - Go to: https://github.com/otiseduncan/soggydoggy/actions
   - Watch the "Deploy to GitHub Pages" workflow run
   - It will take 2-3 minutes to complete

3. **View your live site**:
   - Once deployed, visit: **https://otiseduncan.github.io/soggydoggy/**

## 🛠️ Local Development

To run the site locally:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Then open http://localhost:5173 in your browser.

## 📝 Making Changes

1. Edit files in the `src/` folder
2. Test locally with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your change description"
   git push origin main
   ```
4. GitHub Actions will automatically rebuild and deploy your site

## 🎨 Customization

- **Content**: Edit `src/SoggyDoggyWebsiteMockup.jsx`
- **Styles**: Modify Tailwind classes in the component or add custom CSS in `src/index.css`
- **Images**: Add/replace images in `public/images/`
- **Config**: Adjust settings in `vite.config.js` and `tailwind.config.js`

## 📦 Project Structure

```
soggydoggy/
├── .github/workflows/deploy.yml  # Auto-deployment config
├── public/images/                # Your images
├── src/
│   ├── SoggyDoggyWebsiteMockup.jsx  # Main website component
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Tailwind CSS
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
└── tailwind.config.js           # Tailwind configuration
```

## ❓ Troubleshooting

**Site not showing?**
- Ensure GitHub Pages is set to "GitHub Actions" mode
- Check the Actions tab for any failed builds
- Wait a few minutes after the first deployment

**Need help?**
- Check build logs: https://github.com/otiseduncan/soggydoggy/actions
- Review GitHub Pages settings: https://github.com/otiseduncan/soggydoggy/settings/pages

## 📞 Support

For questions about the Soggy Doggy business:
- **Phone**: (478) 452-2931
- **Email**: soggydoggypetgrooming1@gmail.com
