import { TouchableOpacity, ColorValue } from 'react-native';
import { Icon, Text } from '../../../components/Common';
import { IconMapType } from '../../../components/Common/Icon/IconMap';
import { COLORS } from '../../../constants';

type Props = {
  icon: IconMapType;
  label: string;
  color: ColorValue;
  onPress: () => void;
};

export function WorkoutStimulationBodyPart(props: Props) {
  const { icon, label, color, onPress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        marginBottom: 15,
        width: 160,
        height: 90,
        backgroundColor: color,
        borderRadius: 12,
        paddingLeft: 12,
        paddingTop: 17,
      }}
    >
      <Icon
        name={icon}
        width={27}
        style={{
          marginLeft: 2,
        }}
      />
      <Text
        semibold
        body2
        color={COLORS.WHITE}
        style={{
          marginTop: 18,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
