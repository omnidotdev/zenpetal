import {
  definePreset,
  defineSemanticTokens,
  defineTokens,
} from "@pandacss/dev";
import {
  conditions,
  extensions,
  globalCss,
  semanticTokens as _semanticTokens,
  tokens as _tokens,
} from "@omnidotdev/sigil-tokens";

import * as recipes from "lib/theme/extensions/recipes";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";

// TODO auto-spread tokens
const tokens = defineTokens({
  animations: _tokens.animations,
  aspectRatios: _tokens.aspectRatios,
  assets: _tokens.assets,
  blurs: _tokens.blurs,
  borders: _tokens.borders,
  borderWidths: _tokens.borderWidths,
  colors: _tokens.colors,
  containerNames: _tokens.containerNames,
  // TODO https://panda-css.com/docs/concepts/conditional-styles#container-queries
  // containerSizes: _tokens.containerSizes,
  cursor: _tokens.cursor,
  durations: _tokens.durations,
  easings: _tokens.easings,
  fonts: _tokens.fonts,
  fontSizes: _tokens.fontSizes,
  fontWeights: _tokens.fontWeights,
  gradients: _tokens.gradients,
  letterSpacings: _tokens.letterSpacings,
  lineHeights: _tokens.lineHeights,
  opacity: _tokens.opacity,
  radii: _tokens.radii,
  shadows: _tokens.shadows,
  sizes: _tokens.sizes,
  spacing: _tokens.spacing,
  zIndex: _tokens.zIndex,
});

// TODO auto-spread semantic tokens
const semanticTokens = defineSemanticTokens({
  animations: _semanticTokens.animations,
  aspectRatios: _semanticTokens.aspectRatios,
  assets: _semanticTokens.assets,
  blurs: _semanticTokens.blurs,
  borders: _semanticTokens.borders,
  borderWidths: _semanticTokens.borderWidths,
  colors: _semanticTokens.colors,
  containerNames: _semanticTokens.containerNames,
  // TODO https://panda-css.com/docs/concepts/conditional-styles#container-queries
  // containerSizes: _semanticTokens.containerSizes,
  cursor: _semanticTokens.cursor,
  durations: _semanticTokens.durations,
  easings: _semanticTokens.easings,
  fonts: _semanticTokens.fonts,
  fontSizes: _semanticTokens.fontSizes,
  fontWeights: _semanticTokens.fontWeights,
  gradients: _semanticTokens.gradients,
  letterSpacings: _semanticTokens.letterSpacings,
  lineHeights: _semanticTokens.lineHeights,
  opacity: _semanticTokens.opacity,
  radii: _semanticTokens.radii,
  shadows: _semanticTokens.shadows,
  sizes: _semanticTokens.sizes,
  spacing: _semanticTokens.spacing,
  zIndex: _semanticTokens.zIndex,
});

/**
 * Zenpetal Panda CSS preset.
 */
const zenpetalPreset = definePreset({
  name: "zenpetal",
  // TODO extend full theme
  // eject,
  // patterns,
  // presets,
  // staticCss,
  // utilities,
  conditions,
  globalCss,
  theme: {
    // extend theme configuration
    extend: {
      ...extensions,
      recipes,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
});

export default zenpetalPreset;
