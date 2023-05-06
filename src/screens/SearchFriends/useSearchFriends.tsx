import React from 'react';

export const useSearchFriends = () => {
  const [searchText, setSearchText] = React.useState('');

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  return {
    searchText,
    onChangeSearchText,
  };
};
