import { View } from '../../../components/Common';
import { COLORS } from '../../../constants';
import { WorkoutCount } from '../../../types/Model';
import { WorkoutCountBox } from './WorkoutCountBox';
import { WorkoutInfoBox } from './WorkoutInfoBox';

type Props = {
  stimulationBodyPart: string;
  exerciseName: string;
  workoutCounts: WorkoutCount[];
  onPressAddSet: () => void;
};

export function WorkoutPlan(props: Props) {
  const { stimulationBodyPart, exerciseName, workoutCounts, onPressAddSet } =
    props;

  return (
    <View
      style={{
        width: 335,
        borderColor: COLORS.GRAY[300],
        borderWidth: 1,
        marginTop: 10,
        paddingBottom: 16,
      }}
    >
      <WorkoutInfoBox
        stimulationBodyPart={stimulationBodyPart}
        exerciseName={exerciseName}
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
      />
    </View>
  );
}
