import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Bag: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M1.92359 4.31686C1.96678 3.79856 2.40004 3.3999 2.92013 3.3999H13.0799C13.6 3.3999 14.0332 3.79856 14.0764 4.31686L14.8195 13.2338C14.9167 14.3998 13.9965 15.3999 12.8264 15.3999H3.1736C2.00352 15.3999 1.08334 14.3999 1.18051 13.2338L1.92359 4.31686Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10.1425 8.58579L7.31412 11.4142L5.8999 10"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 5.1001V3.6001C11 1.94324 9.65685 0.600098 8 0.600098V0.600098C6.34315 0.600098 5 1.94324 5 3.6001V5.1001"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Bag;
