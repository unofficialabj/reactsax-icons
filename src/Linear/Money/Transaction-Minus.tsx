import React, { FC } from "react";
import { IconProps } from "../../types";
import { useTheme } from "../../ThemeProvider";

const TransactionMinus: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M6.72827 19.7C7.54827 18.82 8.79828 18.89 9.51828 19.85L10.5283 21.2C11.3383 22.27 12.6483 22.27 13.4583 21.2L14.4683 19.85C15.1883 18.89 16.4383 18.82 17.2583 19.7C19.0383 21.6 20.4883 20.97 20.4883 18.31V7.04C20.4883 3.01 19.5483 2 15.7683 2H8.20828C4.42828 2 3.48828 3.01 3.48828 7.04V18.3C3.49828 20.97 4.95827 21.59 6.72827 19.7Z"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.25 10H14.75"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TransactionMinus;
