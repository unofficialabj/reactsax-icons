import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const RedoSquare: FC<IconProps> = ({ size, color, ...props }) => {
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
        width="14.8"
        height="14.8"
        rx="3"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M12.7999 3.3999V5.7999H10.3999"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.2001 12.6001L3.2001 10.2001L5.6001 10.2001"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 8C3 6.9441 3.33428 5.91531 3.95492 5.06107C4.57556 4.20684 5.4507 3.57101 6.45492 3.24472C7.45913 2.91843 8.54087 2.91843 9.54509 3.24472C10.5493 3.57101 11.4244 4.20684 12.0451 5.06108"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M13.0002 8C13.0002 9.0559 12.6659 10.0847 12.0452 10.9389C11.4246 11.7932 10.5495 12.429 9.54525 12.7553C8.54103 13.0816 7.4593 13.0816 6.45508 12.7553C5.45086 12.429 4.57572 11.7932 3.95508 10.9389"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default RedoSquare;
