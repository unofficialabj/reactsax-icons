import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Voucher: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M13.4001 14H2.6001C2.06966 14 1.56096 13.7893 1.18588 13.4142C0.810811 13.0391 0.600098 12.5304 0.600098 12V10.9821C0.600098 10.713 0.815203 10.4974 1.07715 10.436C1.54256 10.327 1.97037 10.0855 2.3061 9.73576C2.75399 9.2692 3.00287 8.64674 3.0001 8C3.00261 7.35333 2.75365 6.73101 2.30581 6.26451C1.9701 5.91481 1.54233 5.6732 1.07695 5.56408C0.815086 5.50269 0.600098 5.28709 0.600098 5.01813L0.600098 4C0.600098 3.46957 0.810811 2.96086 1.18588 2.58579C1.56096 2.21071 2.06966 2 2.6001 2H13.4001C13.9305 2 14.4392 2.21071 14.8143 2.58579C15.1894 2.96086 15.4001 3.46957 15.4001 4V5C15.4001 5.27614 15.174 5.49496 14.9034 5.54983C14.4254 5.64673 13.9823 5.88223 13.6323 6.23223C13.1635 6.70107 12.9001 7.33696 12.9001 8C12.9001 8.66304 13.1635 9.29893 13.6323 9.76777C13.9823 10.1178 14.4254 10.3533 14.9034 10.4502C15.174 10.505 15.4001 10.7239 15.4001 11V12C15.4001 12.5304 15.1894 13.0391 14.8143 13.4142C14.4392 13.7893 13.9305 14 13.4001 14Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <rect
        x="5.6"
        y="5.6"
        width="1.39459"
        height="1.39459"
        rx="0.697297"
        fill={colorStyle}
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M9.08708 5.94882C9.27962 5.61537 9.7061 5.50108 10.0396 5.69363C10.3732 5.88617 10.4874 6.31253 10.2949 6.64594L8.32865 10.0512C8.13611 10.3846 7.70964 10.4989 7.37609 10.3064C7.04258 10.1138 6.92835 9.68747 7.12087 9.35406L9.08708 5.94882Z"
        fill={colorStyle}
        stroke={colorStyle}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Voucher;
