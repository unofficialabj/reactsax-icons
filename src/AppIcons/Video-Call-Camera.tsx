import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const VideoCallCamera: FC<IconProps> = ({ size, color, ...props }) => {
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
        x="0.620605"
        y="2.64392"
        width="10.712"
        height="10.712"
        rx="3"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M11.3558 8.0786L11.3556 7.23482C11.3555 6.90441 11.5186 6.5953 11.7915 6.40891L13.8218 5.02174C14.4856 4.56827 15.386 5.04358 15.386 5.84743V10.1524C15.386 10.9563 14.4856 11.4316 13.8218 10.9781L11.7915 9.59096C11.5187 9.40457 11.3555 9.09544 11.3556 8.76503L11.3558 8.0786Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M4.41797 8H7.53508"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M5.97656 9.55847L5.97656 6.44136"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default VideoCallCamera;
