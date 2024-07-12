import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Shampoo: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M4 7.3999C4 6.29533 4.89543 5.3999 6 5.3999H10C11.1046 5.3999 12 6.29533 12 7.3999V14.3999C12 14.9522 11.5523 15.3999 11 15.3999H5C4.44772 15.3999 4 14.9522 4 14.3999V7.3999Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="4"
        y="9"
        width="8"
        height="3"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M8 0.600098V2.73344M8 0.600098H10.1198C10.3647 0.600098 10.6011 0.689976 10.7842 0.852687L11 1.04454M8 0.600098H7M8 2.73344H7.5C6.94772 2.73344 6.5 3.18116 6.5 3.73344V4.4001C6.5 4.95238 6.94772 5.4001 7.5 5.4001H8.5C9.05228 5.4001 9.5 4.95238 9.5 4.4001V3.73344C9.5 3.18116 9.05228 2.73344 8.5 2.73344H8Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Shampoo;
