import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const GenderFaceChange: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M0.5625 11.075C0.5625 8.90033 2.32538 7.13745 4.5 7.13745V7.13745C6.67462 7.13745 8.4375 8.90033 8.4375 11.075V13.775C8.4375 14.7069 7.68198 15.4625 6.75 15.4625H2.25C1.31802 15.4625 0.5625 14.7069 0.5625 13.775V11.075Z"
        stroke={colorStyle}
      />
      <path
        d="M2.25 10.5125V12.0875C2.25 13.3301 3.25736 14.3375 4.5 14.3375C5.74264 14.3375 6.75 13.3301 6.75 12.0875V11.075C6.75 11.0439 6.72482 11.0187 6.69375 11.0187L6.18751 11.0187C5.25553 11.0187 4.5 10.2632 4.5 9.3312V8.8812C4.5 8.85014 4.47482 8.82495 4.44375 8.82495H3.9375C3.00552 8.82495 2.25 9.58047 2.25 10.5125Z"
        stroke={colorStyle}
      />
      <path
        d="M14.5797 4.3584V5.40903C14.5797 6.25513 14.2266 7.06283 13.6054 7.63737L12.8469 8.33901C12.6599 8.51197 12.4146 8.60805 12.1598 8.60805H10.9286C10.6739 8.60805 10.4285 8.51197 10.2415 8.339L9.48303 7.63737C8.86192 7.06283 8.50879 6.25514 8.50879 5.40905V4.4343"
        stroke={colorStyle}
      />
      <path
        d="M13.8205 1.57594L14.3265 1.07008C14.3265 1.07008 13.1085 0.528674 11.7969 0.564172C10.4854 0.599671 9.77326 1.32304 9.77326 1.32304C9.77326 1.32304 8.7327 0.817127 8.50854 2.33485C8.27837 3.41492 8.50857 4.86441 8.50857 4.86441C8.50857 4.86441 9.07965 4.36557 9.31802 3.95378C9.59675 3.47227 10.0263 2.84076 10.0263 2.84076C10.0263 2.84076 10.8221 3.27527 11.5439 3.34662C12.1975 3.41121 12.4145 2.93154 13.0617 3.04314C13.9995 3.20485 14.5795 4.86441 14.5795 4.86441L14.5795 3.04314C14.5795 2.31463 14.0904 1.72771 13.8205 1.57594Z"
        stroke={colorStyle}
        stroke-linejoin="round"
      />
      <path
        d="M3.75708 5.3999L3.75708 2.05185L5.81159 2.05185"
        stroke={colorStyle}
        stroke-width="0.999431"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75708 5.3999L4.91416 4.24282"
        stroke={colorStyle}
        stroke-width="0.999431"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75708 5.3999L2.6 4.24282"
        stroke={colorStyle}
        stroke-width="0.999431"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.655 11.052L12.655 14.4001L10.6005 14.4001"
        stroke={colorStyle}
        stroke-width="0.999431"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.655 11.052L11.4979 12.2091"
        stroke={colorStyle}
        stroke-width="0.999431"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.655 11.052L13.8121 12.2091"
        stroke={colorStyle}
        stroke-width="0.999431"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default GenderFaceChange;
