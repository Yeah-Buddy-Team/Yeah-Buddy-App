import AsyncStorage from '@react-native-community/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

export const setItemAsyncStorage = async (
  key: string,
  value: unknown,
  callback?: () => void,
) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value), callback);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getItemAsyncStorage = async (
  key: string,
  callback?: () => void,
) => {
  try {
    const value = (await AsyncStorage.getItem(key, callback)) ?? 'null';

    return JSON.parse(value);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const removeItemAsyncStorage = async (
  key: string,
  callback?: () => void,
) => {
  try {
    await AsyncStorage.removeItem(key, callback);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const clearAsyncStorage = async (callback?: () => void) => {
  try {
    await AsyncStorage.clear(callback);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const setItemEncryptedStorage = async (key: string, value: unknown) => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getItemEncryptedStorage = async (key: string) => {
  try {
    const value = (await EncryptedStorage.getItem(key)) ?? 'null';

    return JSON.parse(value);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const removeItemEncryptedStorage = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const clearEncryptedStorage = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (e) {
    console.error(e);
    throw e;
  }
};
