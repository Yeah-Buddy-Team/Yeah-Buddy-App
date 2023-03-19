import { TouchableOpacity } from 'react-native';
import { Icon, Text, View } from '../../components/Common';
import { COLORS } from '../../constants';
import { ModalLayout } from '../../layouts';
import { ExerciseDetailsHeader } from './components';
import { ExerciseDetailsBody } from './components/ExerciseDetailsBody';
import { useExerciseDetails } from './useExerciseDetails';

export function ExerciseDetails() {
  const { exerciseDetails, onPressCancel } = useExerciseDetails();

  return (
    <ModalLayout>
      <View
        style={{
          width: '100%',
          height: '92%',
          backgroundColor: COLORS.GRAY[50],
          borderTopStartRadius: 24,
          borderTopEndRadius: 24,
        }}
        /* Next two lines are written to prevent event bubbling */
        onStartShouldSetResponder={() => true}
        onTouchEnd={e => e.stopPropagation()}
      >
        <ExerciseDetailsHeader
          exerciseName={exerciseDetails?.name}
          onPressCancel={onPressCancel}
        />
        <ExerciseDetailsBody
          exerciseStimulationBodyPart={exerciseDetails?.category}
          exerciseType="횟수"
          exerciseExplanation={
            exerciseDetails?.description
          }
        />
      </View>
    </ModalLayout>
  );
}
