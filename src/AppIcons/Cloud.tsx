import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Cloud: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M4.67099 7.35626C4.29898 7.16674 3.88485 7.06847 3.4637 7.06847C0.178765 7.3001 0.178765 12.0801 3.4637 12.3117H11.2479C12.1955 12.3188 13.1079 11.9678 13.8028 11.3291C16.1121 9.31458 14.8768 5.26456 11.8375 4.87851C10.7425 -1.69838 1.24567 0.800416 3.4988 7.06847"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6934 5.18744C11.0584 5.00494 11.4584 4.90668 11.8655 4.89966"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Cloud;
