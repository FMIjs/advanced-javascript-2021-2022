const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProd = !!env.production;
  const mode = isProd ? 'production' : 'development';
  return {
    mode,
    // entry: path.resolve(__dirname, 'src', 'app.js'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: isProd ? undefined : 'source-map',
    module: {
      rules: [
        {
          test: /environment.ts/,
          use: {
            loader: path.resolve(__dirname, 'loaders', 'environment-replacer')
          }
        },
        {
          test: /\.txt$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'raw-loader',
              options: { esModule: false }
            }
          ]
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json')
          }
        }
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env'],
        //       plugins: [
        //         ['@babel/plugin-proposal-decorators', { legacy: true }]
        //       ]
        //     }
        //   }
        // }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My First Webpack App',
        filename: './index.html'
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000
    }
  };
};
