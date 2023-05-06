import { TextInput, TouchableOpacity } from 'react-native';
import { Icon, Text, View } from '../../components/Common';
import { GRAY, INDIGO } from '../../constants/Theme';
import { BasicLayout } from '../../layouts';
import { useSearchFriends } from './useSearchFriends';

export function SearchFriends() {
  const { searchText, onPressHeaderBack, onChangeSearchText } =
    useSearchFriends();

  return (
    <BasicLayout>
      <View
        style={{ height: 64, alignItems: 'center', paddingHorizontal: 12 }}
        row
      >
        <TouchableOpacity onPress={onPressHeaderBack} activeOpacity={0.7}>
          <Icon name="Back" />
        </TouchableOpacity>
        <View
          style={{
            height: 37,
            backgroundColor: INDIGO[50],
            marginHorizontal: 10,
            borderRadius: 6,
            alignItems: 'center',
            paddingLeft: 10,
          }}
          row
          fill
        >
          <Icon name="SearchGray" style={{ width: 20, height: 20 }} />
          <TextInput
            value={searchText}
            onChangeText={onChangeSearchText}
            placeholder="검색"
            placeholderTextColor={GRAY[500]}
            style={{ flex: 1 }}
          />
        </View>
        <Text body3>취소</Text>
      </View>
    </BasicLayout>
  );
}
