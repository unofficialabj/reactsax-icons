import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const MapNavigation: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M8.992 15.0043V7.00169H1L15 1L8.992 15.0043Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MapNavigation;
