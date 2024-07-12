import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const ThumbUp: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M5.9388 13H12.0594C12.3224 12.9997 12.5792 12.9298 12.7963 12.7994C13.0133 12.6689 13.1806 12.4841 13.2761 12.2689L15.3077 8.03802C15.3697 7.8981 15.4011 7.74918 15.4004 7.59903V6.39282C15.4004 5.73366 14.7955 4.9992 14.0544 4.9992H9.81395L10.4546 2.45272L10.4762 2.2653C10.4761 2.02811 10.37 1.80041 10.1808 1.63113L9.46209 1L4.97818 4.97928C4.72587 5.20535 4.58521 5.50965 4.5867 5.82619V11.8252C4.58721 11.9804 4.62262 12.134 4.69093 12.2771C4.75923 12.4203 4.85907 12.5501 4.98471 12.6593C5.11035 12.7685 5.25931 12.8548 5.42305 12.9132C5.58678 12.9717 5.76205 13.0012 5.9388 13V13Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M0.600176 6.00081H2.87866V13H0.600176V6.00081Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ThumbUp;
