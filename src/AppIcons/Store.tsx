import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Store: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M14.5 7V11.4C14.5 13.6091 12.7091 15.4 10.5 15.4H5.5C3.29086 15.4 1.5 13.6091 1.5 11.4V7"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M6 13.3999C6 12.2953 6.89543 11.3999 8 11.3999V11.3999C9.10457 11.3999 10 12.2953 10 13.3999V15.3999H6V13.3999Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M0.997284 2.37301C1.11273 1.36288 1.96765 0.600098 2.98435 0.600098H6.5L5.81465 5.39757C5.6341 6.66137 4.55174 7.6001 3.27511 7.6001V7.6001C1.74293 7.6001 0.552398 6.26576 0.726372 4.74349L0.997284 2.37301Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M6.5 0.600098H9.5L10.1464 5.12523C10.333 6.43145 9.31948 7.6001 8 7.6001V7.6001C6.68052 7.6001 5.66695 6.43144 5.85355 5.12522L6.5 0.600098Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M9.5 0.600098H13.0156C14.0323 0.600098 14.8872 1.36288 15.0026 2.373L15.2735 4.74354C15.4475 6.26578 14.257 7.6001 12.7249 7.6001V7.6001C11.4482 7.6001 10.3659 6.66139 10.1854 5.39761L9.5 0.600098Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Store;
