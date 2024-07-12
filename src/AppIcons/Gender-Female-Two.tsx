import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const GenderFemaleTwo: FC<IconProps> = ({ size, color, ...props }) => {
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
      <circle
        cx="4"
        cy="2.3999"
        r="1.4"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M3.2652 4.79604C3.66116 4.36708 4.33884 4.36708 4.7348 4.79604L4.90333 4.97861C6.25142 6.43904 7 8.35364 7 10.3412V10.3412C7 10.7401 6.76011 11.1 6.39184 11.2534L5.44615 11.6474C5.29709 11.7095 5.2 11.8552 5.2 12.0167V14.6C5.2 14.8209 5.02091 15 4.8 15H3.2C2.97909 15 2.8 14.8209 2.8 14.6V12.0167C2.8 11.8552 2.7029 11.7095 2.55385 11.6474L1.60816 11.2534C1.23989 11.1 1 10.7401 1 10.3412V10.3412C1 8.35364 1.74858 6.43904 3.09667 4.97861L3.2652 4.79604Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default GenderFemaleTwo;
