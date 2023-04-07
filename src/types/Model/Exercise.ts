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

export type WorkoutSet = {
  id: number;
  weight: number;
  count: number;
  seconds?: number;
  progressStatus: 'NOT_YET' | 'COMPLETED';
};

export type WorkoutPlan = {
  date: number[];
  workoutTrainingPlans: WorkoutTrainingPlan[];
};

export type WorkoutTrainingPlan = {
  id: number;
  order: number;
  workout: Exercise;
  workoutSets: WorkoutSet[];
};

export type ExerciseDetails = Exercise & {
  description: string[];
  imageUrl: string;
};
