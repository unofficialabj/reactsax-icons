import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Web: FC<IconProps> = ({ size, color, ...props }) => {
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
        cx="8.0001"
        cy="8.0001"
        r="7.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M7.57133 0.599902C5.8198 0.599902 4.3999 3.91299 4.3999 7.9999C4.3999 12.0868 5.8198 15.3999 7.57133 15.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M8.39986 0.599902C10.1514 0.599902 11.5713 3.91299 11.5713 7.9999C11.5713 12.0868 10.1514 15.3999 8.39986 15.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M0.600146 8.42867C0.600146 10.1802 3.91324 11.6001 8.00015 11.6001C12.0871 11.6001 15.4001 10.1802 15.4001 8.42867"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M0.600146 7.60014C0.600146 5.84861 3.91324 4.42871 8.00015 4.42871C12.0871 4.42871 15.4001 5.84861 15.4001 7.60014"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Web;
