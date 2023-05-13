import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useSearchFriends = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.SearchFriends]>();

  const [searchText, setSearchText] = React.useState('');

  const onPressHeaderBack = () => {
    navigation.goBack();
  };

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  const onSubmitSearchText = (text: any) => {
    console.log(text);
  };

  return {
    searchText,
    onPressHeaderBack,
    onChangeSearchText,
    onSubmitSearchText,
  };
};
