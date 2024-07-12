import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Hospital: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M0.999756 15H14.9999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5001 1H4.49998C2.39996 1 1.69995 2.25301 1.69995 3.80003V15.0002H14.3001V3.80003C14.3001 2.25301 13.6001 1 11.5001 1Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.4421 10.1H6.55107C6.19406 10.1 5.89307 10.394 5.89307 10.758V15H10.0931V10.758C10.1001 10.394 9.80611 10.1 9.4421 10.1Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.74976 3.79993V6.79993"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.24976 3.79993V6.79993"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.74976 5.29993H8.74976"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Hospital;
