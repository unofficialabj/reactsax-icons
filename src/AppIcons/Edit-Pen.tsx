import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const EditPen: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M11.6785 1.24977C11.8718 1.05649 12.1013 0.903176 12.3538 0.798575C12.6063 0.693974 12.877 0.640137 13.1503 0.640137C13.4236 0.640137 13.6943 0.693974 13.9468 0.798575C14.1994 0.903176 14.4288 1.05649 14.6221 1.24977C14.8154 1.44305 14.9687 1.6725 15.0733 1.92503C15.1779 2.17756 15.2317 2.44822 15.2317 2.72156C15.2317 2.99489 15.1779 3.26555 15.0733 3.51808C14.9687 3.77061 14.8154 4.00006 14.6221 4.19334L4.68755 14.1279L0.640137 15.2317L1.74398 11.1843L11.6785 1.24977Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EditPen;
