import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const ThumbDown: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M10.0617 2.00004H3.94112C3.6781 2.00029 3.42129 2.0702 3.20422 2.20063C2.98715 2.33105 2.81993 2.51594 2.72439 2.73112L0.692789 6.96198C0.630793 7.1019 0.599353 7.25082 0.600111 7.40097V8.60718C0.600111 9.26634 1.20502 10.0008 1.94605 10.0008H6.18654L5.54587 12.5473L5.52433 12.7347C5.52441 12.9719 5.63045 13.1996 5.81967 13.3689L6.5384 14L11.0223 10.0207C11.2746 9.79465 11.4153 9.49035 11.4138 9.17381V3.17484C11.4133 3.01963 11.3779 2.86604 11.3096 2.72289C11.2413 2.57974 11.1414 2.44985 11.0158 2.34069C10.8901 2.23152 10.7412 2.14523 10.5774 2.08677C10.4137 2.02831 10.2384 1.99883 10.0617 2.00004Z"
        fill="white"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M15.4003 8.99919H13.1218V2H15.4003V8.99919Z"
        fill="white"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ThumbDown;
