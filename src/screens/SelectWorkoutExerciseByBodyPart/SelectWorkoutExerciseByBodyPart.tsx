import { Button } from 'react-native';
import { View } from '../../components/Common';
import { useSelectWorkoutExerciseByBodyPart } from './useSelectWorkoutExerciseByBodyPart';

export function SelectWorkoutExerciseByBodyPart() {
  const { addExerciseToWorkoutPlan } = useSelectWorkoutExerciseByBodyPart();

  return (
    <View>
      <Button title="ㅁㄴㅇㄹ" onPress={addExerciseToWorkoutPlan} />
    </View>
  );
}
