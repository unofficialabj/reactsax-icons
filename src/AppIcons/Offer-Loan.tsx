import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const OfferLoan: FC<IconProps> = ({ size, color, ...props }) => {
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
      <mask
        id="mask0_4101_694"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect
          x="0.6"
          y="0.6"
          width="14.8"
          height="14.8"
          fill="#4D4D4D"
          stroke="#4D4D4D"
          stroke-width="1.2"
        />
      </mask>
      <g mask="url(#mask0_4101_694)">
        <path
          d="M9.33994 15.117L15.1153 9.34165C15.5053 8.95163 15.5059 8.31945 15.1166 7.92872L8.12802 0.914816C7.94038 0.726496 7.68548 0.620641 7.41963 0.620641L1.6215 0.620641C1.06923 0.620641 0.621524 1.06832 0.621495 1.62059L0.621194 7.47518C0.62118 7.74232 0.728059 7.99837 0.918001 8.18623L7.92964 15.1209C8.32078 15.5077 8.95094 15.506 9.33994 15.117Z"
          stroke={colorStyle}
          stroke-width="1.2"
        />
      </g>
      <circle
        cx="5.5"
        cy="8.01392"
        r="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <circle
        cx="10.5"
        cy="8.01392"
        r="1"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M7.73877 5.01147L8.2617 10.9886"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default OfferLoan;
