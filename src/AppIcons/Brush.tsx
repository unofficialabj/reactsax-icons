import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Brush: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M3.34375 1.5376C3.34375 1.01983 3.76348 0.600098 4.28125 0.600098V0.600098C4.79902 0.600098 5.21875 1.01983 5.21875 1.5376V5.61442C5.21875 5.70696 5.19136 5.79744 5.14002 5.87444L4.35998 7.04451C4.30864 7.12151 4.28125 7.21198 4.28125 7.30452V14.4626C4.28125 14.9804 3.86152 15.4001 3.34375 15.4001V15.4001C2.82598 15.4001 2.40625 14.9804 2.40625 14.4626V7.30452C2.40625 7.21198 2.43364 7.12151 2.48498 7.04451L3.26502 5.87444C3.31636 5.79744 3.34375 5.70696 3.34375 5.61442V1.5376Z"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 1.06885H3.34375"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
      />
      <path
        d="M1 2.94385H3.34375"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
      />
      <path
        d="M1 4.81885H3.34375"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
      />
      <path
        d="M10.0938 9.0376H12.4375"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
      />
      <path
        d="M8.03125 0.600098H14.5938L13.6562 11.8501H8.96875L8.03125 0.600098Z"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.90625 13.7251H12.7188L13.6562 11.8501H8.96875L9.90625 13.7251Z"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.90625 13.7251H12.7188V15.4001H9.90625V13.7251Z"
        stroke={colorStyle}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.9063 3.8814C10.2813 3.1314 11.4233 4.35015 11.4233 4.35015C11.4233 4.35015 12.3641 3.66226 12.7187 3.88138C13.3153 4.24998 12.3607 7.16263 12.3607 7.16263L11.4233 6.22515L10.4857 7.16263C10.3295 6.85013 9.5313 4.6314 9.9063 3.8814Z"
        stroke={colorStyle}
        stroke-width="0.9375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Brush;
