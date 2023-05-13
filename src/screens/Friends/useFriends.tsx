import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';
import React from 'react';
import { FriendsService } from '../../services';

export const useFriends = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.Friends]>();

  React.useEffect(() => {
    (async () => {
      console.log(await FriendsService.getFriends());
    })();
  }, []);

  const navigateToSearchFriends = () => {
    navigation.push(RootStack.SearchFriends);
  };

  const navigateToFriendsRequest = () => {
    navigation.push(RootStack.FriendsRequest);
  };

  return {
    navigateToSearchFriends,
    navigateToFriendsRequest,
  };
};
