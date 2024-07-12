import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Car: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M12.7001 14H13.4001C14.5047 14 15.4001 13.1046 15.4001 12V8.96444C15.4001 8.65888 15.3301 8.35738 15.1954 8.08309L13.2493 4.11865C12.9131 3.43391 12.2167 3 11.4539 3H10.3501M9.8501 14H8.0001H6.1501M3.3001 14H2.6001C1.49553 14 0.600098 13.1046 0.600098 12V8.5"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M0.600098 2.6001C0.600098 1.49553 1.49553 0.600098 2.6001 0.600098H9.4001C9.95238 0.600098 10.4001 1.04781 10.4001 1.6001V7.6001C10.4001 8.70467 9.50467 9.6001 8.4001 9.6001H0.600098V2.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M13.6001 9.6001H14.5817C15.0337 9.6001 15.4001 9.23367 15.4001 8.78167C15.4001 8.66207 15.3739 8.54394 15.3233 8.43556L14.2304 6.0937C14.0899 5.79257 13.7877 5.6001 13.4554 5.6001C12.983 5.6001 12.6001 5.98303 12.6001 6.45539V8.6001C12.6001 9.15238 13.0478 9.6001 13.6001 9.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M5 15.3999C5.82843 15.3999 6.5 14.7283 6.5 13.8999C6.5 13.0715 5.82843 12.3999 5 12.3999C4.17157 12.3999 3.5 13.0715 3.5 13.8999C3.5 14.7283 4.17157 15.3999 5 15.3999Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M11 15.3999C11.8284 15.3999 12.5 14.7283 12.5 13.8999C12.5 13.0715 11.8284 12.3999 11 12.3999C10.1716 12.3999 9.5 13.0715 9.5 13.8999C9.5 14.7283 10.1716 15.3999 11 15.3999Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Car;
