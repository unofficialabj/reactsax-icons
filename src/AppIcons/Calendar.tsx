import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Calendar: FC<IconProps> = ({ size, color, ...props }) => {
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
      <g clip-path="url(#clip0_4101_1419)">
        <path
          d="M5.09082 0.727295V2.90911"
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.9092 0.727295V2.90911"
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.81812 5.88367H14.1818"
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5455 5.4546V11.6364C14.5455 13.8182 13.4546 15.2728 10.9091 15.2728H5.09095C2.5455 15.2728 1.45459 13.8182 1.45459 11.6364V5.4546C1.45459 3.27278 2.5455 1.81824 5.09095 1.81824H10.9091C13.4546 1.81824 14.5455 3.27278 14.5455 5.4546Z"
          stroke={colorStyle}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.687 9.23632H10.6936"
          stroke={colorStyle}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.687 11.4182H10.6936"
          stroke={colorStyle}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.9966 9.23632H8.00314"
          stroke={colorStyle}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.9966 11.4182H8.00314"
          stroke={colorStyle}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.30495 9.23632H5.31149"
          stroke={colorStyle}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.30495 11.4182H5.31149"
          stroke={colorStyle}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4101_1419">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Calendar;
