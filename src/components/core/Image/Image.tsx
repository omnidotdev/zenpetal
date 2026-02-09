import { Image as UnpicImage } from "@unpic/react";

import { cx } from "generated/panda/css";
import { image } from "generated/panda/recipes";

import type { ImageVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

type UnpicImageProps = ComponentProps<typeof UnpicImage>;

export type ImageProps = UnpicImageProps & ImageVariantProps;

/**
 * Responsive image with automatic srcset, lazy loading, and CDN optimization.
 */
export const Image = ({ rounded, className, ...rest }: ImageProps) => (
  <UnpicImage className={cx(image({ rounded }), className)} {...rest} />
);
