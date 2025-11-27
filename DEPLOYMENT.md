# Deployment Guide

## Quick Deployment to Vercel

### Method 1: Using Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI SaaS Landing Page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Method 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need to add environment variables:

1. Copy `.env.local.example` to `.env.local`
2. Fill in your values
3. In Vercel Dashboard, go to:
   - Project Settings → Environment Variables
   - Add your variables there

## Custom Domain

1. Go to your Vercel project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

## Continuous Deployment

Once deployed, every push to your main branch will automatically trigger a new deployment on Vercel.

## Build Command

Default build command (automatically detected):
```bash
npm run build
```

## Performance Tips

- Vercel automatically optimizes images with Next.js Image component
- Enable Analytics in Vercel Dashboard for insights
- Consider adding Vercel Speed Insights for performance monitoring

## Troubleshooting

### Build Fails
- Check your `package.json` dependencies
- Ensure all imports are correct
- Run `npm run build` locally first

### 404 Errors
- Ensure all files are committed to git
- Check that file names match imports (case-sensitive)

## Support

For deployment issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

