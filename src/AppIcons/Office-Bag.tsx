import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const OfficeBag: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M5.33338 14.6667H10.6667C13.3467 14.6667 13.8267 13.5933 13.9667 12.2867L14.4667 6.95333C14.6467 5.32667 14.18 4 11.3334 4H4.66671C1.82005 4 1.35338 5.32667 1.53338 6.95333L2.03338 12.2867C2.17338 13.5933 2.65338 14.6667 5.33338 14.6667Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33325 3.99992V3.46659C5.33325 2.28659 5.33325 1.33325 7.46659 1.33325H8.53325C10.6666 1.33325 10.6666 2.28659 10.6666 3.46659V3.99992"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.33341 8.66667V9.33333C9.33341 9.34 9.33341 9.34 9.33341 9.34667C9.33341 10.0733 9.32675 10.6667 8.00008 10.6667C6.68008 10.6667 6.66675 10.08 6.66675 9.35333V8.66667C6.66675 8 6.66675 8 7.33341 8H8.66675C9.33341 8 9.33341 8 9.33341 8.66667Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4333 7.33325C12.8933 8.45325 11.1333 9.11992 9.33325 9.34659"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.74683 7.51343C3.24683 8.54009 4.94016 9.16009 6.66683 9.35343"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default OfficeBag;
