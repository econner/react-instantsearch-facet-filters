const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [{
  		test    : /\.(js|jsx)$/,
    	loader  : 'babel-loader',
    	exclude : /node_modules/,
    	query   : {
		    cacheDirectory : true,
		    plugins        : ['transform-decorators-legacy', 'transform-runtime'],
		    presets        : ['es2015', 'react', 'stage-0']
		  },
  	}, {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    }]
  }
};