import React from 'react';
import { Loading, Spinner } from './LoadingFullScreenStyles';

export default function LoadingFullScreen() {
  return (
    <Loading>
      <Spinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </Spinner>
    </Loading>
  );
}
