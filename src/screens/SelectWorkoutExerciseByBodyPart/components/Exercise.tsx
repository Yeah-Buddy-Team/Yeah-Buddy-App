import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { Icon, Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  selected: boolean;
  thumbnail: ImageSourcePropType;
  name: string;
  onPress: () => void;
};

export function Exercise(props: Props) {
  const { selected, thumbnail, name, onPress } = props;

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 15,
      }}
      activeOpacity={0.8}
      onPress={onPress}
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
      <TouchableOpacity activeOpacity={0.8}>
        <Icon name="Info" size={20} width={20} height={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
