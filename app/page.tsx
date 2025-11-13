import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import { fetchPopular, fetchNowPlaying, fetchTopRated } from '@/lib/tmdb';

export default async function HomePage() {
  try {
    const [popular, nowPlaying, topRated] = await Promise.all([
      fetchPopular(),
      fetchNowPlaying(),
      fetchTopRated(),
    ]);

    const hero = popular?.results?.[0] ?? null;

    return (
      <main className="py-8">
        <HeroBanner movie={hero} />
        <MovieRow movies={popular?.results ?? []} categoryTitle="Popular" />
        <MovieRow movies={nowPlaying?.results ?? []} categoryTitle="Now Playing" />
        <MovieRow movies={topRated?.results ?? []} categoryTitle="Top Rated" />
      </main>
    );
  } catch (err: any) {
    console.error('HomePage error', err);
    return (
      <main className="py-8 text-center">
        <p className="text-red-600">Failed to load movies — check your TMDB_API_KEY in .env.local</p>
        <pre className="mt-4 whitespace-pre-wrap text-sm bg-gray-100 p-3 rounded">{String(err?.message ?? err)}</pre>
      </main>
    );
  }
}
