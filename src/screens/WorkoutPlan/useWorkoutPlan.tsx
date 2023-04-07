import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useWorkoutPlan = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.WorkoutPlan]>();

  const createWorkoutPlan = () => {
    navigation.push(RootStack.SelectWorkoutStimulationBodyPart);
  };

  return {
    createWorkoutPlan,
  };
};
