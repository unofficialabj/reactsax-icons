import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const GenderFaceMale: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M12.0562 7.74854V9.61633C12.0562 11.1205 11.4283 12.5564 10.3241 13.5778L8.97561 14.8252C8.64318 15.1327 8.207 15.3035 7.75417 15.3035H5.56534C5.11249 15.3035 4.67631 15.1327 4.34388 14.8252L2.99541 13.5778C1.89122 12.5564 1.26343 11.1205 1.26343 9.61637V7.88347"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10.7069 2.80167L11.6064 1.90236C11.6064 1.90236 9.44102 0.939865 7.10945 1.00297C4.77788 1.06608 3.51179 2.35206 3.51179 2.35206C3.51179 2.35206 1.6619 1.45267 1.26339 4.15085C0.854205 6.07096 1.26344 8.64785 1.26344 8.64785C1.26344 8.64785 2.27869 7.76101 2.70247 7.02894C3.19799 6.17293 3.96157 5.05024 3.96157 5.05024C3.96157 5.05024 5.37636 5.82271 6.65967 5.94954C7.82157 6.06438 8.20727 5.21163 9.35785 5.41003C11.025 5.69751 12.0562 8.64785 12.0562 8.64785L12.0562 5.41003C12.0562 4.1149 11.1866 3.07149 10.7069 2.80167Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default GenderFaceMale;
