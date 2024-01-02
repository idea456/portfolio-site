import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import "./Text.scss";

const textVariants = cva(["text"], {
  variants: {
    size: {
      sm: "text__size--sm",
      md: "text__size--md",
      lg: "text__size--lg",
    },
    weight: {
      bold: "text__weight--bold",
      normal: "text__weight--normal",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
  },
});

type TTextVariantProps = VariantProps<typeof textVariants>;

const Text: React.FC<React.PropsWithChildren<TTextVariantProps>> = ({
  children,
  size,
  weight,
}) => {
  return <span className={textVariants({ size, weight })}>{children}</span>;
};

export default Text;
