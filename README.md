# 🎬 Streaming Dashboard Clone (Next.js 14 + TypeScript + Tailwind)

A simplified streaming dashboard (similar to Netflix/Hulu) built as part of a Frontend Developer technical assignment.  
The project uses **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and the **TMDB API** to display movie categories, details, and search results.

---

## 🚀 Live Demo

🔗 **Vercel Deployment:** https://stream-dashboard-y5ou.vercel.app/  
🔗 **GitHub Repository:** https://github.com/yashwanth843/stream_dashboard  



---

## 📌 Features

### 🏠 Home Page
- Server-side data fetching using TMDB API.
- Hero Banner showing the top movie.
- Scrollable movie rows for:
  - Popular Movies  
  - Now Playing  
  - Top Rated  

### 🔍 Search Page
- Fully functional search bar in the header.
- Case-insensitive search.
- Displays movie results with poster, name, release date.
- Click → navigates to movie details page.

### 🎥 Movie Detail Page
- Dynamic route: `/movie/[id]`
- Server-side rendering
- Shows:
  - Poster  
  - Title  
  - Release date  
  - Description  
  - Rating  
  - Genres  

### ⚙️ Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- TMDB API
- Vercel Deployment

---

## 📂 Project Structure

my-streaming-dashboard/
├─ app/
│ ├─ page.tsx
│ ├─ layout.tsx
│ ├─ search/
│ │ └─ page.tsx
│ ├─ movie/
│ │ └─ [id]/page.tsx
│ └─ components/
│ ├─ Header.tsx
│ ├─ HeroBanner.tsx
│ ├─ MovieRow.tsx
│ └─ MovieCard.tsx
├─ lib/
│ ├─ tmdb.ts
│ └─ image.ts
├─ types/
│ └─ movie.ts
├─ public/
├─ next.config.js
├─ tailwind.config.js
├─ package.json
└─ AI_Report.md


---

## 🔧 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yashwanth843/stream_dashboard
cd stream_dashboard


2️⃣ Install dependencies
npm install



3️⃣ Run locally
npm run dev

4️⃣ Build for production
npm run build
npm start

🌐 Deployment (Vercel)

Push project to GitHub

Import into Vercel

Add Environment Variable:

TMDB_API_KEY


Deploy

📝 Assignment Completion Status

 Home page with server-side rendered movie rows

 Hero Banner

 Dynamic route /movie/[id]

 Fully working search page

 Environment variables (API key)

 Deployed on Vercel

 AI_Report.md included