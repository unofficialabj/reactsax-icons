import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Redo: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M15.1042 1.19189V4.74389H11.5522"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.895754 14.8079L0.895754 11.2559L4.44775 11.2559"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.600098 7.99985C0.600098 6.43713 1.09482 4.91451 2.01337 3.65024C2.93192 2.38597 4.22713 1.44494 5.71337 0.962035C7.19962 0.479126 8.80058 0.479126 10.2868 0.962036C11.7731 1.44495 13.0683 2.38597 13.9868 3.65025"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M15.3999 8C15.3999 9.56273 14.9052 11.0853 13.9866 12.3496C13.0681 13.6139 11.7729 14.5549 10.2866 15.0378C8.80039 15.5207 7.19942 15.5207 5.71318 15.0378C4.22694 14.5549 2.93173 13.6139 2.01318 12.3496"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <rect x="1.00146" y="11.3999" width="1" height="1" fill={colorStyle} />
      <rect x="14.0015" y="3.49976" width="1" height="1" fill={colorStyle} />
    </svg>
  );
};

export default Redo;
