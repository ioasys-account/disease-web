import React from 'react';

const LogoIcon = () => (
  <svg width="148" height="72" viewBox="0 0 148 72" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <rect x="-12" y="-9" width="160" height="91" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0" transform="translate(0 -0.00235479) scale(0.00446429 0.00784929)" />
      </pattern>
      <image id="image0" width="224" height="128" xlinkHref="data:image/png;base64,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" />
    </defs>
  </svg>
);

export default LogoIcon;