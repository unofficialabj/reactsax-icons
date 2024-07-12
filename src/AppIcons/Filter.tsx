import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Filer: FC<IconProps> = ({ size, color, ...props }) => {
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
      <circle
        cx="13.25"
        cy="11.5"
        r="1.75"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M13.25 1.58325V9.74992"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M13.25 13.25L13.25 15"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <circle
        cx="2.75"
        cy="11.5"
        r="1.75"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M2.75 1.58325V9.74992"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M2.75 13.25L2.75 15"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <circle
        cx="1.75"
        cy="1.75"
        r="1.75"
        transform="matrix(1 0 0 -1 6.25 6.83325)"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M8 15V6.83333"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M8 3.33325L8 1.58325"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Filer;
