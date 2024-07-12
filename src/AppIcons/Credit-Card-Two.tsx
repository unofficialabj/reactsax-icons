import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const CreditCardTwo: FC<IconProps> = ({ size, color, ...props }) => {
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
        y="1"
        width="14.8"
        height="10"
        rx="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M8.3999 8H13.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M8.3999 6H13.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M8.3999 4H10.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M2.5 6H6.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M4.5 4L4.5 8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CreditCardTwo;
