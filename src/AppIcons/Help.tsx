import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const BackArrow: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M3 3L6 6"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M10 10L13 13"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <rect
        x="5"
        y="5"
        width="6"
        height="6"
        rx="3"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        rx="7"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M1.32912 10.4397C0.820739 11.0287 0.561054 11.7921 0.604861 12.5689C0.648668 13.3457 0.992541 14.0751 1.56391 14.6031C2.13528 15.1312 2.88946 15.4166 3.66729 15.3992C4.44512 15.3818 5.18575 15.0629 5.73291 14.5097"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M14.6709 10.4397C15.1793 11.0287 15.4389 11.7921 15.3951 12.5689C15.3513 13.3457 15.0075 14.0751 14.4361 14.6031C13.8647 15.1312 13.1105 15.4166 12.3327 15.3992C11.5549 15.3818 10.8142 15.0629 10.2671 14.5097"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M1.32912 5.5603C0.820739 4.97134 0.561054 4.20792 0.604861 3.43113C0.648668 2.65434 0.992541 1.92495 1.56391 1.39688C2.13528 0.86881 2.88946 0.583371 3.66729 0.600795C4.44512 0.618219 5.18575 0.937144 5.73291 1.49027"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M14.6709 5.5603C15.1793 4.97134 15.4389 4.20792 15.3951 3.43113C15.3513 2.65434 15.0075 1.92495 14.4361 1.39688C13.8647 0.86881 13.1105 0.583371 12.3327 0.600795C11.5549 0.618219 10.8142 0.937144 10.2671 1.49027"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10 6L13 3"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M6 10L3 13"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BackArrow;
