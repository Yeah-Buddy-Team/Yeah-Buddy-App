import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  RootRouteProps,
  RootStack,
  RootStackNavigationProps,
} from '../../types/System';

export const useSelectWorkoutExerciseByBodyPart = () => {
  const navigation =
    useNavigation<
      RootStackNavigationProps[RootStack.SelectWorkoutExerciseByBodyPart]
    >();
  const {
    params: { workoutStimulationBodyParts, selectedStimulationBodyPart },
  } = useRoute<RootRouteProps[RootStack.SelectWorkoutExerciseByBodyPart]>();

  const [selectedBodyPart, setSelectedBodyPart] = React.useState<string>(
    selectedStimulationBodyPart,
  );

  const addExerciseToWorkoutPlan = () => {
    navigation.push(RootStack.MakeWorkoutPlan);
  };

  const changeSelectedBodyPart = (targetBodyPart: string) => {
    setSelectedBodyPart(targetBodyPart);
  };

  return {
    selectedBodyPart,
    workoutStimulationBodyParts,
    addExerciseToWorkoutPlan,
    changeSelectedBodyPart,
  };
};
