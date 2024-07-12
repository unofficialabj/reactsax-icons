import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Id: FC<IconProps> = ({ size, color, ...props }) => {
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
        x="0.600098"
        y="3"
        width="14.8"
        height="10"
        rx="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M11.3999 5H13.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M9.3999 7H13.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M8.3999 11H13.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <rect
        x="2.6001"
        y="5"
        width="4"
        height="4"
        rx="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Id;
