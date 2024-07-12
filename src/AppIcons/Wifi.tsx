import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Wifi: FC<IconProps> = ({ size, color, ...props }) => {
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
      <circle
        cx="7.99948"
        cy="12.9402"
        r="0.619604"
        fill={colorStyle}
        stroke={colorStyle}
        stroke-width="0.165519"
      />
      <path
        d="M9.87181 9.96828C9.33 9.62634 8.68816 9.42847 8.00012 9.42847C7.31207 9.42847 6.67024 9.62634 6.12842 9.96828"
        stroke={colorStyle}
        stroke-width="1.23921"
        stroke-linecap="round"
      />
      <path
        d="M12.6899 6.80086C11.3893 5.8055 9.76308 5.21411 7.99877 5.21411C6.23445 5.21411 4.60826 5.8055 3.30762 6.80086"
        stroke={colorStyle}
        stroke-width="1.23921"
        stroke-linecap="round"
      />
      <path
        d="M15.3468 3.52826C13.3207 1.94412 10.7699 1 7.99861 1C5.22733 1 2.67656 1.94412 0.650391 3.52826"
        stroke={colorStyle}
        stroke-width="1.23921"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Wifi;
