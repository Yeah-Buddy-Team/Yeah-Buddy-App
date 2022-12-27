import { Button } from 'react-native';
import { View } from '../../components/Common';
import { useSelectWorkoutStimulationBodyPart } from './useSelectWorkoutStimulationBodyPart';

export function SelectWorkoutStimulationBodyPart() {
  const { confirmStimulationBodyPart } = useSelectWorkoutStimulationBodyPart();

  return (
    <View>
      <Button title="ㅁㄴㅇㄹ" onPress={confirmStimulationBodyPart} />
    </View>
  );
}
