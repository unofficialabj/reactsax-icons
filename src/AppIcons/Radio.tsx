import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Radio: FC<IconProps> = ({ size, color, ...props }) => {
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
        x="1"
        y="1"
        width="14"
        height="14"
        rx="7"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="4"
        y="4"
        width="8"
        height="8"
        rx="4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Radio;
