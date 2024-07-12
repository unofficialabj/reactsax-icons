import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const CloseCircle: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M15.3499 7.9999C15.3499 3.94061 12.0592 0.649902 7.9999 0.649902C3.94061 0.649902 0.649902 3.94061 0.649902 7.9999C0.649902 12.0592 3.94061 15.3499 7.9999 15.3499C12.0592 15.3499 15.3499 12.0592 15.3499 7.9999Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
      />
      <path
        d="M5.5 5.5L10.5 10.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M10.5 5.5L5.5 10.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CloseCircle;
