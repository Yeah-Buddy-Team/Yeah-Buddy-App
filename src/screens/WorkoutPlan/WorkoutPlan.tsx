import { Button } from 'react-native';
import { View } from '../../components/Common';
import { useWorkoutPlan } from './useWorkoutPlan';

export function WorkoutPlan() {
  const { createWorkoutPlan } = useWorkoutPlan();

  return (
    <View>
      <Button onPress={createWorkoutPlan} title="ㅁㄴㅇㄹ" />
    </View>
  );
}
