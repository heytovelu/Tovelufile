export default function middleware(request) {
  const url = new URL(request.url);
  const hostname = request.headers.get('host') || '';

  // If request is from app.tovelu.store -> rewrite to /app.html
  if (hostname.includes('app.tovelu.store')) {
    if (url.pathname === '/' || url.pathname === '') {
      return Response.rewrite(new URL('/app.html', request.url));
    }
  }

  // If request is from tovelu.store or www.tovelu.store -> rewrite to /sales.html (Website)
  if (hostname === 'tovelu.store' || hostname === 'www.tovelu.store') {
    if (url.pathname === '/' || url.pathname === '') {
      return Response.rewrite(new URL('/sales.html', request.url));
    }
  }
}
