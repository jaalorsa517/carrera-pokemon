module.exports = {
  assetsDir: "static",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Carrera pokemon";
      return args;
    });
  },
  pwa: {
    name: "Carrera Pokemon",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      skipWaiting: true,
      swDest: "service-worker.js"
      // ...other Workbox options...
    }
  }
};
