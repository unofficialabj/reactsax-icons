import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Email: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M15 3.5L8.58124 8.08483C8.23354 8.33319 7.76646 8.33319 7.41876 8.08483L1 3.5"
        stroke={colorStyle}
      />
    </svg>
  );
};

export default Email;
