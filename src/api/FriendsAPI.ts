import { getItemEncryptedStorage } from '../utils';
import { GET_FRIENDS, GET_FRIENDS_REQUEST } from './CONSTANTS';
import axios from './default';

export const getFriends = async () => {
  try {
    const url = GET_FRIENDS();

    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

    const response = await axios.get(url, {
      headers: { Authorization: accessToken },
    });

    return response.data;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getFriendsRequest = async () => {
  try {
    const url = GET_FRIENDS_REQUEST();

    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

    const response = await axios.get(url, {
      headers: { Authorization: accessToken },
    });

    return response.data;
  } catch (e: any) {
    console.error(e.message);
  }
};
