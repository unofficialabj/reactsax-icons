import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const ApartmentHome: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M8.66659 11H7.33325C6.77992 11 6.33325 11.4467 6.33325 12V14.3333H9.66659V12C9.66659 11.4467 9.21992 11 8.66659 11Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M6.71343 1.87998L2.09343 5.57998C1.57343 5.99331 1.2401 6.86665 1.35343 7.51998L2.2401 12.8266C2.4001 13.7733 3.30676 14.54 4.26676 14.54H11.7334C12.6868 14.54 13.6001 13.7666 13.7601 12.8266L14.6468 7.51998C14.7534 6.86665 14.4201 5.99331 13.9068 5.57998L9.28676 1.88665C8.57343 1.31331 7.4201 1.31331 6.71343 1.87998Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ApartmentHome;
