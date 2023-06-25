import { FriendsAPI } from '../api';

export const getFriends = async () => {
  try {
    const result = FriendsAPI.getFriends();

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getFriendsrequest = async () => {
  try {
    const result = FriendsAPI.getFriendsRequest();

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const deleteFriend = async (userId: number) => {
  try {
    await FriendsAPI.deleteFriend(userId);
  } catch (e: any) {
    console.error(e.message);
  }
};
