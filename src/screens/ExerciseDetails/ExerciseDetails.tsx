import { TouchableOpacity } from 'react-native';
import { Icon, Text, View } from '../../components/Common';
import { COLORS } from '../../constants';
import { ModalLayout } from '../../layouts';
import { ExerciseDetailsHeader } from './components';
import { ExerciseDetailsBody } from './components/ExerciseDetailsBody';
import { useExerciseDetails } from './useExerciseDetails';

export function ExerciseDetails() {
  const { onPressCancel } = useExerciseDetails();

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
          exerciseName="푸시업"
          onPressCancel={onPressCancel}
        />
        <ExerciseDetailsBody
          exerciseStimulationBodyPart="가슴"
          exerciseType="횟수"
          exerciseExplanation={
            '1. 팔을 가슴 옆에 두고 바닥에 엎드립니다.\n2. 복근과 둔근에 힘을 준 상태로 팔꿈치를 피며 올라옵니다.\n3. 천천히 팔꿈치를 굽히며 시작 자세로 돌아갑니다.'
          }
        />
      </View>
    </ModalLayout>
  );
}
