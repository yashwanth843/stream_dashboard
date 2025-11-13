import Image from 'next/image';
import { imageUrl } from '@/lib/image';

import { Movie } from '@/types/movie';

export default function HeroBanner({ movie }: { movie: Movie | null }) {
  if (!movie) {
    return (
      <section className="relative h-64 md:h-80 rounded overflow-hidden my-6 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="text-gray-700">No hero movie available</div>
      </section>
    );
  }

  const backdrop = movie.backdrop_path ?? movie.poster_path ?? '';

  return (
    <section className="relative h-72 md:h-96 rounded overflow-hidden my-6">
      <Image
        src={`https://image.tmdb.org/t/p/original${backdrop}`}
        alt={movie.title ?? 'hero'}
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 text-white max-w-xl">
        <h2 className="text-2xl md:text-4xl font-bold">{movie.title}</h2>
        <p className="mt-2 hidden md:block line-clamp-3">{movie.overview}</p>
      </div>
    </section>
  );
}
