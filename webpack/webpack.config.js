var path = require('path');
var qs = require('qs');
var argv = require('minimist')(process.argv.slice(2));
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = !!((argv.env && argv.env.production) || argv.p);
var sourceMapQueryStr = !isProduction ? '+sourceMap' : '-sourceMap';


module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map'
  },
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, '../src/assets'),
      'views': path.resolve(__dirname, '../src/views'),
      'components': path.resolve(__dirname, '../src/components'),
      'src': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: path.resolve(__dirname, "node_modules"),
        loader: 'eslint-loader',
        test: /\.js?$/
      },
      {
        exclude: path.resolve(__dirname, "node_modules"),
        test: /\.js$/,
        loaders: [{
          loader: 'babel-loader',
          query: {
            cacheDirectory: true
          }
        }]
      },
      {
        exclude: path.resolve(__dirname, "node_modules"),
        loader: 'vue-loader',
        test: /\.vue$/,
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
          },
          postcss: [require('autoprefixer')()],
        }
      },
      {
        exclude: path.resolve(__dirname, "node_modules"),
        loader: 'html-loader',
        test: /\.html$/
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            `css-loader?${sourceMapQueryStr}`,
          ]
        }),
      },{
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',
             publicPath: '../'
           }
         }]
      }, {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            `css-loader?${sourceMapQueryStr}`,
            `resolve-url-loader?${sourceMapQueryStr}`,
            `sass-loader?${sourceMapQueryStr}`,
          ]
        }),
      }, {
        test: /\.(png|jpe?g|gif|svg|xml|json)$/,
        include: path.resolve(__dirname, '../src'),
        loaders: [
          `file-loader?${qs.stringify({
            name: 'assets/img/[name].[ext]',
          })}`
        ]
      },
    ],
  }
}