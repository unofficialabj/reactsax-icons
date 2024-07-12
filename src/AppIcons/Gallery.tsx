import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Gallery: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M5.7801 15.4001H10.2201C13.9201 15.4001 15.4001 13.9201 15.4001 10.2201V5.7801C15.4001 2.0801 13.9201 0.600098 10.2201 0.600098H5.7801C2.0801 0.600098 0.600098 2.0801 0.600098 5.7801V10.2201C0.600098 13.9201 2.0801 15.4001 5.7801 15.4001Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.78005 6.52006C6.59743 6.52006 7.26005 5.85744 7.26005 5.04006C7.26005 4.22268 6.59743 3.56006 5.78005 3.56006C4.96267 3.56006 4.30005 4.22268 4.30005 5.04006C4.30005 5.85744 4.96267 6.52006 5.78005 6.52006Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.0957 13.1431L4.7439 10.6937C5.3285 10.3015 6.1721 10.3459 6.6975 10.7973L6.9417 11.0119C7.5189 11.5077 8.4513 11.5077 9.0285 11.0119L12.1069 8.37014C12.6841 7.87434 13.6165 7.87434 14.1937 8.37014L15.3999 9.40614"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gallery;
