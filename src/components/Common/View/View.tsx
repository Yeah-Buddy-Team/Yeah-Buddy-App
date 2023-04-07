import { ComponentProps } from 'react';
import { SafeAreaView, View, ViewStyle } from 'react-native';

type Props = ComponentProps<typeof View> &
  ComponentProps<typeof SafeAreaView> & {
    row?: boolean;
    fill?: boolean;
    safe?: boolean;
  };

export default function (props: Props) {
  const { children, style: customStyle, row, fill, safe, ...rest } = props;

  const style: ViewStyle = {
    flexDirection: row ? 'row' : 'column',
    flex: fill ? 1 : 0,
  };

  const Component = (safe && SafeAreaView) || View;

  const componentProps = {
    style: [style, customStyle],
    children,
    ...rest,
  };

  return <Component {...componentProps} />;
}
