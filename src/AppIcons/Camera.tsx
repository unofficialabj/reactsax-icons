import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Camera: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M15.4001 13.4446C15.4001 13.6488 15.3653 13.8511 15.2977 14.0398C15.2301 14.2285 15.131 14.4 15.0061 14.5444C14.8812 14.6889 14.733 14.8034 14.5698 14.8816C14.4066 14.9598 14.2317 15 14.055 15H1.94516C1.58842 15 1.2463 14.8361 0.994056 14.5444C0.741809 14.2527 0.600098 13.8571 0.600098 13.4446V4.8871C0.600559 4.47492 0.742474 4.0798 0.994671 3.78854C1.24687 3.49727 1.58873 3.33367 1.94516 3.33367H3.47959C4.19465 3.33367 4.85531 2.95192 5.21238 2.3324L5.40323 2.00127C5.7603 1.38175 6.42096 1 7.13601 1H8.85983C9.57489 1 10.2355 1.38175 10.5926 2.00127L10.7835 2.3324C11.1405 2.95192 11.8012 3.33367 12.5162 3.33367H14.0507C14.2277 3.33301 14.4031 3.37275 14.5668 3.45062C14.7304 3.52849 14.8792 3.64296 15.0046 3.78746C15.13 3.93197 15.2294 4.10366 15.2973 4.29271C15.3652 4.48175 15.4001 4.68442 15.4001 4.88911V13.4446Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 8.63501C11 9.22835 10.8241 9.80837 10.4944 10.3017C10.1648 10.7951 9.69623 11.1796 9.14805 11.4066C8.59987 11.6337 7.99667 11.6931 7.41473 11.5774C6.83279 11.4616 6.29824 11.1759 5.87868 10.7563C5.45912 10.3368 5.1734 9.80222 5.05765 9.22028C4.94189 8.63834 5.0013 8.03514 5.22836 7.48696C5.45543 6.93878 5.83994 6.47024 6.33329 6.1406C6.82664 5.81096 7.40666 5.63501 8 5.63501C8.79565 5.63501 9.55871 5.95108 10.1213 6.51369C10.6839 7.0763 11 7.83936 11 8.63501V8.63501Z"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Camera;
