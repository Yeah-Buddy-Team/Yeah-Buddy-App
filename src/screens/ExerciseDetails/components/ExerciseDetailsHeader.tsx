import { TouchableOpacity } from 'react-native';
import { Icon, Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  exerciseName: string;
  onPressCancel: () => void;
};

export const ExerciseDetailsHeader = (props: Props) => {
  const { exerciseName, onPressCancel } = props;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 24,
        borderBottomColor: COLORS.GRAY[200],
        borderBottomWidth: 1,
      }}
    >
      <Text semibold>{exerciseName}</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
        }}
        activeOpacity={0.8}
        onPress={onPressCancel}
      >
        <Icon name="Cancel" />
      </TouchableOpacity>
    </View>
  );
};
