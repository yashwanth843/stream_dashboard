
const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;


async function tmdbFetch(path: string) {
  if (!API_KEY) {

    throw new Error('TMDB_API_KEY is not defined in .env.local');
  }

  const sep = path.includes('?') ? '&' : '?';
  const url = `${BASE}${path}${sep}api_key=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 60 } });

  
  const text = await res.text();

  if (res.ok) {
    try {
      return JSON.parse(text);
    } catch {
      
      return text;
    }
  }

 
  if (res.status === 404) {
    return null;
  }
  if (res.status === 401) {
    throw new Error(`TMDB 401 Unauthorized — check your TMDB_API_KEY`);
  }
  if (res.status === 429) {
    throw new Error(`TMDB 429 Too Many Requests — rate limited`);
  }

  throw new Error(`TMDB fetch failed: ${res.status} ${res.statusText} — ${text.slice(0, 300)}`);
}


export async function fetchPopular() {
  return tmdbFetch('/movie/popular?language=en-US&page=1');
}


export async function fetchNowPlaying() {
  return tmdbFetch('/movie/now_playing?language=en-US&page=1');
}


export async function fetchTopRated() {
  return tmdbFetch('/movie/top_rated?language=en-US&page=1');
}


export async function fetchMovieById(id: string) {
  if (!id) throw new Error('Missing movie id');
  return tmdbFetch(`/movie/${id}?language=en-US`);
}


export async function searchMovies(query: string) {
  if (!query) return { results: [] };
  const encoded = encodeURIComponent(query);
  return tmdbFetch(`/search/movie?query=${encoded}&language=en-US&page=1`);
}
