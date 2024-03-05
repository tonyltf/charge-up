/** @type {import('@remix-pwa/dev').WorkerConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  future: {
    /* any enabled future flags */
  },
  ignoredRouteFiles: ["**/*.css"],
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: 'cjs',

  // default - `appDir` is the value of `appDirectory` in your remix config file
  entryWorkerFile: '<appDir>/entry.worker.ts',
  // worker: '@remix-pwa/runtime',
  workerName: 'entry.worker',
}