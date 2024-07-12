import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const Edit: FC<IconProps> = ({ size, color, ...props }) => {
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
        d="M8.0001 0.600098H3.6001C1.94324 0.600098 0.600098 1.94325 0.600098 3.6001V12.4001C0.600098 14.057 1.94325 15.4001 3.6001 15.4001H12.4001C14.057 15.4001 15.4001 14.0569 15.4001 12.4001V8.0001"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M10.9857 1.41421C11.7667 0.633165 13.0331 0.633165 13.8141 1.41421L14.5212 2.12132C15.3023 2.90237 15.3023 4.1687 14.5212 4.94975L8.41327 11.0577C8.24785 11.2231 8.02967 11.3253 7.7967 11.3465L5.46325 11.5586C4.84131 11.6152 4.32028 11.0941 4.37682 10.4722L4.58895 8.13874C4.61013 7.90576 4.71232 7.68758 4.87774 7.52217L10.9857 1.41421Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <path
        d="M10 2.5V2.5C10.6386 4.09645 11.9036 5.36142 13.5 6V6"
        stroke={colorStyle}
        stroke-width="1.2"
        stroke-linecap="square"
      />
    </svg>
  );
};

export default Edit;
