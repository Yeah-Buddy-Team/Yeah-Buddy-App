import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Exercise, StimulationBodyPart } from '../Model';

export enum RootStack {
  SignIn = 'SignIn', // 로그인 화면
  NicknameSetting = 'NicknameSetting', // 닉네임 설정 화면
  Root = 'Root', // 바텀 탭 네비게이션 화면
  WorkoutPlan = 'WorkoutPlan', // 운동 계획 화면
  SelectWorkoutStimulationBodyPart = 'SelectWorkoutStimulationBodyPart', // 운동 계획 자극 부위 선택 화면
  SelectWorkoutExerciseByBodyPart = 'SelectWorkoutExerciseByBodyPart', // 자극 부위 별 운동 선택 화면
  ExerciseDetails = 'ExerciseDetails', // 운동 상세 정보 화면 (모달)
  MakeWorkoutPlan = 'MakeWorkoutPlan', // 운동 계획 세우기 화면
  Calendar = 'Calendar', // 캘린더 화면
  Friends = 'Friends', // 친구 화면
  MyProfile = 'MyProfile', // 마이 화면
}

export type RootStackParamList = {
  [RootStack.SelectWorkoutExerciseByBodyPart]: {
    workoutStimulationBodyParts: StimulationBodyPart[];
    selectedStimulationBodyPart: string;
  };
  [RootStack.ExerciseDetails]: {
    exerciseId: number;
  };
  [RootStack.MakeWorkoutPlan]: {
    exerciseList: Exercise[];
  };
} & {
  [P in RootStack]?: {};
};

export type RootStackNavigationProps = {
  [P in RootStack]: StackNavigationProp<RootStackParamList, P>;
};

export type RootRouteProps = {
  [P in RootStack]: RouteProp<RootStackParamList, P>;
};
