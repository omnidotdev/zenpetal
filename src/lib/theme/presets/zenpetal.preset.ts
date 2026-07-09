import sigilPreset from "@omnidotdev/sigil-tokens/panda";
import { definePreset } from "@pandacss/dev";

import * as recipes from "lib/theme/extensions/recipes";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";

/**
 * Zenpetal Panda CSS preset (Sigil tokens + component recipes)
 */
const zenpetalPreset = definePreset({
  name: "zenpetal",
  presets: [sigilPreset],
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
});

export default zenpetalPreset;
