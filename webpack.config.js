const path = require('path');

const SRC_ENTRY = path.join(__dirname, 'src/index.jsx');
const DEST_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: SRC_ENTRY,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            import: true,
          },
        }],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: DEST_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  // ],

  devServer: {
    contentBase: DEST_DIR,
  },
};
