import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Logout: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M6.40006 15.4001H2.20009C1.77574 15.4001 1.36878 15.2268 1.06872 14.9185C0.768667 14.6101 0.600098 14.1918 0.600098 13.7557V2.24454C0.600098 1.80841 0.768667 1.39014 1.06872 1.08174C1.36878 0.773351 1.77574 0.600098 2.20009 0.600098H6.40006"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.4004 11.9999L15.4004 7.99997L11.4004 4"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3997 8H5.7998"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Logout;
