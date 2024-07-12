import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const QuestionMark: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M15.3499 7.9999C15.3499 3.94061 12.0592 0.649902 7.9999 0.649902C3.94061 0.649902 0.649902 3.94061 0.649902 7.9999C0.649902 12.0592 3.94061 15.3499 7.9999 15.3499C12.0592 15.3499 15.3499 12.0592 15.3499 7.9999Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-miterlimit="10"
      />
      <circle cx="8.00659" cy="11.8916" r="0.75" fill={colorStyle} />
      <path
        d="M5.75879 6.22774C5.75867 5.03383 6.5639 3.86769 8.14653 3.86768C9.72917 3.86766 10.7478 5.44579 9.97906 6.92187C9.28492 8.25461 7.97994 8.64266 7.97994 10.1427"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default QuestionMark;
