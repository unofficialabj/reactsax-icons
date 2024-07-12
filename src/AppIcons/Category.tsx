import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Category: FC<IconProps> = ({ size, color, ...props }) => {
  const theme = useTheme();

  const colorStyle = color || theme.color || "#292D32";
  const sizeStyle = size || theme.size || 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeStyle}
      height={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect
        x="0.6"
        y="0.6"
        width="6.18462"
        height="6.18462"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="0.6"
        y="9.21536"
        width="6.18462"
        height="6.18462"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="9.21548"
        y="0.6"
        width="6.18462"
        height="6.18462"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="9.21548"
        y="9.21536"
        width="6.18462"
        height="6.18462"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Category;
