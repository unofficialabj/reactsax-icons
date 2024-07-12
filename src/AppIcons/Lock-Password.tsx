import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const LockPassword: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M3.65869 6.55288V5.10576C3.65869 2.71078 4.38225 0.764404 8.00005 0.764404C11.6178 0.764404 12.3414 2.71078 12.3414 5.10576V6.55288"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6178 15.2356H4.3822C1.48796 15.2356 0.764404 14.512 0.764404 11.6178V10.1707C0.764404 7.27642 1.48796 6.55286 4.3822 6.55286H11.6178C14.512 6.55286 15.2356 7.27642 15.2356 10.1707V11.6178C15.2356 14.512 14.512 15.2356 11.6178 15.2356Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <mask id="path-3-inside-1_4101_1387" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.8917 10.8943H10.8982H10.8917Z"
        />
      </mask>
      <path
        d="M10.8917 9.89425C10.3395 9.89425 9.89174 10.342 9.89174 10.8943C9.89174 11.4465 10.3395 11.8943 10.8917 11.8943V9.89425ZM10.8982 11.8943C11.4505 11.8943 11.8982 11.4465 11.8982 10.8943C11.8982 10.342 11.4505 9.89425 10.8982 9.89425V11.8943ZM10.8917 11.8943H10.8982V9.89425H10.8917V11.8943Z"
        fill={colorStyle}
        mask="url(#path-3-inside-1_4101_1387)"
      />
      <mask id="path-5-inside-2_4101_1387" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.99672 10.8943H8.00322H7.99672Z"
        />
      </mask>
      <path
        d="M7.99672 9.89425C7.44444 9.89425 6.99672 10.342 6.99672 10.8943C6.99672 11.4465 7.44444 11.8943 7.99672 11.8943V9.89425ZM8.00322 11.8943C8.55551 11.8943 9.00322 11.4465 9.00322 10.8943C9.00322 10.342 8.55551 9.89425 8.00322 9.89425V11.8943ZM7.99672 11.8943H8.00322V9.89425H7.99672V11.8943Z"
        fill={colorStyle}
        mask="url(#path-5-inside-2_4101_1387)"
      />
      <mask id="path-7-inside-3_4101_1387" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.1017 10.8943H5.1082H5.1017Z"
        />
      </mask>
      <path
        d="M5.1017 9.89425C4.54942 9.89425 4.1017 10.342 4.1017 10.8943C4.1017 11.4465 4.54942 11.8943 5.1017 11.8943V9.89425ZM5.1082 11.8943C5.66049 11.8943 6.1082 11.4465 6.1082 10.8943C6.1082 10.342 5.66049 9.89425 5.1082 9.89425V11.8943ZM5.1017 11.8943H5.1082V9.89425H5.1017V11.8943Z"
        fill={colorStyle}
        mask="url(#path-7-inside-3_4101_1387)"
      />
    </svg>
  );
};

export default LockPassword;
