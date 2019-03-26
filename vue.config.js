const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: config => {
    /* copy [projectDir]/js/config.js to [outputDir]/js/config.js */
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: "config/config.js",
          to: "js/config.js",
          toType: "file"
        }
      ])
    );
  },

//   chainWebpack: config => {
//     /* do not copy [projectDir]/public/config.js to [outputDir]/config.js */
//     config.plugin("copy").tap(([options]) => {
//       options[0].ignore.push("config.js");
//       return [options];
//     });
//   }
};