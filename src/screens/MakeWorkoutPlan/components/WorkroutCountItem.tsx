import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  set: number;
  kg: number;
  reps: number;
  completed: boolean;
  onBlurModifyKg: (set: number, kg: number) => void;
  onBlurModifyReps: (set: number, reps: number) => void;
  onPressModifyCompleted: (set: number) => void;
};

export function WorkoutCountItem(props: Props) {
  const {
    set,
    kg: initialKg,
    reps: initialReps,
    completed,
    onBlurModifyKg,
    onBlurModifyReps,
    onPressModifyCompleted,
  } = props;

  const [kg, setKg] = React.useState(initialKg);
  const [reps, setReps] = React.useState(initialReps);

  const onChangeKg = (text: string) => {
    const targetText = parseInt(text);

    if (isNaN(targetText)) return;
    setKg(targetText);
  };

  const onChangeReps = (text: string) => {
    const targetText = parseInt(text);

    if (isNaN(targetText)) return;
    setReps(targetText);
  };

  return (
    <View
      row
      style={{
        marginTop: 10,
        marginLeft: 16,
      }}
    >
      <View
        style={{
          width: 48,
          height: 32,
          backgroundColor: COLORS.INDIGO[50],
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text body2 semibold>
          {set}
        </Text>
      </View>
      <TextInput
        caretHidden
        value={kg.toString()}
        keyboardType="numeric"
        style={{
          width: 54,
          height: 32,
          backgroundColor: COLORS.INDIGO[50],
          borderRadius: 8,
          marginLeft: 16,
          fontSize: 16,
          fontWeight: '600',
          padding: 0,
        }}
        textAlign="center"
        clearTextOnFocus
        onChangeText={text => onChangeKg(text)}
        onBlur={() => onBlurModifyKg(set, kg)}
      />
      <TextInput
        caretHidden
        value={reps.toString()}
        keyboardType="numeric"
        style={{
          width: 48,
          height: 32,
          backgroundColor: COLORS.INDIGO[50],
          borderRadius: 8,
          marginLeft: 16,
          fontSize: 16,
          fontWeight: '600',
          padding: 0,
        }}
        textAlign="center"
        clearTextOnFocus
        onChangeText={text => onChangeReps(text)}
        onBlur={() => onBlurModifyReps(set, reps)}
      />
      <TouchableOpacity
        style={{
          width: 56,
          height: 32,
          backgroundColor: completed ? COLORS.INDIGO[500] : COLORS.GRAY[400],
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 39,
        }}
        activeOpacity={0.8}
        onPress={() => onPressModifyCompleted(set)}
      >
        <Text color={COLORS.WHITE}>✓</Text>
      </TouchableOpacity>
    </View>
  );
}
