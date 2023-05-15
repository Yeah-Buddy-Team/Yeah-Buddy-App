import { Image, TouchableOpacity } from 'react-native';
import { View } from '../../components/Common';
import { useWorkoutPlan } from './useWorkoutPlan';
import TextLogoBlack from '../../assets/images/TextLogoBlack.png';
import WorkoutPlanButton from '../../assets/images/WorkoutPlanButton.png';

export function WorkoutPlan() {
  const { createWorkoutPlan } = useWorkoutPlan();

  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          width: '80%',
          top: -40,
          resizeMode: 'center',
          marginBottom: -40,
        }}
        source={TextLogoBlack}
      />
      <TouchableOpacity
        style={{ flex: 1, width: '90%', top: -50 }}
        activeOpacity={0.7}
        onPress={createWorkoutPlan}
      >
        <Image
          style={{
            width: '100%',
            height: 140,
            resizeMode: 'center',
          }}
          source={WorkoutPlanButton}
        />
      </TouchableOpacity>
    </View>
  );
}
