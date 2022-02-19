const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/index.ts",
  output: {
    filename: "main.commonjs.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",

            options: {
              transpileOnly: true,
              configFile: "tsconfig.commonjs.json"
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
