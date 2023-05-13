import React from 'react';
import { FriendsService } from '../../services';

export const useFriendsRequest = () => {
  React.useEffect(() => {
    (async () => {
      console.log(await FriendsService.getFriendsrequest());
    })();
  }, []);
};
