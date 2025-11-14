# 🤖 AI Usage Report  
## Streaming Dashboard – Frontend Developer Assignment  
**Developer:** Yashwanth (BOSS)  
**Tech:** Next.js 14, TypeScript, Tailwind CSS, TMDB API  

This report documents how AI tools were used during the development of the Streaming Dashboard project.  
The goal was to accelerate development while maintaining full understanding and control over the codebase.

---

## 📌 1. AI Tools Used

### **✔ ChatGPT (OpenAI – GPT-5.1)**
Used as the primary assistant to:
- Solve Next.js App Router issues  
- Debug TypeScript errors  
- Generate component skeletons  
- Fix Vercel deployment errors  
- Write README.md and AI_Report.md  
- Provide structured guidance for project setup  

### **✔ GitHub Copilot** (auto-completion only)
Used lightly inside VS Code for suggestions like:
- Creating small utility functions  
- Auto-completing Tailwind CSS classes  

---

## 📌 2. How AI Helped During Development

### **a) Project Setup & Configuration**
AI guided:
- Initialization of Next.js 14 with TypeScript  
- Tailwind CSS setup  
- Correct PostCSS configuration  
- Correct `next.config.js` (without deprecated keys)  
- Adding TMDB image domains using `remotePatterns`

**Example prompt:**  
> “Give me a clean next.config.js with images.remotePatterns for TMDB image URLs.”

---

### **b) TMDB API Integration**
AI helped design the reusable API helper module (`lib/tmdb.ts`) including:
- `fetchPopular`, `fetchNowPlaying`, `fetchTopRated`  
- `fetchMovieById`  
- `searchMovies`  
- Shared `tmdbFetch()` wrapper with error handling  

**Example prompt:**  
> “Write a TypeScript TMDB fetch helper with centralized error handling and support for server components.”

---

### **c) Component Generation**
AI generated initial versions of several components which were later modified by me:

- `Header.tsx` (search bar + mobile menu)
- `HeroBanner.tsx`
- `MovieRow.tsx`
- `MovieCard.tsx`
- `/movie/[id]/page.tsx` (dynamic detail page)
- `/search/page.tsx`

These components were then manually cleaned, tested, and adjusted.

---

### **d) Debugging & Error Fixing**
AI assisted in resolving major issues:

#### 1️⃣ **TypeScript PageProps errors**
Next.js App Router throws build errors when `params` or `searchParams` are Promise-like.

AI helped me fix them using:
```ts
export default async function Page(props: any) {
  const { params } = props;
  const { id } = (await params);
}

2️⃣ PostCSS / Tailwind plugin issue

Resolved missing @tailwindcss/postcss dependency.

3️⃣ Next.js image domain warnings

Solved by replacing images.domains with remotePatterns.

4️⃣ Vercel deployment errors

AI assisted with:

Correcting type errors

Fixing strict TS constraints

Ensuring server components build correctly

Ensuring TMDB key is injected via Vercel env vars

e) Documentation

AI generated:

README.md (project overview, setup guide, deployment steps)

AI_Report.md (this report)

Submission checklist

All documentation was reviewed and edited by me.

📌 3. What AI Did Not Do

To maintain integrity of the assignment:

AI did not design the architecture of the app

AI did not implement the final code without modification

AI did not commit or deploy the project

AI did not write business logic independently

Every AI suggestion was manually reviewed, corrected, and tested.

📌 4. Summary of AI’s Role

AI tools were used as:

A coding assistant

A debug helper

A documentation helper

A Next.js environment guide

Final implementation, testing, folder structure, build fixes, and deployment were done manually by me.

This approach allowed me to:

Understand all parts of the project fully

Implement clean and maintainable code

Deliver the assignment efficiently and professionally

📌 5. Final Links

GitHub Repository: https://github.com/yashwanth843/stream_dashboard
Live Deployment (Vercel): https://stream-dashboard-y5ou.vercel.app/