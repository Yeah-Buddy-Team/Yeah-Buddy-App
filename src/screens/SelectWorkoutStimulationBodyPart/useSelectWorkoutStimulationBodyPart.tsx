import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useSelectWorkoutStimulationBodyPart = () => {
  const navigation =
    useNavigation<
      RootStackNavigationProps[RootStack.SelectWorkoutStimulationBodyPart]
    >();

  const confirmStimulationBodyPart = () => {
    navigation.push(RootStack.SelectWorkoutExerciseByBodyPart);
  };

  return {
    confirmStimulationBodyPart,
  };
};
