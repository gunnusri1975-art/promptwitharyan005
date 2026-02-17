# PromptWithAryan - Premium AI SaaS Platform

A full-stack, bilingual AI prompt library platform built with Next.js 14, Tailwind CSS, and Firebase.

## 🚀 Features

### Core Platform
- **Bilingual Interface**: Seamlessly switch between English and Hindi.
- **Modern UI**: Dark-themed, glassmorphism design with Framer Motion animations.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

### User Features
- **Authentication**: Secure Email/Password login/signup via Firebase.
- **Dashboard**: Personalized view of saved and submitted prompts.
- **Submit Prompts**: Share your own prompts with the community.
- **Save Prompts**: Bookmark your favorite prompts for easy access.

### Admin Features
- **Moderation Panel**: Review, approve, or reject user-submitted prompts.
- **Role-based Access**: Secure admin-only routes.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Firebase Auth, Cloud Firestore
- **State Management**: React Context (Auth)
- **Icons**: Lucide React
- **Animations**: Framer Motion, HTML Canvas

## 📦 Installation & Setup

### 1. Clone & Install
```bash
npm install
```

### 2. Configure Firebase (Crucial Step)

1.  Go to [Firebase Console](https://console.firebase.google.com/).
2.  Create a new project.
3.  Enable **Authentication** (Email/Password provider).
4.  Enable **Firestore Database** (Start in production mode).
5.  Go to Project Settings > General > Your apps > Web app.
6.  Copy the `firebaseConfig` keys.
7.  Rename `.env.local.example` to `.env.local` and paste your keys:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## 🎨 Hero Animation Setup (Optional)

The hero section features a scroll-triggered canvas animation. The site works without frames (showing a loading state or fallback), but you can add them for the full effect.

### Adding Frames
1.  Generate 60-150 animation frames (e.g., using Midjourney, Stable Diffusion, or After Effects).
2.  Name them: `frame_0.webp`, `frame_1.webp`, etc.
3.  Place them in: `public/frames/`
4.  Update `TOTAL_FRAMES` in `components/HeroCanvasAnimation.tsx`

**Suggested AI Prompt for Frames:**
> Abstract AI interface with floating translucent prompt cards, deep navy blue gradient background (#0F172A to #1E293B), glowing blue accents (#2563EB), floating light particles, glassmorphism UI, modern minimalist, premium tech aesthetic, dark mode, futuristic, clean composition

## 🛡️ How to Become an Admin

By default, all new users are "Users". To access the Admin Panel:

1.  Sign up for an account in the app.
2.  Go to your Firebase Console > Firestore > `users` collection.
3.  Find your user document (ID matches your User UID).
4.  Change the `role` field from `"user"` to `"admin"`.
5.  Refresh the app and navigate to `/admin`.
