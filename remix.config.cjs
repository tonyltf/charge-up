/** @type {import('@remix-pwa/dev').WorkerConfig} */
module.exports = {
    appDirectory: "app",
    assetsBuildDirectory: "build",
    future: {
      /* any enabled future flags */
      v2_dev: true,
    },
    ignoredRouteFiles: ["**/*.css"],
    publicPath: "/build/",
    serverBuildPath: "build/index.js",
    serverDependenciesToBundle: [
      /@remix-pwa\/.*/,
    ],
    
    // for Remix PWA
    entryWorkerFile: '<appDir>/entry.worker.ts',
    worker: '@remix-pwa/worker-runtime',
    workerName: 'entry.worker',
  };
  