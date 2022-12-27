import { Button } from 'react-native';
import { HeaderLayout } from '../../layouts';
import { useSelectWorkoutExerciseByBodyPart } from './useSelectWorkoutExerciseByBodyPart';

export function SelectWorkoutExerciseByBodyPart() {
  const { addExerciseToWorkoutPlan } = useSelectWorkoutExerciseByBodyPart();

  return (
    <HeaderLayout headerTitle="운동 시작하기">
      <Button title="ㅁㄴㅇㄹ" onPress={addExerciseToWorkoutPlan} />
    </HeaderLayout>
  );
}
