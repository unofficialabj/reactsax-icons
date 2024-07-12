import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const DoctorEarphone: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M6.78571 1H7.75V1C8.93026 1 9.83026 2.05619 9.64297 3.22149L8.98471 7.31736C8.82888 8.28698 7.99211 9 7.01005 9H3.98995C3.00788 9 2.17112 8.28698 2.01529 7.31736L1.35703 3.22149C1.16974 2.05619 2.06974 1 3.25 1V1H4.21429"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M5.37378 9.17647V12C5.37378 13.6569 6.71692 15 8.37378 15H9.99994C11.6568 15 12.9999 13.6569 12.9999 12V6"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <circle cx="13" cy="5" r="1.4" stroke={colorStyle} stroke-width="1.2" />
      <rect
        x="6.18774"
        y="0.237915"
        width="1.42282"
        height="1.5"
        rx="0.711411"
        fill={colorStyle}
      />
      <rect
        x="3.40063"
        y="0.237915"
        width="1.42282"
        height="1.5"
        rx="0.711411"
        fill={colorStyle}
      />
    </svg>
  );
};

export default DoctorEarphone;
