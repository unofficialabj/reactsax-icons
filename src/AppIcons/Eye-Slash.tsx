import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const EyeSlash: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M9.68661 6.31328L6.31328 9.68661C5.87995 9.25328 5.61328 8.65995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C8.65995 5.61328 9.25328 5.87995 9.68661 6.31328Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.8799 3.84657C10.7132 2.96657 9.3799 2.48657 7.9999 2.48657C5.64656 2.48657 3.45323 3.87324 1.92656 6.27324C1.32656 7.21324 1.32656 8.79324 1.92656 9.73324C2.45323 10.5599 3.06656 11.2732 3.73323 11.8466"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.61328 13.0202C6.37328 13.3402 7.17995 13.5135 7.99995 13.5135C10.3533 13.5135 12.5466 12.1269 14.0733 9.72687C14.6733 8.78687 14.6733 7.20686 14.0733 6.26687C13.8533 5.9202 13.6133 5.59353 13.3666 5.28687"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.34 8.4668C10.1666 9.4068 9.39996 10.1735 8.45996 10.3468"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.31325 9.68652L1.33325 14.6665"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6665 1.33325L9.68652 6.31325"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EyeSlash;
