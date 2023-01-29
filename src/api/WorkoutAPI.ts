import { GET_WORKOUT_STIMULATION_BODY_PARTS } from './CONSTANTS';
import axios from './default';

export const getWorkoutStimulationBodyParts = async () => {
  try {
    // const url = GET_WORKOUT_STIMULATION_BODY_PARTS();

    // const response = await axios.get(url);

    // return response.data;
    return [
      {
        key: 'BICEPS',
        order: 1,
      },
      {
        key: 'TRICEPS',
        order: 2,
      },
      {
        key: 'SHOULDER',
        order: 3,
      },
      {
        key: 'CHEST',
        order: 4,
      },
      {
        key: 'BACK',
        order: 5,
      },
      {
        key: 'LOWER_BODY',
        order: 6,
      },
      {
        key: 'ABS',
        order: 7,
      },
      {
        key: 'CARDIO',
        order: 8,
      },
      {
        key: 'ETC',
        order: 9,
      },
    ];
  } catch (e: any) {
    console.error(e.message);
  }
};
