import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Box: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M6.62352 0.96092C7.48706 0.514954 8.51314 0.514954 9.37668 0.96092L11.7001 2.16082L13.7987 3.28514C14.7652 3.80297 15.3722 4.80688 15.3818 5.90336L15.4001 8L15.3818 10.0966C15.3722 11.1931 14.7652 12.197 13.7987 12.7149L11.7001 13.8392L9.37668 15.0391C8.51314 15.485 7.48706 15.485 6.62352 15.0391L4.3001 13.8392L2.20153 12.7149C1.23498 12.197 0.627955 11.1931 0.618389 10.0966L0.600098 8L0.618389 5.90336C0.627955 4.80688 1.23498 3.80297 2.20153 3.28514L4.3001 2.16082L6.62352 0.96092Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M8.08545 15.1001V8.1001M8.08545 8.1001L14.5854 4.6001M8.08545 8.1001L1.08545 4.6001"
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Box;
