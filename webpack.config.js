module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
         use: [ { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" } ]
       },
       {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
       },
      {
       test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/, //A)
       use: [
         {
           loader: 'url-loader',
           options: {
             limit: 10000
           }
         }
       ]
     }
    ]
  }
};
