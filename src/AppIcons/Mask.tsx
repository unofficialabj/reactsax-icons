import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Mask: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M5 7.5L6.10263 7.86754C7.33423 8.27808 8.66577 8.27808 9.89737 7.86754L11 7.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M5 9.5L6.10263 9.86754C7.33423 10.2781 8.66577 10.2781 9.89737 9.86754L11 9.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M3 6L5.22482 5.11007C5.40728 5.03709 5.57798 4.93761 5.73143 4.81486L6.75061 3.99951C7.48105 3.41516 8.51895 3.41516 9.24939 3.99951L10.2686 4.81486C10.422 4.93761 10.5927 5.03709 10.7752 5.11007L13 6V10.4338C13 10.7851 12.8157 11.1106 12.5145 11.2913L11.087 12.1478C9.18688 13.2879 6.81312 13.2879 4.91303 12.1478L3.4855 11.2913C3.1843 11.1106 3 10.7851 3 10.4338V6Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M13 6.4L13.6929 5.70711C14.3229 5.07714 15.4 5.52331 15.4 6.41421V9C15.4 9.55228 14.9523 10 14.4 10H13V6.4Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M3 6.4L2.30711 5.70711C1.67714 5.07714 0.6 5.52331 0.6 6.41421V9C0.6 9.55228 1.04772 10 1.6 10H3V6.4Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Mask;
