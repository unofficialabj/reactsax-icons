import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const AmountIcon: FC<IconProps> = ({ size, color, ...props }) => {
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
      <path
        d="M2 3.5C2 2.39543 2.89543 1.5 4 1.5H12C13.1046 1.5 14 2.39543 14 3.5V16.5L12 14.5L10 16.5L8 14.5L6 16.5L4 14.5L2 16.5V3.5Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M4 5.5H8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M4 8.5H12"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M4 11.5H12"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default AmountIcon;
