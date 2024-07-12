import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const DeliveryBox: FC<IconProps> = ({ size, color, ...props }) => {
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
      <g id="Group 5657">
        <path
          id="Star 2"
          d="M6.62278 0.96092C7.48633 0.514954 8.5124 0.514954 9.37595 0.96092L11.6994 2.16082L13.7979 3.28514C14.7645 3.80297 15.3715 4.80688 15.3811 5.90336L15.3994 8L15.3811 10.0966C15.3715 11.1931 14.7645 12.197 13.7979 12.7149L11.6994 13.8392L9.37595 15.0391C8.5124 15.485 7.48633 15.485 6.62278 15.0391L4.29937 13.8392L2.2008 12.7149C1.23425 12.197 0.627223 11.1931 0.617657 10.0966L0.599365 8L0.617657 5.90336C0.627223 4.80688 1.23425 3.80297 2.2008 3.28514L4.29937 2.16082L6.62278 0.96092Z"
          stroke={colorStyle}
          stroke-width="1.2"
        />
        <path
          id="Vector 49"
          d="M8.08472 15.1001V8.1001M8.08472 8.1001L14.5847 4.6001M8.08472 8.1001L1.08472 4.6001"
          stroke={colorStyle}
          stroke-width="1.2"
        />
        <path
          id="Vector 63"
          d="M4.5 2L12 6V9"
          stroke={colorStyle}
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default DeliveryBox;
