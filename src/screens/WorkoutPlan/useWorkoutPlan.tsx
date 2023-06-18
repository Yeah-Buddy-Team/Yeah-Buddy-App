import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';
import React from 'react';
import { AuthService } from '../../services';
import { useProfileStore } from '../../store';

export const useWorkoutPlan = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.WorkoutPlan]>();
  const { setProfile } = useProfileStore();

  // 프로필 정보 가져오기
  React.useEffect(() => {
    (async () => {
      const result = await AuthService.getProfile();

      if (!result) return;

      setProfile(result);
    })();
  }, []);

  const createWorkoutPlan = () => {
    navigation.push(RootStack.SelectWorkoutStimulationBodyPart);
  };

  return {
    createWorkoutPlan,
  };
};
