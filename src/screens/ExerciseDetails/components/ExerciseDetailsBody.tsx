import { Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  exerciseStimulationBodyPart?: string;
  exerciseType: string;
  exerciseExplanation?: string[];
};

export const ExerciseDetailsBody = (props: Props) => {
  const { exerciseStimulationBodyPart = '', exerciseType, exerciseExplanation = [''] } =
    props;

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 200,
            height: 155,
            backgroundColor: 'black',
            borderRadius: 9,
          }}
        ></View>
      </View>
      <View style={{ marginTop: 40, justifyContent: 'space-between' }} row>
        <View
          style={{
            width: '47.6%',
            height: 56,
            backgroundColor: COLORS.GRAY[200],
            borderRadius: 8,
            paddingTop: 8,
            alignItems: 'center',
          }}
        >
          <Text body3 style={{ marginBottom: 4 }}>
            자극부위
          </Text>
          <Text body3 semibold>
            {exerciseStimulationBodyPart}
          </Text>
        </View>
        <View
          style={{
            width: '47.6%',
            height: 56,
            backgroundColor: COLORS.GRAY[200],
            borderRadius: 8,
            paddingTop: 8,
            alignItems: 'center',
          }}
        >
          <Text body3 style={{ marginBottom: 4 }}>
            타입
          </Text>
          <Text body3 semibold>
            {exerciseType}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 24 }}>
        {exerciseExplanation.map((item) => <Text>{item}</Text>)}
      </View>
    </View>
  );
};
