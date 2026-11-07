import React from 'react';
import {Composition} from 'remotion';
import {BridgeMiniature} from './BridgeMiniature';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="BridgeMiniature"
      component={BridgeMiniature}
      durationInFrames={1800}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
