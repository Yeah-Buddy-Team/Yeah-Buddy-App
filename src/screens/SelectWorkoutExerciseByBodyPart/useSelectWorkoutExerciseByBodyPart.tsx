import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useSelectWorkoutExerciseByBodyPart = () => {
  const navigation =
    useNavigation<
      RootStackNavigationProps[RootStack.SelectWorkoutExerciseByBodyPart]
    >();
  const [selectedBodyPart, setSelectedBodyPart] =
    React.useState<string>('팔(이두)');

  const addExerciseToWorkoutPlan = () => {
    navigation.push(RootStack.MakeWorkoutPlan);
  };

  const changeBodyPart = (targetBodyPart: string) => {
    setSelectedBodyPart(targetBodyPart);
  };

  return {
    selectedBodyPart,
    addExerciseToWorkoutPlan,
    changeBodyPart,
  };
};
