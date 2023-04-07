import { ColorValue } from 'react-native';
import { IconMapType } from '../components/Common/Icon/IconMap';

export const WorkoutStimulationBodyPartObj: Record<
  string,
  { icon: IconMapType; name: string; color: ColorValue }
> = {
  BICEPS: {
    icon: 'Arm',
    name: '팔(이두)',
    color: '#F6AC56',
  },
  TRICEPS: {
    icon: 'Arm',
    name: '팔(삼두)',
    color: '#D374CA',
  },
  SHOULDER: {
    icon: 'Arm',
    name: '어깨',
    color: '#E57373',
  },
  CHEST: {
    icon: 'Arm',
    name: '가슴',
    color: '#6FBCC6',
  },
  BACK: {
    icon: 'Arm',
    name: '등',
    color: '#9165DD',
  },
  LOWER_BODY: {
    icon: 'Arm',
    name: '하체',
    color: '#62B26F',
  },
  ABS: {
    icon: 'Arm',
    name: '복근',
    color: '#5C6BC0',
  },
  CARDIO: {
    icon: 'Arm',
    name: '유산소',
    color: '#5C6BC0',
  },
  ETC: {
    icon: 'Arm',
    name: '기타',
    color: '#5C6BC0',
  },
};
