import { Icon, Text, View } from '../../../components/Common';

type Props = {
  stimulationBodyPart: string;
  exerciseName: string;
};

export function WorkoutInfoBox(props: Props) {
  const { stimulationBodyPart, exerciseName } = props;

  return (
    <View
      row
      style={{
        paddingVertical: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 8,
      }}
    >
      <View
        row
        style={{
          alignItems: 'center',
        }}
      >
        <Text
          semibold
          body3
          style={{
            marginRight: 12,
          }}
        >
          {stimulationBodyPart}
        </Text>
        <Text body2>{exerciseName}</Text>
      </View>
      <Icon name="Delete" />
    </View>
  );
}
