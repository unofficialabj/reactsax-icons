import React, { FC } from "react";
import { IconProps } from "../../types";
import { useTheme } from "../../ThemeProvider";

const CardRemove: FC<IconProps> = ({ size, color }) => {
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
    >
      <path
        d="M1.89844 10.0303H21.8984"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.4584 20.53H6.34839C2.79839 20.53 1.89844 19.65 1.89844 16.14V7.92004C1.89844 4.74004 2.63841 3.72004 5.42841 3.56004C5.70841 3.55004 6.01839 3.54004 6.34839 3.54004H17.4584C21.0084 3.54004 21.9084 4.42004 21.9084 7.93004V12.34"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.8984 22.0303C20.1076 22.0303 21.8984 20.2394 21.8984 18.0303C21.8984 15.8211 20.1076 14.0303 17.8984 14.0303C15.6893 14.0303 13.8984 15.8211 13.8984 18.0303C13.8984 20.2394 15.6893 22.0303 17.8984 22.0303Z"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.9694 19.1503L16.8594 17.0303"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.9481 17.0603L16.8281 19.1703"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.89844 16.0303H9.89844"
        stroke={colorStyle}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CardRemove;
