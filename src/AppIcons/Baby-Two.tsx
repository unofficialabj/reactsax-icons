import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const BabyTwo: FC<IconProps> = ({ size, color, ...props }) => {
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
        cx="8"
        cy="5.69995"
        r="3.5"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M2.87078 6.08759C2.67018 3.11869 5.02434 0.600098 8 0.600098V0.600098C10.9757 0.600098 13.3298 3.11869 13.1292 6.08759L12.8034 10.9103C12.6326 13.4375 10.5329 15.4001 8 15.4001V15.4001C5.4671 15.4001 3.36739 13.4375 3.19664 10.9103L2.87078 6.08759Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M5.45639 7.11051C5.24128 6.85845 4.86257 6.8285 4.61051 7.04361C4.35845 7.25872 4.3285 7.63743 4.54361 7.88949L5.45639 7.11051ZM10.1974 14.5143L10.5869 14.9707L11.4996 14.1917L11.1101 13.7353L10.1974 14.5143ZM4.54361 7.88949L10.1974 14.5143L11.1101 13.7353L5.45639 7.11051L4.54361 7.88949Z"
        fill={colorStyle}
      />
      <path
        d="M11 7.5L9 12"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="9.5" cy="5" r="0.5" fill={colorStyle} />
      <circle cx="6.5" cy="5" r="0.5" fill={colorStyle} />
      <path
        d="M8 7.5C8.55228 7.5 9 7.05228 9 6.5H7C7 7.05228 7.44772 7.5 8 7.5Z"
        fill={colorStyle}
      />
    </svg>
  );
};

export default BabyTwo;
