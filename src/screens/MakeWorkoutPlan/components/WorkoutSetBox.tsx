import { TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';
import { WorkoutSet } from '../../../types/Model';
import { WorkoutSetItem } from './WorkoutSetItem';

type Props = {
  workoutSets: WorkoutSet[];
  onPressAddSet: () => void;
  onBlurModifyWeight: (set: number, kg: number) => void;
  onBlurModifyCount: (set: number, reps: number) => void;
  onPressModifyProgressStatus: (set: number) => void;
  onPressRemoveSet: () => void;
};

export function WorkoutSetBox(props: Props) {
  const {
    workoutSets,
    onPressAddSet,
    onBlurModifyWeight,
    onBlurModifyCount,
    onPressModifyProgressStatus,
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
      {workoutSets.map((item, index) => (
        <WorkoutSetItem
          key={item.id}
          id={item.id}
          set={index + 1}
          weight={item.weight}
          count={item.count}
          progressStatus={item.progressStatus}
          onBlurModifyWeight={onBlurModifyWeight}
          onBlurModifyCount={onBlurModifyCount}
          onPressModifyProgressStatus={onPressModifyProgressStatus}
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
            width: workoutSets.length > 1 ? 144 : 303,
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
        {workoutSets.length > 1 && (
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
