import { Header } from './components';

import { View } from '../components/Common';
import * as COLORS from '../constants/Theme';

type Props = {
  headerRight?: React.ReactNode;
  headerTitle?: string;
  headerBack?: boolean;
  children?: React.ReactNode;
};

export function HeaderLayout(props: Props) {
  const { headerRight, headerTitle, headerBack, children } = props;

  return (
    <View fill safe>
      <Header back={headerBack} right={headerRight} title={headerTitle} />
      {children}
    </View>
  );
}
