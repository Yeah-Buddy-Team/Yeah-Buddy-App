import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-community/async-storage';
import { Exercise } from '../types/Model';

type ExerciseState = {
  exercises: Exercise[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (exercise: Exercise) => void;
};

export const useExerciseStore = create<ExerciseState>()(
  persist(
    (set, get) => ({
      exercises: [],
      addExercise: exercise =>
        set({ exercises: get().exercises.concat(exercise) }),
      removeExercise: exercise =>
        set({
          exercises: get().exercises.filter(item => item.id !== exercise.id),
        }),
    }),
    {
      name: 'exercise-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
