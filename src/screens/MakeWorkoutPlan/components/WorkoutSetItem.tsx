import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Common';
import { COLORS } from '../../../constants';

type Props = {
  id: number;
  set: number;
  weight: number;
  count: number;
  progressStatus: 'NOT_YET' | 'COMPLETED';
  onBlurModifyWeight: (set: number, weight: number) => void;
  onBlurModifyCount: (set: number, count: number) => void;
  onPressModifyProgressStatus: (set: number) => void;
};

export function WorkoutSetItem(props: Props) {
  const {
    id,
    set,
    weight: initialWeight,
    count: initialCount,
    progressStatus,
    onBlurModifyWeight,
    onBlurModifyCount,
    onPressModifyProgressStatus,
  } = props;

  const [weight, setWeight] = React.useState(initialWeight);
  const [count, setCount] = React.useState(initialCount);

  const onChangeWeight = (text: string) => {
    const targetText = parseInt(text);

    if (isNaN(targetText)) return;
    setWeight(targetText);
  };

  const onChangeCount = (text: string) => {
    const targetText = parseInt(text);

    if (isNaN(targetText)) return;
    setCount(targetText);
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
        value={weight.toString()}
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
        onChangeText={text => onChangeWeight(text)}
        onBlur={() => onBlurModifyWeight(id, weight)}
      />
      <TextInput
        caretHidden
        value={count.toString()}
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
        onChangeText={text => onChangeCount(text)}
        onBlur={() => onBlurModifyCount(id, count)}
      />
      <TouchableOpacity
        style={{
          width: 56,
          height: 32,
          backgroundColor:
            progressStatus === 'COMPLETED'
              ? COLORS.INDIGO[500]
              : COLORS.GRAY[400],
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 39,
        }}
        activeOpacity={0.8}
        onPress={() => onPressModifyProgressStatus(id)}
      >
        <Text color={COLORS.WHITE}>✓</Text>
      </TouchableOpacity>
    </View>
  );
}
