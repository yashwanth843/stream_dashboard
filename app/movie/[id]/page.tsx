import Image from 'next/image';
import { fetchMovieById } from '@/lib/tmdb';
import { imageUrl } from '@/lib/image';

export default async function MoviePage(props: any) {
  try {
    
    const { params } = props;
    const { id } = (await params) as { id: string };

    if (!id) return <div className="py-8">Missing movie id</div>;

    const movie = await fetchMovieById(id);
    if (!movie) return <div className="py-8">Movie not found</div>;

    const poster = imageUrl(movie.poster_path, 'w500');

    return (
      <div className="py-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            {poster ? (
              <div className="rounded overflow-hidden">
                <Image
                  src={poster}
                  alt={movie.title ?? 'poster'}
                  width={420}
                  height={630}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ) : null}
          </div>

          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <p className="text-sm text-gray-600 mt-1">{movie.release_date}</p>
            <p className="mt-4 text-gray-800">{movie.overview}</p>

            <div className="mt-4 text-sm">
              <strong>Rating:</strong> {movie.vote_average ?? 'N/A'}
            </div>

            <div className="mt-2 text-sm">
              <strong>Genres:</strong> {(movie.genres ?? []).map((g: any) => g.name).join(', ') || 'N/A'}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err: any) {
    console.error('MoviePage error', err);
    return (
      <div className="py-8">
        <h2 className="text-red-600 font-bold">Failed to load movie details.</h2>
        <pre className="mt-4 whitespace-pre-wrap text-sm bg-gray-100 p-3 rounded">
          {String(err?.message ?? err)}
        </pre>
      </div>
    );
  }
}
