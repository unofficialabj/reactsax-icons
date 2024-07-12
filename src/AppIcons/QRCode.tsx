import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const QRCode: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M9.8501 15.4001H11.7001V15.4001C13.7436 15.4001 15.4001 13.7436 15.4001 11.7001V11.7001V9.8501M6.1501 15.4001H4.3001V15.4001C2.25664 15.4001 0.600098 13.7436 0.600098 11.7001V11.7001V9.8501M0.600098 6.1501V4.3001V4.3001C0.600098 2.25664 2.25664 0.600098 4.3001 0.600098V0.600098H6.1501M15.4001 6.1501V4.3001V4.3001C15.4001 2.25664 13.7436 0.600098 11.7001 0.600098V0.600098H9.8501"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="3"
        y="3"
        width="4"
        height="4"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="9"
        y="3"
        width="4"
        height="4"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="3"
        y="9"
        width="4"
        height="4"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="9"
        y="9"
        width="4"
        height="4"
        rx="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default QRCode;
