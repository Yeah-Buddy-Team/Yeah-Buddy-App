import { useWindowDimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Button, View } from '../../components/Common';
import { COLORS } from '../../constants';
import { HeaderLayout } from '../../layouts';
import { WorkoutPlan } from './components';
import { useMakeWorkoutPlan } from './useMakeWorkoutPlan';

export function MakeWorkoutPlan() {
  const { workoutPlan, addWorkoutCount } = useMakeWorkoutPlan();
  const { width: WIDTH } = useWindowDimensions();

  return (
    <HeaderLayout headerTitle="운동 시작하기">
      <View fill>
        <View
          fill
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          {workoutPlan.map(item => (
            <WorkoutPlan
              key={item.id}
              stimulationBodyPart={item.category}
              exerciseName={item.name}
              workoutCounts={item.workoutCount}
              onPressAddSet={() => addWorkoutCount(item.id)}
            />
          ))}
        </View>
        <Shadow
          startColor="rgba(0, 0, 0, 0.08)"
          offset={[0, -1]}
          style={{
            borderRadius: 4,
          }}
        >
          <View
            style={{
              width: WIDTH,
              height: 85,
              borderTopColor: COLORS.GRAY[300],
              borderTopWidth: 1,
              paddingTop: 16,
              paddingHorizontal: 20,
              backgroundColor: COLORS.WHITE,
            }}
          >
            <Button>운동 끝내기</Button>
          </View>
        </Shadow>
      </View>
    </HeaderLayout>
  );
}
