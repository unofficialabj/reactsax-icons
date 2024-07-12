import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Profile: FC<IconProps> = ({ size, color, ...props }) => {
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
      <rect
        x="5"
        y="1"
        width="6"
        height="6"
        rx="3"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M14.6213 13.0483C15.0325 14.0735 14.1055 15 13.001 15C11.7304 15 9.95919 15 8 15C6.04081 15 4.26961 15 2.99902 15C1.89445 15 0.967456 14.0735 1.37867 13.0483C2.32353 10.6927 4.93114 9 8 9C11.0689 9 13.6765 10.6927 14.6213 13.0483Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Profile;
