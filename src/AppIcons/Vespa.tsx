import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Vespa: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M15 12H7.5M7.5 12H1.16817C0.794306 12 0.552689 11.6047 0.723199 11.272L2.4 8H6L7.5 12Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 8L1 8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="11"
        y="2"
        width="1.4"
        height="2"
        rx="0.7"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M11.5 2V2C10.6571 2.28095 10.1785 3.1693 10.4074 4.02775L12 10"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.576 6.43112L11.5072 5.83509L10.3151 5.97284L10.384 6.56888L11.576 6.43112ZM7.47597 10.2109C7.31632 9.92055 6.9515 9.81458 6.66112 9.97423C6.37075 10.1339 6.26477 10.4987 6.42442 10.7891L7.47597 10.2109ZM11.3161 9.40886L10.7201 9.47773L11.3161 9.40886ZM10.384 6.56888L10.7201 9.47773L11.9122 9.33998L11.576 6.43112L10.384 6.56888ZM9.03012 11.2641L8.49244 11.1296L8.20139 12.2938L8.73908 12.4282L9.03012 11.2641ZM7.60518 10.4459L7.47597 10.2109L6.42442 10.7891L6.55364 11.0241L7.60518 10.4459ZM8.49244 11.1296C8.11443 11.0351 7.79291 10.7874 7.60518 10.4459L6.55364 11.0241C6.90227 11.6582 7.49938 12.1183 8.20139 12.2938L8.49244 11.1296ZM9.79904 11.1797C9.56103 11.2987 9.28829 11.3286 9.03012 11.2641L8.73908 12.4282C9.27515 12.5623 9.84147 12.5001 10.3357 12.253L9.79904 11.1797ZM10.7201 9.47773C10.8015 10.1823 10.4334 10.8625 9.79904 11.1797L10.3357 12.253C11.4215 11.7101 12.0515 10.5459 11.9122 9.33998L10.7201 9.47773Z"
        fill={colorStyle}
      />
      <path
        d="M12.9204 14.5615C14.025 14.5615 14.9204 13.6661 14.9204 12.5615C14.9204 11.457 14.025 10.5615 12.9204 10.5615C11.8158 10.5615 10.9204 11.457 10.9204 12.5615C10.9204 13.6661 11.8158 14.5615 12.9204 14.5615Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10.5 11.8722C10.7785 10.7954 11.7566 10 12.9205 10C14.0844 10 15.0626 10.7954 15.3411 11.8722"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M5.5 12.5615C5.5 13.6661 4.60457 14.5615 3.5 14.5615C2.39543 14.5615 1.5 13.6661 1.5 12.5615"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect x="12" y="11" width="2" height="1" fill={colorStyle} />
      <rect
        x="1.5"
        y="2.5"
        width="4"
        height="4"
        rx="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Vespa;
