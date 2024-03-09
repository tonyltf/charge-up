import { c as t, e as r } from '/build/_shared/chunk-6OZYWZFQ.js';
var e = t(r(), 1),
  o = () => [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix! Using Vite and Cloudflare!' },
  ];
function i() {
  return (0, e.jsxs)('div', {
    style: { fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' },
    children: [
      (0, e.jsx)('h1', { children: 'Welcome to Remix (with Vite and Cloudflare)' }),
      (0, e.jsxs)('ul', {
        children: [
          (0, e.jsx)('li', {
            children: (0, e.jsx)('a', {
              target: '_blank',
              href: 'https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/',
              rel: 'noreferrer',
              children: 'Cloudflare Pages Docs - Remix guide',
            }),
          }),
          (0, e.jsx)('li', {
            children: (0, e.jsx)('a', {
              target: '_blank',
              href: 'https://remix.run/docs',
              rel: 'noreferrer',
              children: 'Remix Docs',
            }),
          }),
        ],
      }),
    ],
  });
}
export { i as default, o as meta };
