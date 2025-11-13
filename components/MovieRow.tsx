'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';
import { imageUrl } from '@/lib/image';

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
  return (
    <section className="my-6">
      <h3 className="text-lg font-semibold mb-2">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto py-2 snap-x scrollbar-hide">
        {movies.map((m) => (
          <Link key={m.id} href={`/movie/${m.id}`} className="min-w-[140px] snap-start">
            <div className="rounded overflow-hidden shadow-md hover:scale-105 transition-transform w-[140px]">
              <Image
                src={imageUrl(m.poster_path, 'w342')}
                alt={m.title ?? 'poster'}
                width={200}
                height={300}
                style={{ objectFit: 'cover' }}
                unoptimized={false} // remove or set true if you hit image domain issues
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

