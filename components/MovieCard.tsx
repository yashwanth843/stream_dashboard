'use client';
import Link from 'next/link';
import Image from 'next/image';
import { imageUrl } from '@/lib/image';

import { Movie } from '@/types/movie';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="block">
      <div className="rounded overflow-hidden shadow">
        <Image
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title ?? 'poster'}
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </Link>
  );
}
