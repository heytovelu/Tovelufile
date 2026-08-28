export default function middleware(request) {
  const url = new URL(request.url);
  const hostname = (request.headers.get('host') || '').toLowerCase();

  // If request is from app.tovelu.store -> serve app.html
  if (hostname.includes('app.tovelu.store')) {
    if (url.pathname === '/' || url.pathname === '') {
      return Response.rewrite(new URL('/app.html', request.url));
    }
  } else {
    // For tovelu.store, www.tovelu.store, or any other root domain -> serve sales.html (Website)
    if (url.pathname === '/' || url.pathname === '') {
      return Response.rewrite(new URL('/sales.html', request.url));
    }
  }
}
