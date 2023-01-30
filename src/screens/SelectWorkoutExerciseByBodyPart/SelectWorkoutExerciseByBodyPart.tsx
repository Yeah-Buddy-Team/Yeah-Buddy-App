import { ScrollView, useWindowDimensions } from 'react-native';
import { View, Button } from '../../components/Common';
import { HeaderLayout } from '../../layouts';
import { useSelectWorkoutExerciseByBodyPart } from './useSelectWorkoutExerciseByBodyPart';
import { BodyPart, Exercise } from './components';
import { COLORS, WorkoutStimulationBodyPartObj } from '../../constants';
import TempExerciseImg from '../../assets/images/TempExerciseImg.png';
import { Shadow } from 'react-native-shadow-2';

export function SelectWorkoutExerciseByBodyPart() {
  const {
    exerciseList,
    selectedBodyPart,
    selectedExerciseList,
    workoutStimulationBodyParts,
    changeSelectedBodyPart,
    addExerciseToWorkoutPlan,
    removeExerciseFromWorkoutPlan,
    makeWorkoutPlan,
  } = useSelectWorkoutExerciseByBodyPart();
  const { width: WIDTH } = useWindowDimensions();

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
          {workoutStimulationBodyParts.map((item, index) => {
            if (!WorkoutStimulationBodyPartObj.hasOwnProperty(item.key)) return;
            const target = WorkoutStimulationBodyPartObj[item.key];

            return (
              <BodyPart
                onPress={() => changeSelectedBodyPart(item.key)}
                label={target.name}
                key={item.key}
                selected={selectedBodyPart === item.key}
                last={index === 7}
              />
            );
          })}
        </ScrollView>
        <ScrollView
          style={{
            flex: 1,
          }}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >
          {exerciseList.map(item => (
            <View key={item.id}>
              <Exercise
                selected={selectedExerciseList.includes(item)}
                name={item.name}
                thumbnail={TempExerciseImg}
                onPress={() => {
                  if (selectedExerciseList.includes(item))
                    removeExerciseFromWorkoutPlan(item.id);
                  else addExerciseToWorkoutPlan(item);
                }}
              />
              <View
                style={{
                  marginHorizontal: 22,
                  height: 0,
                  borderColor: COLORS.GRAY[200],
                  borderWidth: 0.5,
                }}
              />
            </View>
          ))}
        </ScrollView>
        <Shadow
          startColor="rgba(0, 0, 0, 0.08)"
          offset={[0, -1]}
          style={{
            borderRadius: 4,
          }}
        >
          <View
            style={{
              width: WIDTH,
              height: 85,
              borderTopColor: COLORS.GRAY[300],
              borderTopWidth: 1,
              paddingTop: 16,
              paddingHorizontal: 20,
              backgroundColor: COLORS.WHITE,
            }}
          >
            <Button onPress={makeWorkoutPlan}>운동추가</Button>
          </View>
        </Shadow>
      </View>
    </HeaderLayout>
  );
}
