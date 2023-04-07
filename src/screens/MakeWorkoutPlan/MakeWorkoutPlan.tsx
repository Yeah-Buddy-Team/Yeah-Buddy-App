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
    removeWorkoutTrainingPlan,
    addWorkoutSet,
    modifyWorkoutSetWeight,
    modifyWorkoutSetCount,
    modifyWorkoutSetProgressStatus,
    removeWorkoutSet,
    finishWorkoutPlan,
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
          {workoutPlans?.workoutTrainingPlans.map((item, index) => (
            <WorkoutPlan
              key={item.id}
              stimulationBodyPart={item.workout.category}
              exerciseName={item.workout.name}
              workoutSets={item.workoutSets}
              onPressRemove={() => removeWorkoutTrainingPlan(item.id)}
              onPressAddSet={() => addWorkoutSet(item.id)}
              onBlurModifyWeight={modifyWorkoutSetWeight(item.id)}
              onBlurModifyCount={modifyWorkoutSetCount(item.id)}
              onPressModifyProgressStatus={modifyWorkoutSetProgressStatus(
                item.id,
              )}
              onPressRemoveSet={() => removeWorkoutSet(item.id)}
              last={index === workoutPlans.workoutTrainingPlans.length - 1}
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
            <Button onPress={finishWorkoutPlan}>운동 끝내기</Button>
          </View>
        </Shadow>
      </View>
    </HeaderLayout>
  );
}
