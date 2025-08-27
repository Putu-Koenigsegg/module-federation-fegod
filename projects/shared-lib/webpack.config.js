const { ModuleFederationPlugin } = require("webpack").container;
const mf = require("@angular-architects/module-federation/webpack");

module.exports = {
  output: {
    uniqueName: "sharedLib",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "sharedLib",
      filename: "remoteEntry.js",
      exposes: {
        './Module': './src/app/shared/shared.module.ts',
        './AuthService': './src/app/shared/services/auth.service.ts',
      },
      shared: mf.share({
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      }),
    }),
  ],
};