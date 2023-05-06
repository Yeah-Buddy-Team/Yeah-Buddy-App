import { useNavigation } from '@react-navigation/native';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useFriends = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.Friends]>();

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
