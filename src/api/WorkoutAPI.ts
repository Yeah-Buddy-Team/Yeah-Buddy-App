import { getItemEncryptedStorage } from '../utils';
import {
  GET_EXERCISE_DETAILS,
  GET_WORKOUT_EXERCISE_BY_BODY_PART,
  GET_WORKOUT_STIMULATION_BODY_PARTS,
  POST_WORKOUT_PLANS,
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

export const postWorkoutPlans = async (workoutIdArr: number[]) => {
  try {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const date = (currentDate.getDate()).toString().padStart(2, '0');

    const workoutDate = `${year}-${month}-${date}`;

    const url = POST_WORKOUT_PLANS(workoutDate);

    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

    const response = await axios.post(url, workoutIdArr, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (e: any) {
    console.error(e.message);
  }
}
