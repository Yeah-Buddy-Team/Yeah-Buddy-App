import { View } from '../../../components/Common';
import { COLORS } from '../../../constants';
import { WorkoutSet } from '../../../types/Model';
import { WorkoutSetBox } from './WorkoutSetBox';
import { WorkoutInfoBox } from './WorkoutInfoBox';

type Props = {
  stimulationBodyPart: string;
  exerciseName: string;
  workoutSets: WorkoutSet[];
  last: boolean;
  onPressRemove: () => void;
  onPressAddSet: () => void;
  onBlurModifyWeight: (set: number, kg: number) => void;
  onBlurModifyCount: (set: number, reps: number) => void;
  onPressModifyProgressStatus: (set: number) => void;
  onPressRemoveSet: () => void;
};

export function WorkoutPlan(props: Props) {
  const {
    stimulationBodyPart,
    exerciseName,
    workoutSets,
    last,
    onPressRemove,
    onPressAddSet,
    onBlurModifyWeight,
    onBlurModifyCount,
    onPressModifyProgressStatus,
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
      <WorkoutSetBox
        workoutSets={workoutSets}
        onPressAddSet={onPressAddSet}
        onBlurModifyWeight={onBlurModifyWeight}
        onBlurModifyCount={onBlurModifyCount}
        onPressModifyProgressStatus={onPressModifyProgressStatus}
        onPressRemoveSet={onPressRemoveSet}
      />
    </View>
  );
}
