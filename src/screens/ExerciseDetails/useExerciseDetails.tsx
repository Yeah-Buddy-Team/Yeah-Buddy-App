import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { WorkoutService } from '../../services';
import { ExerciseDetails } from '../../types/Model';
import {
  RootRouteProps,
  RootStack,
  RootStackNavigationProps,
} from '../../types/System';

export const useExerciseDetails = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.ExerciseDetails]>();
  const {
    params: { exerciseId },
  } = useRoute<RootRouteProps[RootStack.ExerciseDetails]>();

  const [exerciseDetails, setExerciseDetails] = React.useState<ExerciseDetails | undefined>(undefined);

  const onPressCancel = () => {
    navigation.goBack();
  };

  React.useEffect(() => {
    (async () => {
      const result = await WorkoutService.getExerciseDetails(exerciseId);

      setExerciseDetails(result);
    })();
  }, []);

  return { exerciseDetails, onPressCancel };
};
