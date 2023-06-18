import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';
import React from 'react';
import { AuthService } from '../../services';
import { useProfileStore } from '../../store';

export const useMyProfile = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.MyProfile]>();
  const { profile, setProfile } = useProfileStore();

  React.useEffect(() => {
    (async () => {
      const result = await AuthService.getProfile();

      if (!result) return;

      setProfile(result);
    })();
  }, []);

  const onPressEditProfile = () => {
    navigation.push(RootStack.EditProfile);
  };

  return { profile, onPressEditProfile };
};
