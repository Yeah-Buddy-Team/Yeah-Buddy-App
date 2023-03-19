import { WorkoutAPI } from '../api';

export const getWorkoutStimulationBodyPartByOrder = async () => {
  try {
    const result = await WorkoutAPI.getWorkoutStimulationBodyParts();

    // order 기준 오름차순 정렬
    result?.sort((a, b) => a.order - b.order);

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getWorkoutExerciseByBodyPart = async (bodyPart: string) => {
  try {
    const result = await WorkoutAPI.getWorkoutExerciseByBodyPart(bodyPart);

    return result;
  } catch (e: any) {
    console.error(e.messsage);
  }
};

export const getExerciseDetails = async (exerciseId: number) => {
  try {
    const result = await WorkoutAPI.getExerciseDetails(exerciseId);

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const postWorkoutPlans = async (workoutIdArr: number[]) => {
  try {
    const result = await WorkoutAPI.postWorkoutPlans(workoutIdArr);

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};