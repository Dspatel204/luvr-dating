const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
export default {
  entry: {
    "mobile-app": "./src/main.jsx",
  },
  output: {
    path: path.resolve("Build"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            sourceMaps: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/i, // Handle font files
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[ext]", // Output pattern for fonts
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // Use Webpack 5's asset module to handle images
        generator: {
          filename: "images/[name].[ext]", // Output pattern for images
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join("Build"),
    },
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
