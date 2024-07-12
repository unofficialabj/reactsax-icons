import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Gender: FC<IconProps> = ({ size, color, ...props }) => {
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
        y="0.600098"
        width="6"
        height="6"
        rx="3"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M3.6001 6.90015V15.4001"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.1001 12.4001H6.1001"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="9.3999"
        y="9.40015"
        width="6"
        height="6"
        rx="3"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M12.3999 0.600098V9.1001"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.3999 3.6001L12.3999 0.600098L15.3999 3.6001"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gender;
