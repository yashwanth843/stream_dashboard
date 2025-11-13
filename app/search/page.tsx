import { searchMovies } from '@/lib/tmdb';
import Image from 'next/image';
import Link from 'next/link';
import { imageUrl } from '@/lib/image';

type SearchProps = {
  
  searchParams?: Promise<{ query?: string }> | { query?: string };
};

export default async function SearchPage({ searchParams }: SearchProps) {
  
  const { query: rawQuery } = (await (searchParams ?? {})) as { query?: string };
  const query = (rawQuery ?? '').trim();

  if (!query) {
    return (
      <main className="py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Search</h2>
        <p className="mt-3 text-gray-600">Type something in the header search box and press Search.</p>
      </main>
    );
  }

  try {
    const data = await searchMovies(query);
    const results = data?.results ?? [];

    return (
      <main className="py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Search results for “{query}”</h2>
        <p className="text-sm text-gray-600 mt-1">{results.length} results</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {results.map((m: any) => (
            <Link key={m.id} href={`/movie/${m.id}`} className="group block">
              <div className="rounded overflow-hidden shadow-md">
                <Image
                  src={imageUrl(m.poster_path, 'w342')}
                  alt={m.title ?? 'poster'}
                  width={200}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="mt-2 text-sm font-medium leading-tight group-hover:text-indigo-600">{m.title}</div>
              <div className="text-xs text-gray-500">{m.release_date}</div>
            </Link>
          ))}
        </div>
      </main>
    );
  } catch (err: any) {
    console.error('SearchPage error', err);
    return (
      <main className="py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Search</h2>
        <p className="mt-3 text-red-600">Failed to search — {String(err?.message ?? err)}</p>
      </main>
    );
  }
}
