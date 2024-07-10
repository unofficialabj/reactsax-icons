import React, { FC } from "react";
import { IconProps } from "../types";

const HomeIcon: FC<IconProps> = ({ size = 24, color = "black" }) => {
  const styles = {
    width: size,
    height: size,
    fill: color,
  };

  return (
    <svg style={styles} viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};

export default HomeIcon;
