import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Chat: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M2.8097 6.94185C2.65335 7.01512 2.50142 7.09833 2.35483 7.1914C2.33828 7.02225 2.32827 6.85864 2.32827 6.69332C2.32827 6.67382 2.32837 6.65435 2.32857 6.63489C2.36983 6.70913 2.42698 6.77488 2.49753 6.82677C2.59011 6.89485 2.69857 6.9338 2.8097 6.94185ZM12.8587 11.6061C12.8598 11.6053 12.8609 11.6046 12.862 11.6038C12.861 11.6058 12.8601 11.6079 12.8592 11.61L12.8587 11.6061ZM12.5976 13.6919L12.5887 13.6864C12.5917 13.6883 12.5947 13.6901 12.5976 13.6919ZM7.94624 12.7283C8.06151 12.5884 8.16531 12.4428 8.25739 12.2922C8.26269 12.3988 8.29641 12.5039 8.35779 12.5958C8.40942 12.673 8.47719 12.7358 8.55482 12.781C8.34515 12.7718 8.14081 12.7549 7.94624 12.7283Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M2.24942 15.3336L2.24668 15.3318C2.15175 15.2707 2.08863 15.185 2.06126 15.0872C2.10741 15.1695 2.17318 15.2414 2.25515 15.2953C2.34564 15.3547 2.4484 15.3874 2.55244 15.393C2.52657 15.3977 2.50006 15.4 2.47297 15.4C2.39223 15.4 2.32044 15.3799 2.24942 15.3336Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M6 5H12"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M8 8L12 8"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M3 9.5H6"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M4 11.5L6 11.5"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Chat;
