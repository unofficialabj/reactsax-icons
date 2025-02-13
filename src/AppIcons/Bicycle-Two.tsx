import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const BicycleTwo: FC<IconProps> = ({ size, color, ...props }) => {
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
      <g clip-path="url(#clip0_4101_1183)">
        <rect
          x="4.39014"
          y="0.5"
          width="4"
          height="4.00036"
          rx="1"
          transform="rotate(45 4.39014 0.5)"
          stroke={colorStyle}
        />
        <path
          d="M13 14.5615C14.3807 14.5615 15.5 13.4422 15.5 12.0615C15.5 10.6808 14.3807 9.56152 13 9.56152C11.6193 9.56152 10.5 10.6808 10.5 12.0615C10.5 13.4422 11.6193 14.5615 13 14.5615Z"
          stroke={colorStyle}
        />
        <path
          d="M3 14.5615C4.38071 14.5615 5.5 13.4422 5.5 12.0615C5.5 10.6808 4.38071 9.56152 3 9.56152C1.61929 9.56152 0.5 10.6808 0.5 12.0615C0.5 13.4422 1.61929 14.5615 3 14.5615Z"
          stroke={colorStyle}
        />
        <path
          d="M8.14184 4.19189C8.01178 4.19249 7.88705 4.24888 7.79419 4.34908L5.15682 7.09716C5.10393 7.15204 5.06256 7.21895 5.03561 7.29323C5.00865 7.36752 4.99676 7.44738 5.00076 7.52724C5.00475 7.6071 5.02454 7.68505 5.05874 7.75563C5.09294 7.8262 5.14073 7.88772 5.19877 7.93587L6.92524 9.35984C6.9713 9.39783 6.99798 9.45442 6.99798 9.51413V12.4427C6.98799 13.1858 8.00698 13.1858 7.99699 12.4427V9.14503C7.99699 9.0597 7.97893 8.97555 7.94425 8.89923C7.90957 8.82292 7.85922 8.75653 7.79719 8.70533L7.19684 8.20839C7.10727 8.13425 7.09958 7.99963 7.18013 7.91578L8.67649 6.35805C8.76446 6.26648 8.91439 6.279 8.98595 6.38391L9.5954 7.27743C9.64203 7.34549 9.7024 7.40068 9.77176 7.43865C9.84111 7.47661 9.91754 7.49631 9.995 7.49618H11.4935C12.1688 7.50717 12.1688 6.38596 11.4935 6.39695H10.3505C10.2843 6.39695 10.2225 6.36425 10.1852 6.3096L9.49549 5.29772L8.89609 4.41834C8.85182 4.35118 8.79432 4.29593 8.72788 4.25671C8.66144 4.2175 8.5878 4.19534 8.51247 4.19189H8.14184Z"
          fill={colorStyle}
        />
        <circle cx="10" cy="3" r="1" fill={colorStyle} />
      </g>
      <defs>
        <clipPath id="clip0_4101_1183">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BicycleTwo;
