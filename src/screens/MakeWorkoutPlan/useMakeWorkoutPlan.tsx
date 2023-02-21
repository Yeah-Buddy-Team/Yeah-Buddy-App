import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { WorkoutCount, WorkoutPlan } from '../../types/Model';
import {
  RootRouteProps,
  RootStack,
  RootStackNavigationProps,
} from '../../types/System';

export const useMakeWorkoutPlan = () => {
  const {
    params: { exerciseList },
  } = useRoute<RootRouteProps[RootStack.MakeWorkoutPlan]>();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.MakeWorkoutPlan]>();

  const [workoutPlans, setWorkoutPlans] = React.useState<WorkoutPlan[]>([]);

  React.useEffect(() => {
    const workoutCountInit: WorkoutCount = {
      set: 1,
      kg: 0,
      reps: 0,
      completed: false,
    };

    const workoutPlanInit = exerciseList.map(item =>
      Object.assign(item, {
        workoutCount: [workoutCountInit],
      }),
    );

    setWorkoutPlans(workoutPlanInit);
  }, []);

  const removeWorkoutPlan = (exerciseId: number) => {
    let copyOfWorkoutPlans = [...workoutPlans];

    copyOfWorkoutPlans = copyOfWorkoutPlans.filter(
      item => item.id !== exerciseId,
    );

    if (copyOfWorkoutPlans.length < 1) navigation.goBack();
    setWorkoutPlans(copyOfWorkoutPlans);
  };

  const addWorkoutCount = (exerciseId: number) => {
    const copyOfWorkoutPlans = [...workoutPlans];

    const targetWorkout = copyOfWorkoutPlans.find(
      item => item.id === exerciseId,
    );

    if (!targetWorkout) return;

    const emptyWorkoutCount: WorkoutCount = {
      set: targetWorkout ? targetWorkout.workoutCount.length + 1 : 1,
      kg: 0,
      reps: 0,
      completed: false,
    };

    targetWorkout.workoutCount =
      targetWorkout.workoutCount.concat(emptyWorkoutCount);

    setWorkoutPlans(copyOfWorkoutPlans);
  };

  const modifyWorkoutCountKg =
    (exerciseId: number) => (set: number, kg: number) => {
      const copyOfWorkoutPlans = [...workoutPlans];

      const targetWorkout = copyOfWorkoutPlans.find(
        item => item.id === exerciseId,
      );
      const targetWorkoutCount = targetWorkout?.workoutCount.find(
        item => item.set === set,
      );

      if (!targetWorkoutCount) return;

      targetWorkoutCount.kg = kg;

      setWorkoutPlans(copyOfWorkoutPlans);
    };

  const modifyWorkoutCountReps =
    (exerciseId: number) => (set: number, reps: number) => {
      const copyOfWorkoutPlans = [...workoutPlans];

      const targetWorkout = copyOfWorkoutPlans.find(
        item => item.id === exerciseId,
      );
      const targetWorkoutCount = targetWorkout?.workoutCount.find(
        item => item.set === set,
      );

      if (!targetWorkoutCount) return;

      targetWorkoutCount.reps = reps;

      setWorkoutPlans(copyOfWorkoutPlans);
    };

  const modifyWorkoutCountCompleted = (exerciseId: number) => (set: number) => {
    const copyOfWorkoutPlans = [...workoutPlans];

    const targetWorkout = copyOfWorkoutPlans.find(
      item => item.id === exerciseId,
    );
    const targetWorkoutCount = targetWorkout?.workoutCount.find(
      item => item.set === set,
    );

    if (!targetWorkoutCount) return;

    targetWorkoutCount.completed = !targetWorkoutCount.completed;

    setWorkoutPlans(copyOfWorkoutPlans);
  };

  const removeWorkoutCount = (exerciseId: number) => {
    const copyOfWorkoutPlans = [...workoutPlans];

    const targetWorkout = copyOfWorkoutPlans.find(
      item => item.id === exerciseId,
    );

    if (!targetWorkout) return;

    targetWorkout.workoutCount.pop();

    setWorkoutPlans(copyOfWorkoutPlans);
  };

  return {
    workoutPlans,
    removeWorkoutPlan,
    addWorkoutCount,
    modifyWorkoutCountKg,
    modifyWorkoutCountReps,
    modifyWorkoutCountCompleted,
    removeWorkoutCount,
  };
};
