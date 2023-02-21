import { View } from '../../../components/Common';
import { COLORS } from '../../../constants';
import { WorkoutCount } from '../../../types/Model';
import { WorkoutCountBox } from './WorkoutCountBox';
import { WorkoutInfoBox } from './WorkoutInfoBox';

type Props = {
  stimulationBodyPart: string;
  exerciseName: string;
  workoutCounts: WorkoutCount[];
  last: boolean;
  onPressRemove: () => void;
  onPressAddSet: () => void;
  onBlurModifyKg: (set: number, kg: number) => void;
  onBlurModifyReps: (set: number, reps: number) => void;
  onPressModifyCompleted: (set: number) => void;
  onPressRemoveSet: () => void;
};

export function WorkoutPlan(props: Props) {
  const {
    stimulationBodyPart,
    exerciseName,
    workoutCounts,
    last,
    onPressRemove,
    onPressAddSet,
    onBlurModifyKg,
    onBlurModifyReps,
    onPressModifyCompleted,
    onPressRemoveSet,
  } = props;

  return (
    <View
      style={{
        width: 335,
        borderColor: COLORS.GRAY[300],
        borderWidth: 1,
        marginTop: 10,
        marginBottom: last ? 50 : 0,
        paddingBottom: 16,
      }}
    >
      <WorkoutInfoBox
        stimulationBodyPart={stimulationBodyPart}
        exerciseName={exerciseName}
        onPressRemove={onPressRemove}
      />
      <View
        style={{
          width: 331,
          height: 0,
          borderColor: COLORS.GRAY[300],
          borderWidth: 0.5,
          marginHorizontal: 0.5,
        }}
      />
      <WorkoutCountBox
        workoutCounts={workoutCounts}
        onPressAddSet={onPressAddSet}
        onBlurModifyKg={onBlurModifyKg}
        onBlurModifyReps={onBlurModifyReps}
        onPressModifyCompleted={onPressModifyCompleted}
        onPressRemoveSet={onPressRemoveSet}
      />
    </View>
  );
}
