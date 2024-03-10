/** @type {import('@remix-pwa/dev').WorkerConfig} */
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // appDirectory: "app",
  // assetsBuildDirectory: "build",
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true, // Provide a JSPM polyfill
      fs: 'empty', // Provide an empty polyfill
    },
    globals: {
      Buffer: true,
    },
  },
  cacheDirectory: './node_modules/.cache/remix',
  future: {
    /* any enabled future flags */
  },
  ignoredRouteFiles: ['**/*.css'],
  plugins: [
    // any enabled plugins
  ],
  publicPath: '/build/',
  server: "./server.ts",
  // serverBuildPath: 'build/index.js',
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: [/^(?!(__STATIC_CONTENT_MANIFEST)$).*$/u, /@remix-pwa\/.*/],
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",

  // for Remix PWA
  entryWorkerFile: '<appDir>/entry.worker.ts',
  worker: '@remix-pwa/worker-runtime',
  workerName: 'entry.worker',
};
