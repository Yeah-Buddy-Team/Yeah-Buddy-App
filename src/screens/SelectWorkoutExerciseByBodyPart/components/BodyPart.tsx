import { TouchableOpacity } from 'react-native';
import { Text } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  label: string;
  selected: boolean;
  last: boolean;
  onPress: (targetBodyPart: string) => void;
};

export function BodyPart(props: Props) {
  const { label, selected, last, onPress } = props;

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 32,
        backgroundColor: selected ? COLORS.INDIGO[500] : COLORS.GRAY[200],
        flex: 0,
        marginRight: last ? 0 : 6,
      }}
      onPress={() => onPress(label)}
      activeOpacity={0.8}
    >
      <Text caption medium color={selected ? COLORS.GRAY[50] : undefined}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
