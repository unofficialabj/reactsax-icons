import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const CallCenter: FC<IconProps> = ({ size, color, ...props }) => {
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
      <g clip-path="url(#clip0_4101_1430)">
        <path
          d="M2.55054 6.78675C2.55054 6.78675 3.5759 6.11497 4.0039 5.56041C4.50436 4.91197 5.27554 4.06152 5.27554 4.06152C5.27554 4.06152 6.70442 4.64668 8.00051 4.74276C9.17399 4.82974 9.56353 4.18377 10.7256 4.33407C12.4094 4.55184 13.4508 6.78675 13.4508 6.78675"
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.4508 9.97253V7.79247V6.15743C13.4508 3.14739 11.0107 0.707275 8.00069 0.707275V0.707275C4.99065 0.707275 2.55054 3.14739 2.55054 6.15743V9.42751C2.55054 12.4375 4.99065 14.8777 8.00069 14.8777V14.8777"
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-linecap="round"
        />
        <path
          d="M13.4509 7.79272H13.7517C14.3591 7.79272 14.8515 8.28514 14.8515 8.89257C14.8515 9.5 14.3591 9.99242 13.7517 9.99242H13.4509V7.79272Z"
          fill={colorStyle}
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-linejoin="round"
        />
        <path
          d="M2.55103 7.79272H2.25026C1.64283 7.79272 1.15041 8.28514 1.15041 8.89257C1.15041 9.5 1.64283 9.99242 2.25026 9.99242H2.55103V7.79272Z"
          fill={colorStyle}
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-linejoin="round"
        />
        <rect
          x="-0.561139"
          y="0.561139"
          width="1.12228"
          height="1.12228"
          rx="0.561139"
          transform="matrix(-1 0 0 1 8.54569 13.7554)"
          fill={colorStyle}
          stroke={colorStyle}
          stroke-width="1.12228"
        />
        <circle cx="6" cy="8.09314" r="1" fill={colorStyle} />
        <circle cx="10" cy="8.09314" r="1" fill={colorStyle} />
      </g>
      <defs>
        <clipPath id="clip0_4101_1430">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CallCenter;
