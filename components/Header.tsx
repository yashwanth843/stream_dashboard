// components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [showEmptyWarning, setShowEmptyWarning] = useState(false);
  const router = useRouter();

  // centralised submit used by form and button
  async function onSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) {
      // small UX: show a short warning
      setShowEmptyWarning(true);
      setTimeout(() => setShowEmptyWarning(false), 1500);
      return;
    }

    // keep the query exactly as typed (TMDB is case-insensitive)
    const encoded = encodeURIComponent(trimmed);

    // push to search page (client-side navigation)
    // await router.push returns immediately in App Router, so don't rely on it to await navigation
    router.push(`/search?query=${encoded}`);

    // optional: close mobile menu when searching
    setOpen(false);
    // do NOT clear input here; keep it so user sees what they searched
  }

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded flex items-center justify-center text-white font-bold">
              SD
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold">StreamDash</div>
              <div className="text-xs text-gray-300">Streaming Dashboard</div>
            </div>
          </Link>

          {/* DESKTOP SEARCH: visible from sm and up */}
          <form
            onSubmit={onSubmit}
            className="flex-1 max-w-2xl mx-4 hidden sm:flex items-center"
            role="search"
            aria-label="Search movies"
          >
            <label htmlFor="search-input" className="sr-only">Search movies</label>

            <input
              id="search-input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search movies, e.g. Inception, Avatar..."
              className="flex-1 min-w-0 rounded-l-md px-3 py-2 text-black bg-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
              type="search"
              // pressing Enter in an input inside form triggers onSubmit
            />

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-md text-white font-medium"
              aria-label="Search"
            >
              Search
            </button>
          </form>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-4 text-sm text-gray-200">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/#popular" className="hover:text-white">Popular</Link>
            </nav>

            <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">☰</button>
          </div>
        </div>

        {/* MOBILE search + menu */}
        {open && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-800">
            <form onSubmit={onSubmit} className="flex items-center gap-2 px-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search movies..."
                className="flex-1 rounded px-3 py-2 text-black bg-white placeholder-gray-500 outline-none"
                type="search"
              />
              <button type="submit" className="px-3 py-2 bg-indigo-600 rounded text-white">Search</button>
            </form>

            <div className="mt-3 flex flex-col gap-2 px-2">
              <Link href="/" className="py-1">Home</Link>
              <Link href="/#popular" className="py-1">Popular</Link>
            </div>
          </div>
        )}

        {/* tiny inline warning when user tries to submit empty query */}
        {showEmptyWarning && (
          <div className="text-center text-sm text-yellow-300 mt-2">Please enter a search term.</div>
        )}
      </div>
    </header>
  );
}
