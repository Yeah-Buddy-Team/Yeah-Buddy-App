import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum RootStack {
  SignIn = 'SignIn', // 로그인 화면
  Root = 'Root', // 바텀 탭 네비게이션 화면
  WorkoutPlan = 'WorkoutPlan', // 운동 계획 화면
  Calendar = 'Calendar', // 캘린더 화면
  Friends = 'Friends', // 친구 화면
  MyProfile = 'MyProfile', // 마이 화면
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
