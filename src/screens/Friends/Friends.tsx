import { Touchable, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Icon, Text, View } from '../../components/Common';
import { INDIGO, WHITE } from '../../constants/Theme';
import { HeaderLayout } from '../../layouts';
import { useFriends } from './useFriends';
import { FriendItem } from '../../components/Business';
import Profile1 from '../../assets/images/Profile1.png';
import Profile2 from '../../assets/images/Profile2.png';
import Profile3 from '../../assets/images/Profile3.png';

export function Friends() {
  const { navigateToSearchFriends, navigateToFriendsRequest } = useFriends();
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
        <FriendItem
          profile={Profile1}
          name="Mr. Victor"
          timeline={2}
          type="friend"
        />
        <FriendItem
          profile={Profile2}
          name="오덕수"
          timeline={4}
          type="friend"
        />
        <FriendItem
          profile={Profile3}
          name="김옥동"
          timeline={8}
          type="friend"
        />
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
