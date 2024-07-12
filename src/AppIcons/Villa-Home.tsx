import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const VillaHome: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M1.33325 14.6667H14.6666"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.96655 14.6668L1.99989 6.64674C1.99989 6.24007 2.19322 5.85344 2.51322 5.60011L7.17989 1.96677C7.65989 1.59343 8.33322 1.59343 8.81989 1.96677L13.4866 5.59344C13.8132 5.84677 13.9999 6.23341 13.9999 6.64674V14.6668"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M8.66659 11.3333H7.33325C6.77992 11.3333 6.33325 11.7799 6.33325 12.3333V14.6666H9.66659V12.3333C9.66659 11.7799 9.21992 11.3333 8.66659 11.3333Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M6.33325 9.16659H4.99992C4.63325 9.16659 4.33325 8.86659 4.33325 8.49992V7.49992C4.33325 7.13325 4.63325 6.83325 4.99992 6.83325H6.33325C6.69992 6.83325 6.99992 7.13325 6.99992 7.49992V8.49992C6.99992 8.86659 6.69992 9.16659 6.33325 9.16659Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M11 9.16659H9.66667C9.3 9.16659 9 8.86659 9 8.49992V7.49992C9 7.13325 9.3 6.83325 9.66667 6.83325H11C11.3667 6.83325 11.6667 7.13325 11.6667 7.49992V8.49992C11.6667 8.86659 11.3667 9.16659 11 9.16659Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M12.6667 4.66675L12.6467 2.66675H9.71338"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default VillaHome;
