import { ComponentProps } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  ViewStyle,
} from 'react-native';

type Props = ComponentProps<typeof View> &
  ComponentProps<typeof SafeAreaView> &
  ComponentProps<typeof ScrollView> &
  ComponentProps<typeof KeyboardAvoidingView> & {
    row?: boolean;
    fill?: boolean;
    safe?: boolean;
    scroll?: boolean;
    keyboardAvoiding?: boolean;
    onRefresh?: () => void;
    refreshing?: boolean;
  };

export default function (props: Props) {
  const {
    children,
    style: customStyle,
    row,
    fill,
    safe,
    scroll,
    keyboardAvoiding,
    onRefresh,
    refreshing,
    ...rest
  } = props;

  const style: ViewStyle = {
    flexDirection: row ? 'row' : 'column',
    flex: fill ? 1 : 0,
  };

  const Component = (safe && SafeAreaView) || (scroll && ScrollView) || View;

  const componentProps = {
    style: [style, customStyle],
    children,
    ...(scroll && {
      showsVerticalScrollIndicator: false,
    }),
    ...rest,
  };

  return !keyboardAvoiding ? (
    <Component {...componentProps} />
  ) : (
    <KeyboardAvoidingView
      {...componentProps}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    />
  );
}
