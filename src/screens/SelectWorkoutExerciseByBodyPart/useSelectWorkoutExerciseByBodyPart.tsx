import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useSelectWorkoutExerciseByBodyPart = () => {
  const navigation =
    useNavigation<
      RootStackNavigationProps[RootStack.SelectWorkoutExerciseByBodyPart]
    >();

  const addExerciseToWorkoutPlan = () => {
    navigation.push(RootStack.MakeWorkoutPlan);
  };

  return {
    addExerciseToWorkoutPlan,
  };
};
