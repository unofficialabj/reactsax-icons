import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Note: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M15.4001 6.99998V12.4C15.4001 14.0568 14.057 15.4 12.4001 15.4H3.6001C1.94325 15.4 0.600098 14.0568 0.600098 12.4V3.59998C0.600098 1.94312 1.94324 0.599976 3.6001 0.599976H9.0001M15.4001 6.99998L9.0001 0.599976M15.4001 6.99998H12.0001C10.3432 6.99998 9.0001 5.65683 9.0001 3.99998V0.599976"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 9L8 9"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M3 12L11 12"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Note;
