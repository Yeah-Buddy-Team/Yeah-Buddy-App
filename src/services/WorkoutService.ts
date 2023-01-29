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
