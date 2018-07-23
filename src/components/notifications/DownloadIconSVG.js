import React from 'react';
import { SVG } from 'theme/Components';

const chooseColor = (teacher, file) => {
  if (teacher && file) {
    return '#525151';
  } else if (teacher) {
    return '#a7a5a5';
  } else if (file) {
    return '#c64545';
  }
  return '#c6454559';
};

export default ({ file, teacher }) => (
  <SVG
    height="30px"
    hovTransform={file ? 'scale(1.1)' : 'auto'}
    viewBox="0 0 21 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g
        id="Dribbble-Light-Preview"
        transform="translate(-339 -480)"
        fill="#000"
      >
        <g id="icons" transform="translate(56 160)">
          <path
            fill={chooseColor(teacher, file)}
            d="M297.92575,332.227 L294.9427,334.913 C294.13315,335.641 292.86685,335.641 292.0573,334.913 L289.07425,332.227 C288.65215,331.848 288.6343,331.215 289.03225,330.813 L289.03225,330.813 C289.4302,330.412 290.09485,330.394 290.51695,330.773 L291.5638,331.716 C291.89875,332.018 292.45,331.792 292.45,331.353 L292.45,326 C292.45,325.448 292.9204,325 293.5,325 C294.0796,325 294.55,325.448 294.55,326 L294.55,331.353 C294.55,331.792 295.10125,332.018 295.43515,331.716 L296.48305,330.773 C296.9041,330.394 297.56875,330.412 297.96775,330.813 L297.96775,330.813 C298.3657,331.215 298.3468,331.848 297.92575,332.227 M300.85,338 L286.15,338 C285.5704,338 285.1,337.553 285.1,337 L285.1,323 C285.1,322.448 285.5704,322 286.15,322 L300.85,322 C301.4296,322 301.9,322.448 301.9,323 L301.9,337 C301.9,337.553 301.4296,338 300.85,338 M283,322 L283,338 C283,339.105 283.93975,340 285.1,340 L301.9,340 C303.0592,340 304,339.105 304,338 L304,322 C304,320.896 303.0592,320 301.9,320 L285.1,320 C283.93975,320 283,320.896 283,322"
            id="download-[#1453]"
          />
        </g>
      </g>
    </g>
  </SVG>
);
