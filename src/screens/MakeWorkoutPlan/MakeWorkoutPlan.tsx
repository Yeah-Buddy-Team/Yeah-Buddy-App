import { ScrollView, useWindowDimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Button, View } from '../../components/Common';
import { COLORS } from '../../constants';
import { HeaderLayout } from '../../layouts';
import { WorkoutPlan } from './components';
import { useMakeWorkoutPlan } from './useMakeWorkoutPlan';

export function MakeWorkoutPlan() {
  const {
    workoutPlans,
    removeWorkoutPlan,
    addWorkoutCount,
    modifyWorkoutCountKg,
    modifyWorkoutCountReps,
    modifyWorkoutCountCompleted,
    removeWorkoutCount,
  } = useMakeWorkoutPlan();
  const { width: WIDTH } = useWindowDimensions();

  return (
    <HeaderLayout headerTitle="운동 시작하기">
      <View fill>
        <ScrollView
          style={{
            flex: 1,
            paddingTop: 20,
            paddingBottom: 200,
            marginHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {workoutPlans.map((item, index) => (
            <WorkoutPlan
              key={item.id}
              stimulationBodyPart={item.category}
              exerciseName={item.name}
              workoutCounts={item.workoutCount}
              onPressRemove={() => removeWorkoutPlan(item.id)}
              onPressAddSet={() => addWorkoutCount(item.id)}
              onBlurModifyKg={modifyWorkoutCountKg(item.id)}
              onBlurModifyReps={modifyWorkoutCountReps(item.id)}
              onPressModifyCompleted={modifyWorkoutCountCompleted(item.id)}
              onPressRemoveSet={() => removeWorkoutCount(item.id)}
              last={index === workoutPlans.length - 1}
            />
          ))}
        </ScrollView>
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
