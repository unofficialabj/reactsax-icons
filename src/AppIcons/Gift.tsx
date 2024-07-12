import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Gift: FC<IconProps> = ({ size, color, ...props }) => {
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
        x="0.600098"
        y="2.80005"
        width="14.8"
        height="3.8"
        rx="1.5"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M8.05347 2.70703L11.2038 0.815015C11.6773 0.530669 12.2784 0.691621 12.5464 1.17451L13.5004 2.89329"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M7.94702 2.70703L4.79666 0.815015C4.3232 0.530669 3.72211 0.691621 3.45409 1.17451L2.50012 2.89329"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M6 6.6001H10V10.7545C10 11.1348 9.59227 11.3759 9.25904 11.1926L8.48191 10.7652C8.18183 10.6001 7.81817 10.6001 7.51809 10.7652L6.74095 11.1926C6.40773 11.3759 6 11.1348 6 10.7545V6.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M1.6001 6.6001H14.4001V13.4001C14.4001 14.5047 13.5047 15.4001 12.4001 15.4001H3.6001C2.49553 15.4001 1.6001 14.5047 1.6001 13.4001V6.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Gift;
