import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

type Props = ViewProps &
  SafeAreaView &
  ScrollViewProps &
  KeyboardAvoidingViewProps & {
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
