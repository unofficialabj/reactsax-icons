import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const NotCoveredLocation: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M14 6.6001C14 9.21803 10.2551 13.4417 8.68248 15.0999C8.30756 15.4952 7.69244 15.4952 7.31752 15.0999C5.7449 13.4417 2 9.21803 2 6.6001C2 3.28639 4.68629 0.600098 8 0.600098C11.3137 0.600098 14 3.28639 14 6.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10 4L6 8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M6 4L10 8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default NotCoveredLocation;
