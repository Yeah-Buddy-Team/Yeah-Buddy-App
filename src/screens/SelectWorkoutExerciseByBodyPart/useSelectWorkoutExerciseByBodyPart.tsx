import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { WorkoutService } from '../../services';
import { Exercise } from '../../types/Model';
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

  const [exerciseList, setExerciseList] = React.useState<Exercise[]>([]);
  const [selectedExerciseList, setSelectedExerciseList] = React.useState<
    Exercise[]
  >([]);
  const [selectedBodyPart, setSelectedBodyPart] = React.useState<string>(
    selectedStimulationBodyPart,
  );

  const changeSelectedBodyPart = (targetBodyPart: string) => {
    setSelectedBodyPart(targetBodyPart);
  };

  const addExerciseToWorkoutPlan = (exercise: Exercise) => {
    setSelectedExerciseList(prev => prev.concat(exercise));
  };

  const removeExerciseFromWorkoutPlan = (exerciseId: number) => {
    setSelectedExerciseList(prev =>
      prev.filter(item => item.id !== exerciseId),
    );
  };

  const showExerciseDetailModal = (exerciseId: number) => {
    navigation.push(RootStack.ExerciseDetails, { exerciseId });
  };

  const makeWorkoutPlan = () => {
    if (selectedExerciseList.length < 1) {
      Alert.alert('운동을 추가해주세요');
      return;
    }

    navigation.push(RootStack.MakeWorkoutPlan, {
      exerciseList: selectedExerciseList,
    });

    setSelectedExerciseList([]);
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
    showExerciseDetailModal,
    makeWorkoutPlan,
  };
};
