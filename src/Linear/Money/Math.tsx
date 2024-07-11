import React, { FC } from "react";
import { IconProps } from "../../types";
import { useTheme } from "../../ThemeProvider";

const Math: FC<IconProps> = ({ size, color }) => {
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
    >
      <path
        d="M14.4207 5.63965H21.7007"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.29956 5.64014H9.57956"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4207 15.3301H21.7007"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4207 21.3896H21.7007"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0894 9.27V2"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.29956 22L9.57956 14.73"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.57956 22L2.29956 14.73"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Math;
