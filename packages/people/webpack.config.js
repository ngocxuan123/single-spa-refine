const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "people",
    webpackConfigEnv,
  });

  const config = merge(defaultConfig, {
    devServer: {
      ...defaultConfig.devServer,
      port: 8888,
    },
    // customizations go here
  });

  return config;
};
