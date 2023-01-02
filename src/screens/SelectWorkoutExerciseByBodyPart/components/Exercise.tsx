import { Image, ImageSourcePropType } from 'react-native';
import { Icon, Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  selected: boolean;
  thumbnail: ImageSourcePropType;
  name: string;
};

export function Exercise(props: Props) {
  const { selected, thumbnail, name } = props;

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 15,
      }}
      row
    >
      <View
        row
        style={{
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderColor: selected ? COLORS.INDIGO[500] : COLORS.GRAY[400],
            borderWidth: 2,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {selected && (
            <View
              style={{
                width: 12,
                height: 12,
                backgroundColor: COLORS.INDIGO[500],
                borderRadius: 1,
              }}
            />
          )}
        </View>
        <Image
          source={thumbnail}
          style={{
            width: 40,
            resizeMode: 'contain',
            height: 31,
            marginHorizontal: 12,
          }}
        />
        <Text body3 medium>
          {name}
        </Text>
      </View>
      <Icon name="MoreInfo" size={20} width={20} height={20} />
    </View>
  );
}
