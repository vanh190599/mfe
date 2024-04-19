const { ModuleFederationPlugin } = require("webpack").container;

/** @type {import('webpack').Configuration} */
module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "angular_app",
    scriptType: "text/javascript",
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  optimization: {
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular_app",
      filename: "remoteEntry.js",
      exposes: {
        // test expose module, with metadata
        AngularAppLoader: "./src/app/loader.ts",
        // test expose route
        AngularAppRoute: "./src/app/standalone-component.route.ts",
        // test expose component
        AngularAppComponent: "./src/app/app.component.ts"
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
        "@angular/common/http": { singleton: true },
        // state
        '@ngrx/store': { singleton: true, eager: true },
        '@ngrx/router-store': { singleton: true, eager: true },
        'mdmf-shared': { singleton: true, eager: true },
      },
    }),
  ],
  devServer: {
    // this is to remove the error "ws://localhost:4200/ws failed" in the console when we disable live reload
    // also this solve websocket proxy issue in local
    webSocketServer: false,
  },
};
