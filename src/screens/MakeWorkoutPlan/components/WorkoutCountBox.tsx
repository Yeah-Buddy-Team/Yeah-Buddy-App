import { TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';
import { WorkoutCount } from '../../../types/Model';
import { WorkoutCountItem } from './WorkroutCountItem';

type Props = {
  workoutCounts: WorkoutCount[];
  onPressAddSet: () => void;
  onBlurModifyKg: (set: number, kg: number) => void;
  onBlurModifyReps: (set: number, reps: number) => void;
  onPressModifyCompleted: (set: number) => void;
  onPressRemoveSet: () => void;
};

export function WorkoutCountBox(props: Props) {
  const {
    workoutCounts,
    onPressAddSet,
    onBlurModifyKg,
    onBlurModifyReps,
    onPressModifyCompleted,
    onPressRemoveSet,
  } = props;

  return (
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
      }}
    >
      <View
        row
        style={{
          paddingLeft: 16,
        }}
      >
        <Text
          style={{
            width: 48,
            textAlign: 'center',
          }}
          body3
        >
          세트
        </Text>
        <Text
          style={{
            width: 56,
            textAlign: 'center',
            marginLeft: 16,
          }}
          body3
        >
          kg
        </Text>
        <Text
          style={{
            width: 48,
            textAlign: 'center',
            marginLeft: 16,
          }}
          body3
        >
          회
        </Text>
        <Text
          style={{
            width: 56,
            textAlign: 'center',
            marginLeft: 39,
          }}
          body3
        >
          완료
        </Text>
      </View>
      {workoutCounts.map(item => (
        <WorkoutCountItem
          key={item.set}
          set={item.set}
          kg={item.kg}
          reps={item.reps}
          completed={item.completed}
          onBlurModifyKg={onBlurModifyKg}
          onBlurModifyReps={onBlurModifyReps}
          onPressModifyCompleted={onPressModifyCompleted}
        />
      ))}
      <View
        row
        style={{
          marginTop: 16,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{
            width: workoutCounts.length > 1 ? 144 : 303,
            height: 41,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.GRAY[100],
            borderWidth: 1,
            borderColor: COLORS.GRAY[200],
            borderRadius: 4,
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowRadius: 2,
            shadowColor: '#000',
            shadowOpacity: 0.16,
            elevation: 2,
          }}
          activeOpacity={0.8}
          onPress={onPressAddSet}
        >
          <Text semibold body3>
            세트 추가
          </Text>
        </TouchableOpacity>
        {workoutCounts.length > 1 && (
          <TouchableOpacity
            style={{
              width: 151,
              height: 41,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.GRAY[100],
              borderWidth: 1,
              borderColor: COLORS.GRAY[200],
              borderRadius: 4,
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowRadius: 2,
              shadowColor: '#000',
              shadowOpacity: 0.16,
              elevation: 2,
            }}
            activeOpacity={0.8}
            onPress={onPressRemoveSet}
          >
            <Text semibold body3>
              세트 삭제
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}