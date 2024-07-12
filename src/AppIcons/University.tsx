import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Star: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M8 1.33325C9.06667 1.75992 10.2667 1.75992 11.3333 1.33325V3.33325C10.2667 3.75992 9.06667 3.75992 8 3.33325V1.33325Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 3.33325V5.33325"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3334 5.33325H4.66675C3.33341 5.33325 2.66675 5.99992 2.66675 7.33325V14.6666H13.3334V7.33325C13.3334 5.99992 12.6667 5.33325 11.3334 5.33325Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.05347 8H12.9468"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.3269 8V14.6667"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M7.99341 8V14.6667"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M10.6602 8V14.6667"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Star;
