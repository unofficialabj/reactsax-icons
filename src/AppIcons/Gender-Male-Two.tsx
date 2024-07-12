import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const GenderMaleTwo: FC<IconProps> = ({ size, color, ...props }) => {
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
        cx="4"
        cy="2.3999"
        r="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M1 6.53518C1 6.20083 1.1671 5.8886 1.4453 5.70313L3.4453 4.3698C3.7812 4.14587 4.2188 4.14587 4.5547 4.3698L6.5547 5.70313C6.8329 5.8886 7 6.20083 7 6.53518V9.97697C7 10.3046 6.83951 10.6115 6.5704 10.7983L5.6296 11.4517C5.36049 11.6385 5.2 11.9454 5.2 12.273V14.6C5.2 14.8209 5.02091 15 4.8 15H3.2C2.97909 15 2.8 14.8209 2.8 14.6V12.273C2.8 11.9454 2.63951 11.6385 2.3704 11.4517L1.4296 10.7983C1.16049 10.6115 1 10.3046 1 9.97697V6.53518Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default GenderMaleTwo;
