import { getItemEncryptedStorage } from '../utils';
import { DELETE_FRIEND, GET_FRIENDS, GET_FRIENDS_REQUEST } from './CONSTANTS';
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

export const deleteFriend = async (userId: number) => {
  try {
    const url = DELETE_FRIEND(userId);

    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

    const response = await axios.delete(url, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response;
  } catch (e: any) {
    console.error(e.message);
  }
};
