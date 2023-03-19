export type StimulationBodyPart = {
  key: string;
  order: number;
};

export type Exercise = {
  id: number;
  name: string;
  category: string;
  order: number;
  countable: boolean;
  timeable: boolean;
  weightable: boolean;
};

export type WorkoutCount = {
  set: number;
  kg: number;
  reps: number;
  completed: boolean;
};

export type WorkoutPlan = Exercise & {
  workoutCount: WorkoutCount[];
};

export type ExerciseDetails = Exercise & {
  description: string[];
  imageUrl: string;
}