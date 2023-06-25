import { Image, TouchableOpacity } from 'react-native';
import { GRAY, INDIGO } from '../../../constants/Theme';
import { Text, View } from '../../Common';
import { Friend } from '../../../types/Model';

type Props = Friend & {
  type: 'received' | 'sent' | 'friend';
  deleteFriend?: (userId: number) => void;
};

export function FriendItem(props: Props) {
  const { type, userId, profileImageUrl, name, deleteFriend } = props;

  return (
    <View
      style={{
        paddingLeft: 28,
        paddingRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 28,
      }}
      row
    >
      <View row>
        <Image
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
          }}
          source={{ uri: profileImageUrl }}
        />
        <View style={{ marginLeft: 16, justifyContent: 'center' }}>
          <Text body2 semibold>
            {name}
          </Text>
        </View>
        {/* <View style={{ marginLeft: 16 }}>
          <Text body2 semibold style={{ marginBottom: 4 }}>
            {name}
          </Text>
          <Text body3 color={GRAY[600]}>
            {timeline}시간 전에 운동함
          </Text>
        </View> */}
      </View>
      <View>
        {type === 'friend' ? (
          <TouchableOpacity
            style={{
              backgroundColor: GRAY[100],
              borderWidth: 1,
              borderColor: GRAY[200],
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 6,
            }}
            onPress={() => deleteFriend?.(userId)}
          >
            <Text body3 medium>
              삭제
            </Text>
          </TouchableOpacity>
        ) : type === 'sent' ? (
          <View
            style={{
              backgroundColor: GRAY[100],
              borderWidth: 1,
              borderColor: GRAY[200],
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 6,
            }}
          >
            <Text body3 medium>
              취소
            </Text>
          </View>
        ) : (
          <View row>
            <View
              style={{
                backgroundColor: INDIGO[500],
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 6,
              }}
            >
              <Text body3 medium color={GRAY[100]}>
                수락
              </Text>
            </View>
            <View
              style={{
                backgroundColor: GRAY[100],
                borderWidth: 1,
                borderColor: GRAY[200],
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 6,
              }}
            >
              <Text body3 medium>
                삭제
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
