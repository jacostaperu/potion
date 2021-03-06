const { readdirSync, lstatSync } = require('fs');
const { join } = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const packagesDir = join(__dirname, './packages');
const isDirectory = source => lstatSync(join(packagesDir, source)).isDirectory();
const packages = readdirSync(packagesDir).filter(isDirectory);

const plugins = [
  new Visualizer({ filename: '../bundle-stats.html' }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (process.env.NODE_ENV === 'production') plugins.push(new UglifyJSPlugin({ sourceMap: true }));

module.exports = packages.map(packageName => ({
  devtool: 'cheap-module-source-map',

  entry: `${__dirname}/packages/${packageName}/src/index.js`,

  resolve: {
    mainFields: [
      'jsnext:main',
      'browser',
      'main',
    ],
  },

  output: {
    path: `${__dirname}/packages/${packageName}/umd`,
    filename: `potion${packageName === 'main' ? '' : `-${packageName}`}${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
    library: `Potion${packageName === 'main' ? '' : `${packageName[0].toUpperCase()}${packageName.slice(1)}`}`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  plugins,

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}));
