import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Common';
import { COLORS } from '../../constants';
import { BasicLayout } from '../../layouts';
import SmallLogo from '../../assets/images/SmallLogo.png';
import KakaoLogo from '../../assets/images/KakaoLogo.png';
import EditProfile from '../../assets/images/EditProfile.png';
import { useMyProfile } from './useMyProfile';

export function MyProfile() {
  const { profile, onPressEditProfile } = useMyProfile();

  return (
    <BasicLayout>
      <View
        style={{
          height: 430,
          backgroundColor: COLORS.WHITE,
          elevation: 2,
          marginHorizontal: 20,
          marginTop: 20,
          paddingTop: 14,
          paddingHorizontal: 18,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            justifyContent: 'space-between',
          }}
          row
        >
          <View>
            <Text caption color={COLORS.GRAY[500]}>
              Since.
            </Text>
            <Text caption color={COLORS.GRAY[500]}>
              2022.04.14.
            </Text>
          </View>
          <Image
            source={SmallLogo}
            style={{ width: 50, height: 50, resizeMode: 'contain' }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            alignSelf: 'center',
          }}
        >
          <Image
            source={{ uri: profile?.profileImageUrl }}
            style={{ width: 128, height: 128, borderRadius: 64 }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 36,
            marginBottom: 32,
          }}
          row
        >
          <Image
            source={KakaoLogo}
            style={{ width: 24, height: 24, marginRight: 4 }}
          />
          <Text subtitle semibold>
            {profile?.name} 회원님
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.GRAY[200],
            marginHorizontal: 24,
            marginBottom: 34.5,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onPressEditProfile}
        >
          <Image
            source={EditProfile}
            style={{
              width: 24,
              height: 24,
              marginBottom: 8,
            }}
          />
          <Text caption2 color={COLORS.GRAY[500]}>
            회원증 편집
          </Text>
        </TouchableOpacity>
      </View>
    </BasicLayout>
  );
}
