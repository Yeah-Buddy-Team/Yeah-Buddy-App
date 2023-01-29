import { View } from '../../components/Common';
import { WorkoutStimulationBodyPartObj } from '../../constants';
import { HeaderLayout } from '../../layouts';
import { WorkoutStimulationBodyPart } from './components';
import { useSelectWorkoutStimulationBodyPart } from './useSelectWorkoutStimulationBodyPart';

export function SelectWorkoutStimulationBodyPart() {
  const { workoutStimulationBodyParts, confirmStimulationBodyPart } =
    useSelectWorkoutStimulationBodyPart();

  return (
    <HeaderLayout headerTitle="운동 시작하기">
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
        row
      >
        {workoutStimulationBodyParts.map(item => {
          if (!WorkoutStimulationBodyPartObj.hasOwnProperty(item.key)) return;
          const target = WorkoutStimulationBodyPartObj[item.key];

          return (
            <WorkoutStimulationBodyPart
              color={target.color}
              key={item.key}
              label={target.name}
              icon={target.icon}
              onPress={confirmStimulationBodyPart}
            />
          );
        })}
      </View>
    </HeaderLayout>
  );
}
