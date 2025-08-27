new ModuleFederationPlugin({
  remotes: {
    mfe1: "mfe1@http://localhost:4201/remoteEntry.js",
    mfe2: "mfe2@http://localhost:4202/remoteEntry.js",
    sharedLib: "sharedLib@http://localhost:4300/remoteEntry.js",
  },
  shared: mf.share({
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
  }),
});