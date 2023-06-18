import { Image, TextInput } from 'react-native';
import { Text, View } from '../../components/Common';
import { COLORS } from '../../constants';
import { HeaderLayout } from '../../layouts';
import { useEditProfile } from './useEditProfile';
import ProfileIcon from '../../assets/images/Profile.png';
import KakaoIcon from '../../assets/images/KakaoIcon.png';
import Setting from '../../assets/images/Setting.png';

export function EditProfile() {
  const { textInputRef, profile, isEditing, onPressEdit, onChangeTextNewName } =
    useEditProfile();

  return (
    <HeaderLayout headerTitle="회원증 편집">
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            height: 128,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.GRAY[100],
            paddingTop: 16,
            paddingHorizontal: 20,
            backgroundColor: COLORS.WHITE,
          }}
        >
          <View row>
            <Image source={ProfileIcon} style={{ width: 36, height: 36 }} />
            <View
              style={{
                marginLeft: 12,
              }}
            >
              <Text
                body3
                semibold
                style={{
                  marginBottom: 4,
                }}
              >
                회원증 편집
              </Text>
              <Text caption color={COLORS.GRAY[500]} medium>
                {profile.name} 회원님 반갑습니다
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.GRAY[100],
              marginTop: 16,
              marginBottom: 18,
            }}
          />
          <View
            row
            style={{
              justifyContent: 'space-between',
            }}
          >
            <View row>
              <Text
                body3
                medium
                color={COLORS.GRAY[500]}
                style={{
                  marginRight: 38,
                }}
              >
                이름
              </Text>
              {isEditing ? (
                <TextInput
                  ref={textInputRef}
                  placeholder={profile.name}
                  onChangeText={onChangeTextNewName}
                  style={{
                    top: -6.3,
                    padding: 0,
                    fontSize: 14,
                    lineHeight: 16.94,
                  }}
                  onSubmitEditing={onPressEdit}
                />
              ) : (
                <Text body3 medium color={COLORS.GRAY[900]}>
                  {profile.name}
                </Text>
              )}
            </View>
            <Text body3 medium color={COLORS.GRAY[600]} onPress={onPressEdit}>
              {isEditing ? '완료' : '수정'}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 87,
            justifyContent: 'space-between',
            borderRadius: 12,
            padding: 16,
            backgroundColor: COLORS.KAKAO_YELLOW,
            marginTop: 20,
          }}
          row
        >
          <View
            style={{
              alignItems: 'center',
            }}
            row
          >
            <Image
              source={{ uri: profile.profileImageUrl }}
              style={{
                width: 55,
                height: 55,
                borderRadius: 27.5,
              }}
            />
            <View
              style={{
                marginLeft: 16,
              }}
            >
              <View
                style={{
                  marginBottom: 6,
                  alignItems: 'center',
                }}
                row
              >
                <Image
                  source={KakaoIcon}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <Text body3 semibold color={COLORS.KAKAO_BROWN}>
                  {profile.name}
                </Text>
              </View>
              <Text caption color={COLORS.KAKAO_SECOND}>
                +82 10-1234-5678
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              paddingRight: 10,
            }}
            row
          >
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: 'rgba(60, 30, 30, 0.08)',
                marginRight: 24,
              }}
            />
            <Image
              source={Setting}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </View>
        </View>
      </View>
    </HeaderLayout>
  );
}
