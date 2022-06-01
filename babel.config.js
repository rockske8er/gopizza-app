module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
          alias: {
            "@Assets": "./src/Assets",
            "@Components": "./src/Components",
            "@Screens": "./src/Screens",
            "@Theme": "./src/Theme",
            "@Hooks": "./src/Hooks",
            "@Types": "./src/@types",
            "@Utils": "./src/Utils",
            "@Routes": "./src/Routes",
          },
        },
      ],
    ],
  };
};
