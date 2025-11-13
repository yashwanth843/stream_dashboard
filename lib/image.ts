export function imageUrl(path?: string | null, size = 'w342') {
  if (!path) return '';

  
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
