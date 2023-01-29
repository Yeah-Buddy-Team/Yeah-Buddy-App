import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { WorkoutService } from '../../services';
import { StimulationBodyPart } from '../../types/Model';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useSelectWorkoutStimulationBodyPart = () => {
  const navigation =
    useNavigation<
      RootStackNavigationProps[RootStack.SelectWorkoutStimulationBodyPart]
    >();

  const [workoutStimulationBodyParts, setWorkoutStimulationBodyParts] =
    React.useState<StimulationBodyPart[]>([]);

  const confirmStimulationBodyPart = () => {
    navigation.push(RootStack.SelectWorkoutExerciseByBodyPart);
  };

  const getWorkoutStimulationBodyPart = async () => {
    const result = await WorkoutService.getWorkoutStimulationBodyPartByOrder();
    if (!result) return;

    setWorkoutStimulationBodyParts(result);
  };

  React.useEffect(() => {
    (async () => await getWorkoutStimulationBodyPart())();
  }, []);

  return {
    workoutStimulationBodyParts,
    confirmStimulationBodyPart,
  };
};
