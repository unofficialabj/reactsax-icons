import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Baby: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M5.29611 3.70944C3.62676 4.65368 2.5 6.44526 2.5 8.50002C2.5 11.5376 4.96243 14 8 14C11.0376 14 13.5 11.5376 13.5 8.50002C13.5 5.72909 11.4509 3.43676 8.78536 3.05566"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M9.5 2.88885V3.48885C9.72734 3.48885 9.93516 3.36036 10.0368 3.15699C10.1384 2.95361 10.1163 2.71028 9.97974 2.52851L9.5 2.88885ZM7.72197 6.44426L7.72193 7.04426C7.94928 7.04428 8.15711 6.9158 8.25872 6.71242C8.36032 6.50904 8.33825 6.2657 8.20171 6.08392L7.72197 6.44426ZM9.49984 3.48885L9.5 3.48885V2.28885L9.49984 2.28885V3.48885ZM7.87771 5.11098C7.87771 4.21511 8.60396 3.48885 9.49984 3.48885V2.28885C7.94122 2.28885 6.67771 3.55236 6.67771 5.11098H7.87771ZM8.20171 6.08392C7.99811 5.81286 7.87771 5.47685 7.87771 5.11098H6.67771C6.67771 5.74562 6.88791 6.33289 7.24223 6.80461L8.20171 6.08392ZM7.72201 5.84426C6.82619 5.8442 6.1 5.11797 6.1 4.22213H4.9C4.9 5.78068 6.1634 7.04415 7.72193 7.04426L7.72201 5.84426ZM6.1 4.22213C6.1 3.32625 6.82625 2.6 7.72213 2.6V1.4C6.16351 1.4 4.9 2.66351 4.9 4.22213H6.1ZM7.72213 2.6C8.25245 2.6 8.7233 2.85385 9.02026 3.2492L9.97974 2.52851C9.46588 1.84439 8.64582 1.4 7.72213 1.4V2.6Z"
        fill={colorStyle}
      />
      <path
        d="M9.5 8C9.5 8 10 7.5 10.75 7.5C11.5 7.5 12 8 12 8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5 8C4.5 8 5 7.5 5.75 7.5C6.5 7.5 7 8 7 8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 11C9.5 11 9 11.5 8.25 11.5C7.5 11.5 7 11 7 11"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="13.5"
        y="7"
        width="1.8"
        height="3"
        rx="0.9"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="0.699951"
        y="7"
        width="1.8"
        height="2.7"
        rx="0.9"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Baby;
