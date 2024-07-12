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
        x="2"
        y="0.600098"
        width="12"
        height="14.8"
        rx="2"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <rect
        x="4"
        y="2.3999"
        width="8"
        height="3"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <rect
        x="4"
        y="8"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="4"
        y="10.5"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="4"
        y="13"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="7.49097"
        y="8"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="7.49097"
        y="10.5"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="7.49097"
        y="13"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="10.9817"
        y="8"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="10.9817"
        y="10.5"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
      <rect
        x="10.9817"
        y="13"
        width="1.01818"
        height="0.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="16"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Profile;
