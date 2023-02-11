export type StimulationBodyPart = {
  key: string;
  order: number;
};

export type Exercise = {
  id: number;
  name: string;
  category: string;
  order: number;
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
