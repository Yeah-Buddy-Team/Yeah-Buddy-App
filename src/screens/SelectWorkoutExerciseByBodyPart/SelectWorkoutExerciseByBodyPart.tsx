import { ScrollView } from 'react-native';
import { View } from '../../components/Common';
import { HeaderLayout } from '../../layouts';
import { useSelectWorkoutExerciseByBodyPart } from './useSelectWorkoutExerciseByBodyPart';
import { BodyPart, Exercise } from './components';
import { COLORS } from '../../constants';
import TempExerciseImg from '../../assets/images/TempExerciseImg.png';

export const BodyParts = [
  '팔(이두)',
  '팔(삼두)',
  '어깨',
  '가슴',
  '등',
  '하체',
  '유산소',
  '기타',
];

const tempArr = [
  '가',
  '나',
  '다',
  '라',
  '마',
  '바',
  '사',
  '아',
  '자',
  '차',
  '카',
  '타',
  '파',
  '하',
];

export function SelectWorkoutExerciseByBodyPart() {
  const { selectedBodyPart, addExerciseToWorkoutPlan, changeBodyPart } =
    useSelectWorkoutExerciseByBodyPart();

  return (
    <HeaderLayout headerTitle="운동 시작하기">
      <View fill>
        <ScrollView
          overScrollMode="never"
          horizontal
          style={{
            flexGrow: 0,
          }}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
          showsHorizontalScrollIndicator={false}
        >
          {BodyParts.map((item, index) => (
            <BodyPart
              onPress={changeBodyPart}
              label={item}
              key={item}
              selected={selectedBodyPart === item}
              last={index === 7}
            />
          ))}
        </ScrollView>
        <ScrollView
          style={{
            flex: 1,
          }}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >
          {tempArr.map(item => (
            <>
              <Exercise
                selected={true}
                name={item}
                thumbnail={TempExerciseImg}
              />
              <View
                style={{
                  marginHorizontal: 22,
                  height: 0,
                  borderColor: COLORS.GRAY[200],
                  borderWidth: 0.5,
                }}
              />
            </>
          ))}
        </ScrollView>
      </View>
    </HeaderLayout>
  );
}
