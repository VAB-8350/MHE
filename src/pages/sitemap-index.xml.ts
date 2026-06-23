import type { APIRoute } from 'astro';
import products from './catalogo/products.json';

const SITE_URL = 'https://www.mhe-indumentaria.com';

const staticUrls = ['/', '/catalogo'];

const productUrls = products.map((product) => `/catalogo/${product.id}`);

const allUrls = [...staticUrls, ...productUrls];

const buildUrlEntry = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const absoluteUrl = new URL(normalizedPath, SITE_URL).toString();

  return `  <url><loc>${absoluteUrl}</loc></url>`;
};

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls.map(buildUrlEntry).join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
