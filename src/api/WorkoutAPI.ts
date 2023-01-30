import {
  GET_WORKOUT_EXERCISE_BY_BODY_PART,
  GET_WORKOUT_STIMULATION_BODY_PARTS,
} from './CONSTANTS';
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

export const getWorkoutExerciseByBodyPart = async (bodyPart: string) => {
  try {
    // const url = GET_WORKOUT_EXERCISE_BY_BODY_PART(bodyPart);

    // const response = await axios.get(url);

    // return response.data;
    return [
      {
        id: 1,
        name: '가',
        category: '',
        order: 1,
      },

      {
        id: 2,
        name: '나',
        category: '',
        order: 2,
      },
      {
        id: 3,
        name: '다',
        category: '',
        order: 3,
      },
      {
        id: 4,
        name: '라',
        category: '',
        order: 4,
      },
      {
        id: 5,
        name: '마',
        category: '',
        order: 5,
      },
      {
        id: 6,
        name: '바',
        category: '',
        order: 6,
      },
      {
        id: 7,
        name: '사',
        category: '',
        order: 7,
      },
      {
        id: 8,
        name: '아',
        category: '',
        order: 8,
      },
      {
        id: 9,
        name: '자',
        category: '',
        order: 9,
      },
      {
        id: 10,
        name: '차',
        category: '',
        order: 10,
      },
      {
        id: 11,
        name: '카',
        category: '',
        order: 11,
      },
      {
        id: 12,
        name: '타',
        category: '',
        order: 12,
      },
      {
        id: 13,
        name: '파',
        category: '',
        order: 13,
      },
      {
        id: 14,
        name: '하',
        category: '',
        order: 14,
      },
    ];
  } catch (e: any) {
    console.error(e.message);
  }
};

const tempArr = [
  '가',
  '나',
  '다',
  '라',
  '마',
  '바',
  '사',
  '아',
  '자',
  '차',
  '카',
  '타',
  '파',
  '하',
];
