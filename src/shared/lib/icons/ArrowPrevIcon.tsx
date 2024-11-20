import React from "react";
import {IconProps} from "./types";

const ArrowIcon = (
    {
        fill = "#FBCE51",
        height = 44,
        width = 44,
        rotation = 180,
    }: IconProps) => {

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform={`rotate(${rotation})`}
        >
            <g id="carousel button right">
                <circle
                    id="Ellipse 64"
                    cx="22"
                    cy="22"
                    r="22"
                    fill={fill}
                />
                <path
                    id="Vector 92"
                    d="M19.4618 13.5384L27.9233 21.9999L19.4618 30.4615"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>

    );
};

export default ArrowIcon;