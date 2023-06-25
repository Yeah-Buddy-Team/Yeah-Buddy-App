import { Touchable, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Icon, Text, View } from '../../components/Common';
import { INDIGO, WHITE } from '../../constants/Theme';
import { HeaderLayout } from '../../layouts';
import { useFriends } from './useFriends';
import { FriendItem } from '../../components/Business';

export function Friends() {
  const { friends, navigateToSearchFriends, navigateToFriendsRequest } =
    useFriends();
  const { width: WIDTH } = useWindowDimensions();

  return (
    <HeaderLayout
      headerBack={false}
      headerRight={
        <Text body3 color={INDIGO[500]} onPress={navigateToFriendsRequest}>
          요청
        </Text>
      }
      headerTitle="친구 목록"
    >
      <View
        style={{
          paddingTop: 28,
        }}
      >
        {friends.map(item => (
          <FriendItem key={item.userId} type="friend" {...item} />
        ))}
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          width: WIDTH - 40,
          bottom: 22,
          marginHorizontal: 20,
          backgroundColor: 'rgba(63, 81, 181, 0.86)',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 13,
          borderRadius: 14,
        }}
        onPress={navigateToSearchFriends}
      >
        <Text color={WHITE} semibold>
          검색
        </Text>
        <Icon name="Search" style={{ position: 'absolute', left: 14 }} />
      </TouchableOpacity>
    </HeaderLayout>
  );
}
