import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum RootStack {
  SignIn = 'SignIn', // 로그인 화면
}

export type RootStackParamList = {} & {
  [P in RootStack]?: {};
};

export type RootStackNavigationProps = {
  [P in RootStack]: StackNavigationProp<RootStackParamList, P>;
};

export type RootRouteProps = {
  [P in RootStack]: RouteProp<RootStackParamList, P>;
};
