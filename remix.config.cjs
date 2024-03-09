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
  serverBuildPath: 'build/index.js',
  serverDependenciesToBundle: [/@remix-pwa\/.*/],
  serverModuleFormat: 'cjs',

  // for Remix PWA
  entryWorkerFile: '<appDir>/entry.worker.ts',
  worker: '@remix-pwa/worker-runtime',
  workerName: 'entry.worker',
};
