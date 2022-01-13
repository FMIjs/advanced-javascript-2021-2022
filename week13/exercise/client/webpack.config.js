const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProd = !!env.production;
  const mode = isProd ? "production" : "development";

  return {
    mode,
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app.bundle.js",
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
    devtool: isProd ? udefined : "source-map",
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json"),
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Lit webpage",
        filename: "./index.html",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
    },
  };
};
