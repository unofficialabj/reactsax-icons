import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const GenderFaceFemale: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M1.19385 7.6001C1.19385 3.73411 4.32785 0.600098 8.19385 0.600098C12.0598 0.600098 15.1938 3.7341 15.1938 7.6001V12.4001C15.1938 14.0569 13.8507 15.4001 12.1938 15.4001H4.19385C2.53699 15.4001 1.19385 14.057 1.19385 12.4001V7.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M4.19385 6.6001V9.4001C4.19385 11.6092 5.98471 13.4001 8.19385 13.4001C10.403 13.4001 12.1938 11.6092 12.1938 9.4001V7.6001C12.1938 7.54487 12.1491 7.5001 12.0938 7.5001L11.1939 7.5001C9.537 7.50011 8.19385 6.15697 8.19385 4.5001V3.7001C8.19385 3.64487 8.14908 3.6001 8.09385 3.6001H7.19385C5.53699 3.6001 4.19385 4.94325 4.19385 6.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default GenderFaceFemale;
