import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const MedicineBottle: FC<IconProps> = ({ size, color, ...props }) => {
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
        x="1"
        y="1"
        width="14"
        height="3"
        rx="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="5"
        y="7"
        width="6"
        height="5"
        rx="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M3 4H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default MedicineBottle;
