import { Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  set: number;
  kg: number;
  reps: number;
  completed: boolean;
};

export function WorkoutCountItem(props: Props) {
  const { set, kg, reps, completed } = props;

  return (
    <View
      row
      style={{
        marginTop: 10,
      }}
    >
      <View
        style={{
          width: 48,
          height: 32,
          backgroundColor: COLORS.INDIGO[50],
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text body2>{set}</Text>
      </View>
      <View
        style={{
          width: 54,
          height: 32,
          backgroundColor: COLORS.INDIGO[50],
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 16,
        }}
      >
        <Text body2>{kg}</Text>
      </View>
      <View
        style={{
          width: 48,
          height: 32,
          backgroundColor: COLORS.INDIGO[50],
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 16,
        }}
      >
        <Text body2>{reps}</Text>
      </View>
      <View
        style={{
          width: 56,
          height: 32,
          backgroundColor: completed ? COLORS.INDIGO[500] : COLORS.GRAY[400],
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 39,
        }}
      >
        <Text color={COLORS.WHITE}>✓</Text>
      </View>
    </View>
  );
}
