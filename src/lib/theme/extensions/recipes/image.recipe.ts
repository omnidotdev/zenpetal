import { defineRecipe } from "@pandacss/dev";

/**
 * Image recipe.
 */
const image = defineRecipe({
  className: "image",
  description: "Image style recipes",
  base: {
    maxWidth: "full",
    height: "auto",
  },
  variants: {
    rounded: {
      none: { borderRadius: "none" },
      sm: { borderRadius: "sm" },
      md: { borderRadius: "md" },
      lg: { borderRadius: "lg" },
      xl: { borderRadius: "xl" },
      "2xl": { borderRadius: "2xl" },
      full: { borderRadius: "full" },
    },
  },
});

export default image;
