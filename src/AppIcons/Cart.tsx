import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Cart: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M2.76874 1.9771L14.4155 3.12358C14.9609 3.17727 15.3615 3.65996 15.3137 4.20593L15.1056 6.58398C15.0663 7.03298 14.7315 7.40021 14.2881 7.48073L4.71495 9.21887M0.746094 0.596191L1.9143 0.838959C2.30099 0.919318 2.60415 1.21974 2.68803 1.60568L4.90459 11.8053C5.00449 12.265 5.41133 12.593 5.88178 12.593H15.1783"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <circle
        cx="4.85026"
        cy="14.9606"
        r="0.6"
        fill={colorStyle}
        stroke={colorStyle}
        stroke-width="0.852078"
      />
      <circle
        cx="12.4269"
        cy="14.9606"
        r="0.6"
        fill={colorStyle}
        stroke={colorStyle}
        stroke-width="0.852078"
      />
    </svg>
  );
};

export default Cart;
