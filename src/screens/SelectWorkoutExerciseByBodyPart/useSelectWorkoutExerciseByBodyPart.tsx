import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { WorkoutService } from '../../services';
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

  const [exerciseList, setExerciseList] = React.useState<
    { id: number; name: string; category: string; order: number }[]
  >([]);
  const [selectedExerciseList, setSelectedExerciseList] = React.useState<
    { id: number; name: string; category: string; order: number }[]
  >([]);
  const [selectedBodyPart, setSelectedBodyPart] = React.useState<string>(
    selectedStimulationBodyPart,
  );

  const changeSelectedBodyPart = (targetBodyPart: string) => {
    setSelectedBodyPart(targetBodyPart);
  };

  const addExerciseToWorkoutPlan = (exercise: {
    id: number;
    name: string;
    category: string;
    order: number;
  }) => {
    setSelectedExerciseList(prev => prev.concat(exercise));
  };

  const removeExerciseFromWorkoutPlan = (exerciseId: number) => {
    setSelectedExerciseList(prev =>
      prev.filter(item => item.id !== exerciseId),
    );
  };

  const makeWorkoutPlan = () => {
    navigation.push(RootStack.MakeWorkoutPlan);
  };

  const getWorkoutExerciseByBodyPart = async (bodyPart: string) => {
    const result = await WorkoutService.getWorkoutExerciseByBodyPart(bodyPart);
    if (!result) return;

    setExerciseList(result);
  };

  React.useEffect(() => {
    (async () => await getWorkoutExerciseByBodyPart(selectedBodyPart))();
  }, [selectedBodyPart]);

  return {
    exerciseList,
    selectedBodyPart,
    selectedExerciseList,
    workoutStimulationBodyParts,
    changeSelectedBodyPart,
    addExerciseToWorkoutPlan,
    removeExerciseFromWorkoutPlan,
    makeWorkoutPlan,
  };
};
