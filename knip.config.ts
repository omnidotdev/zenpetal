import type { KnipConfig } from "knip";

// TODO integrate `knip` into CI

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  ignoreDependencies: [
    // used in MDX
    "@storybook/addon-docs",
    // used in MDX
    "@storybook/blocks",
    // used via the `panda studio` / `turbo gen` scripts (knip can't map the
    // binary name back to the package)
    "@pandacss/studio",
    "@turbo/gen",
    // used via the eslint config, which knip does not scan
    "eslint-config-prettier",
    "eslint-plugin-storybook",
  ],
  ignore: [
    "panda.config.ts",
    "*.config.*",
    ".github/**",
    "examples/**",
    // `ComponentVariants` marked as unused, but it is required for downstream type mapping
    "src/lib/util/createStyleContext.tsx",
    // theme extensions are used in barrels
    "src/lib/theme/extensions/**",
    "src/lib/config/env.config.ts",
    // turbo generator config, consumed by `turbo gen` (not imported)
    "turbo/**",
  ],
};

export default knipConfig;
