new ModuleFederationPlugin({
  name: "mfe1",
  filename: "remoteEntry.js",
  exposes: {
    './Module': './src/app/remote/remote.module.ts'
  },
  remotes: {
    sharedLib: "sharedLib@http://localhost:4300/remoteEntry.js",
  },
  shared: mf.share({
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
  }),
});