import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';
import React from 'react';
import { AuthService } from '../../services';

export const useMyProfile = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.MyProfile]>();

  const [profile, setProfile] = React.useState<{
    name: string;
    profileImageUrl: string;
  }>();

  React.useEffect(() => {
    (async () => {
      const result = await AuthService.getProfile();

      setProfile(result);
    })();
  }, []);

  const onPressEditProfile = () => {
    // navigation.push()
  };

  return { profile, onPressEditProfile };
};
