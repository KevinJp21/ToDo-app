const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Configuración para importar SVG
config.transformer = {
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
config.resolver = {
  assetExts: config.resolver.assetExts.filter(ext => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};

// Integrar NativeWind
module.exports = withNativeWind(config, { input: "./global.css" });
