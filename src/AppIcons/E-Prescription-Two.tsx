import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const EPrescriptionTwo: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M2.6001 15.4001C2.06966 15.4001 1.56096 15.1894 1.18588 14.8143C0.810811 14.4392 0.600098 13.9305 0.600098 13.4001V4.6001C0.600098 4.06966 0.810811 3.56096 1.18588 3.18588C1.56096 2.81081 2.06966 2.6001 2.6001 2.6001H3.8671C4.04271 2.29592 4.29534 2.04335 4.59956 1.86781C4.87485 1.70896 5.1836 1.61825 5.50009 1.60255C5.55527 1.59982 5.59958 1.55518 5.6051 1.50021C5.62803 1.27168 5.72915 1.05684 5.89299 0.892991C6.08053 0.705455 6.33488 0.600098 6.6001 0.600098H7.4001C7.53142 0.600098 7.66146 0.625963 7.78278 0.676218C7.90411 0.726473 8.01435 0.800132 8.1072 0.892991C8.20006 0.985849 8.27372 1.09609 8.32398 1.21741C8.36145 1.30788 8.38536 1.40319 8.3951 1.50027C8.40062 1.55522 8.4449 1.59984 8.50006 1.6026C8.81639 1.61844 9.12495 1.70922 9.40007 1.86806C9.7041 2.0436 9.95656 2.29607 10.1321 2.6001H11.4001C11.9305 2.6001 12.4392 2.81081 12.8143 3.18588C13.1894 3.56096 13.4001 4.06966 13.4001 4.6001V13.4001C13.4001 13.9305 13.1894 14.4392 12.8143 14.8143C12.4392 15.1894 11.9305 15.4001 11.4001 15.4001H2.6001Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10.4001 2.6001C10.4001 3.70467 9.50467 4.6001 8.4001 4.6001H5.6001C4.49553 4.6001 3.6001 3.70467 3.6001 2.6001"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M3 8.27297H5L6.5 7.00024L8 9.00024L9 7.5457L9.5 8.27297H11"
        stroke={colorStyle}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 11.4001H9"
        stroke={colorStyle}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 13.4001H7"
        stroke={colorStyle}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EPrescriptionTwo;
