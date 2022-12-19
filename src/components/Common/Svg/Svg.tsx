import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

type Props = SvgProps & {
  size?: number;
};

export default function (props: Props): React.ReactElement {
  const { width, height, size = 1, ...rest } = props;

  return (
    <Svg
      focusable={false}
      height={height ? Number(height) * size : undefined}
      pointerEvents="none"
      viewBox={`0 0 ${width || 24} ${height || 24}`}
      width={width ? Number(width) * size : undefined}
      {...rest}
    />
  );
}
