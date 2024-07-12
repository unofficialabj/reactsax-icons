import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const PaperClip: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M10.435 4.42139L4.23505 10.7256C4.02979 10.9521 3.91951 11.2489 3.92704 11.5545C3.93456 11.8601 4.05932 12.1511 4.27547 12.3673C4.49163 12.5834 4.78264 12.7082 5.08824 12.7157C5.39384 12.7232 5.69063 12.613 5.91717 12.4077L13.308 4.91262C13.7186 4.45955 13.9391 3.86597 13.9241 3.25477C13.909 2.64357 13.6595 2.06156 13.2272 1.62924C12.7949 1.19692 12.2129 0.947411 11.6017 0.932363C10.9905 0.917314 10.3969 1.13788 9.94381 1.5484L2.55294 9.04347C1.88376 9.71266 1.50781 10.6203 1.50781 11.5666C1.50781 12.513 1.88376 13.4206 2.55294 14.0898C3.22213 14.759 4.12974 15.1349 5.07611 15.1349C6.02248 15.1349 6.93009 14.759 7.59928 14.0898L13.71 7.99401"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PaperClip;
