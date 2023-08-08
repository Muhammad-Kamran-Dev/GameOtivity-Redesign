import React from "react";
import PropTypes from "prop-types";

type VideoIconProps = {
  height: number;
  width: number;
};

const VideoIcon: React.FC<VideoIconProps> = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 13 13"
    >
      <ellipse cx="5.5" cy="6" fill="#0B0A0A" rx="5.5" ry="4"></ellipse>
      <path
        fill="#fff"
        d="M6.165 0A6.155 6.155 0 000 6.165a6.155 6.155 0 006.165 6.166 6.155 6.155 0 006.166-6.166A6.154 6.154 0 006.165 0zm2.737 6.451L4.797 8.857a.343.343 0 01-.165.045.343.343 0 01-.166-.045c-.105-.075-.165-.165-.165-.286V3.775h-.015c0-.12.075-.241.165-.286.09-.045.24-.075.346 0l4.105 2.39c.105.076.166.166.166.286 0 .12-.076.24-.166.286z"
      ></path>
    </svg>
  );
};

export default VideoIcon;
