import { getItemEncryptedStorage } from '../utils';
import {
  GET_EXERCISE_DETAILS,
  GET_WORKOUT_EXERCISE_BY_BODY_PART,
  GET_WORKOUT_STIMULATION_BODY_PARTS,
} from './CONSTANTS';
import axios from './default';

export const getWorkoutStimulationBodyParts = async (): Promise<
  { key: string; order: number }[] | undefined
> => {
  try {
    const url = GET_WORKOUT_STIMULATION_BODY_PARTS();

    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

    const response = await axios.get(url, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getWorkoutExerciseByBodyPart = async (bodyPart: string) => {
  try {
    const url = GET_WORKOUT_EXERCISE_BY_BODY_PART(bodyPart);

    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

    const response = await axios.get(url, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getExerciseDetails = async (exerciseId: number) => {
  try {
    const url = GET_EXERCISE_DETAILS(exerciseId);

    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

    const response = await axios.get(url, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (e: any) {
    console.error(e.message);
  }
};
