import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Profile } from '../types/Model';

type ProfileState = {
  profile: Profile;
  setProfile: (profileParam: Profile) => void;
  setName: (newName: string) => void;
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set, get) => ({
      profile: {
        name: '',
        profileImageUrl: '',
      },
      setProfile: (profileParam: Profile) => set({ profile: profileParam }),
      setName: (newName: string) =>
        set({ profile: { ...get().profile, name: newName } }),
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
