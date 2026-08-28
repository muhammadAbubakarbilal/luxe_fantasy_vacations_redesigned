# Luxe Fantasy Vacations - Vercel Deployment Guide

This project is a high-performance **Next.js 15 (App Router)** application optimized for **Vercel**.

## 🚀 Instant Deployment to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Import your project repository.
4. Vercel will automatically detect **Next.js**.
5. (Optional) Set environment variables if needed (e.g., `GEMINI_API_KEY`).
6. Click **Deploy**.

---

### Option 2: Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command from the project root:
   ```bash
   vercel
   ```
3. Follow the prompts to complete deployment.
4. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 🛠️ Local Development & Build Verification

- **Development Server**: `npm run dev`
- **Production Build**: `npm run build`
- **Start Production Server**: `npm start`
- **Linting**: `npm run lint`

---

## 📋 Environment Configuration

Copy `.env.example` to `.env.local` for local development:
```env
GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
```
