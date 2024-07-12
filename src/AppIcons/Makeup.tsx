import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Makeup: FC<IconProps> = ({ size, color, ...props }) => {
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
      <ellipse
        cx="1.03227"
        cy="2.06138"
        rx="1.03227"
        ry="2.06138"
        transform="matrix(0.872874 0.487946 -0.761505 0.648159 9.10376 0.280273)"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10.2811 1.00024V7.40024H6.51196V3.20024"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <rect
        x="5.28564"
        y="7.3999"
        width="6.42857"
        height="4"
        rx="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="4"
        y="11.3999"
        width="9"
        height="4"
        rx="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Makeup;
