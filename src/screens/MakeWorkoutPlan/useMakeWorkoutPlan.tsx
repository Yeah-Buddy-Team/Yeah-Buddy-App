import { useRoute } from '@react-navigation/native';
import React from 'react';
import { WorkoutCount, WorkoutPlan } from '../../types/Model';
import { RootRouteProps, RootStack } from '../../types/System';

export const useMakeWorkoutPlan = () => {
  const {
    params: { exerciseList },
  } = useRoute<RootRouteProps[RootStack.MakeWorkoutPlan]>();

  const [workoutPlan, setWorkoutPlan] = React.useState<WorkoutPlan[]>([]);

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

    setWorkoutPlan(workoutPlanInit);
  }, []);

  const addWorkoutCount = (exerciseId: number) => {
    const copyOfWorkoutPlan = [...workoutPlan];

    const targetWorkout = copyOfWorkoutPlan.find(
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

    setWorkoutPlan(copyOfWorkoutPlan);
  };

  return {
    workoutPlan,
    addWorkoutCount,
  };
};
