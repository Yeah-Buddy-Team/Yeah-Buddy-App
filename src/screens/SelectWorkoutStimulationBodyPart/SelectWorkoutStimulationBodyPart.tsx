import { Button } from 'react-native';
import { HeaderLayout } from '../../layouts';
import { useSelectWorkoutStimulationBodyPart } from './useSelectWorkoutStimulationBodyPart';

export function SelectWorkoutStimulationBodyPart() {
  const { confirmStimulationBodyPart } = useSelectWorkoutStimulationBodyPart();

  return (
    <HeaderLayout headerTitle="운동 시작하기">
      <Button title="ㅁㄴㅇㄹ" onPress={confirmStimulationBodyPart} />
    </HeaderLayout>
  );
}
