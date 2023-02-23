import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useExerciseDetails = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.ExerciseDetails]>();

  const onPressCancel = () => {
    navigation.goBack();
  };

  return { onPressCancel };
};
