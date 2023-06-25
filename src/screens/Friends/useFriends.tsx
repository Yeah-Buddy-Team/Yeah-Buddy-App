import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';
import React from 'react';
import { FriendsService } from '../../services';
import { Friend } from '../../types/Model';

export const useFriends = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.Friends]>();

  const [friends, setFriends] = React.useState<Friend[]>([]);

  React.useEffect(() => {
    (async () => {
      setFriends(await FriendsService.getFriends());
    })();
  }, []);

  const navigateToSearchFriends = () => {
    navigation.push(RootStack.SearchFriends);
  };

  const navigateToFriendsRequest = () => {
    navigation.push(RootStack.FriendsRequest);
  };

  return {
    friends,
    navigateToSearchFriends,
    navigateToFriendsRequest,
  };
};
