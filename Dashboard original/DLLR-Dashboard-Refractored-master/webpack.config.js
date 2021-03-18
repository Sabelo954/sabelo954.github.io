const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin-patched');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const hr = require('./src/header.json');

hr.longName = 'Longname'
hr.shortName = 'Shortname'

// https://webpack.js.org/guides/code-splitting/ bundle analyzers
// preload woff n pics

module.exports = env => {
  return {
  entry: {
	head: './src/head.js',
	index: './src/index.js',
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: {
      name: "manifest",
    },
    minimizer: [
      new TerserPlugin({
		sourceMap: true,
		// terserOptions: { compress:{ pure_funcs: ['console.log'] } }
	  }), 
      new OptimizeCssAssetsPlugin({})],
    splitChunks: { chunks: 'all' }
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    globalObject: "this",
    sourceMapFilename: "[name].[hash].js.map",
    devtoolModuleFilenameTemplate: info => 'file://' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: { inline: true, name: 'worker.[hash].js' }
        }
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { 
              "presets": [ ["@babel/preset-env", { "modules": false }], "@babel/preset-react"],
              "plugins": [ '@babel/transform-runtime' ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          { loader: "css-loader" },
          { loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')(),
                require('cssnano')(),
              ]
            }
          }
		],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
          { loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')(),
                require('cssnano')(),
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?classPrefix'
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [ 'csv-loader' ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[id].css"
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
    new HtmlWebpackPlugin({
	  templateContent: `
        <!DOCTYPE html>
        <html lang="en">
          <div id="head"></div>
          <body>
            <div id="body"></div>
          </body>
        </html>`,
      inlineSource: env.NODE_ENV == 'local' ? false : '^(index).*.(css)$', 
      inject: 'head',
    }),
    new ScriptExtHtmlWebpackPlugin({ // Delete '/head/' e.g [vendors~head] Before deploy.
      preload: {
        test: /^(index|imported).*.(js|json|svg|css)$/,
        chunks: 'all'
      },
      prefetch: {
        test: /\.(js|json|svg|css)$/,
        chunks: 'all'
      },
      defaultAttribute: 'async',
    }),
    new WebpackPwaManifest( {
      fingerprints: false,
      name: hr.longName,
      short_name:  hr.shortName,
      description: hr.description,
      background_color: 'black',
      crossorigin: 'use-credentials',
      start_url: './',
      display: "standalone",
      theme_color: 'red',
      dir:"rtl",
      lang:"ar",
      icons: [ 
      {  
        src: path.resolve('src/images/icon192.png'),
        sizes: "192x192",  
        type: "image/png"  
      }, 
      {  
        src: path.resolve('src/images/icon512.png'), 
        sizes: "512x512",  
        type: "image/png"  
      } ]
    } ),/*
    new WorkboxPlugin.GenerateSW({
      swDest: './sw.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.(?:png|jpg|jpeg|svg|ico)$/],
      runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg|js)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: { maxEntries: 10 },
        },
      }]
    }),*/
    new CopyWebpackPlugin([
      { from: './src/data', to: 'data' },
      { from: './src/header.json', to: 'header.json', toType: 'file' },
      { from: './src/error', to: 'error' },
      { from: './src/.htaccess', to: '.htaccess', toType: 'file' },
      { from: './src/robots.txt', to: 'robots.txt', toType: 'file' }
    ])
  ],
  devServer: {
    proxy: {
      '/data': 'http://localhost:80/dllrx/src/'
    }
  }
}
}

