import { Text, View } from '../../components/Common';
import { GRAY } from '../../constants/Theme';
import { HeaderLayout } from '../../layouts';
import { useFriendsRequest } from './useFriendsRequest';

export function FriendsRequest() {
  useFriendsRequest();

  return (
    <HeaderLayout headerTitle="친구 요청">
      <View
        style={{
          borderColor: GRAY[300],
          borderTopWidth: 1,
          borderBottomWidth: 1,
          alignItems: 'center',
        }}
      >
        <Text
          body3
          style={{
            marginVertical: 8,
          }}
          medium
          color={GRAY[700]}
        >
          받은 요청
        </Text>
      </View>
      <View style={{ paddingVertical: 42, alignItems: 'center' }}>
        <Text medium body3 color={GRAY[900]}>
          받은 요청이 없습니다
        </Text>
      </View>
      <View
        style={{
          borderColor: GRAY[300],
          borderTopWidth: 1,
          borderBottomWidth: 1,
          alignItems: 'center',
        }}
      >
        <Text
          body3
          style={{
            marginVertical: 8,
          }}
          medium
          color={GRAY[700]}
        >
          보낸 요청
        </Text>
      </View>
      <View style={{ paddingVertical: 42, alignItems: 'center' }}>
        <Text medium body3 color={GRAY[900]}>
          보낸 요청이 없습니다
        </Text>
      </View>
    </HeaderLayout>
  );
}
