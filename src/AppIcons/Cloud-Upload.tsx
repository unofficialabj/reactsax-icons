import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const CloudUpload: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M11.2508 12.3166C12.1961 12.3236 13.1061 11.9709 13.8045 11.336C16.1113 9.31848 14.8767 5.26927 11.8363 4.88833C10.7499 -1.70046 1.24769 0.796792 3.49803 7.06813"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66916 7.35748C4.29528 7.16701 3.87907 7.06825 3.46286 7.0753C0.175521 7.3081 0.182575 12.091 3.46286 12.3238"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6936 5.18462C11.0604 5.0012 11.4555 4.90244 11.8646 4.89539"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.27222 13.7275V8.90576M7.27222 8.90576L5.67798 10.5M7.27222 8.90576L8.86646 10.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloudUpload;
