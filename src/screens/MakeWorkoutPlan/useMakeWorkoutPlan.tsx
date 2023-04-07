import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { WorkoutService } from '../../services';
import { WorkoutPlan } from '../../types/Model';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useMakeWorkoutPlan = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.MakeWorkoutPlan]>();

  const [workoutPlans, setWorkoutPlans] = React.useState<WorkoutPlan>();

  React.useEffect(() => {
    (async () => {
      const result = await WorkoutService.getWorkoutPlans();

      setWorkoutPlans(result);
    })();
  }, []);

  const removeWorkoutTrainingPlan = (workoutTrainingPlanId: number) => {
    if (!workoutPlans) return;

    const result = WorkoutService.removeWorkoutTrainingPlan(
      workoutPlans,
      workoutTrainingPlanId,
    );

    setWorkoutPlans(result);
  };

  const addWorkoutSet = (workoutTrainingPlanId: number) => {
    if (!workoutPlans) return;

    const result = WorkoutService.addWorkoutSet(
      workoutPlans,
      workoutTrainingPlanId,
    );

    setWorkoutPlans(result);
  };

  const modifyWorkoutSetWeight =
    (workoutTrainingPlanId: number) =>
    (workoutSetId: number, targetWeight: number) => {
      if (!workoutPlans) return;

      const result = WorkoutService.modifyWorkoutSetWeight(
        workoutPlans,
        workoutTrainingPlanId,
        workoutSetId,
        targetWeight,
      );

      setWorkoutPlans(result);
    };

  const modifyWorkoutSetCount =
    (workoutTrainingPlanId: number) =>
    (workoutSetId: number, targetCount: number) => {
      if (!workoutPlans) return;

      const result = WorkoutService.modifyWorkoutSetCount(
        workoutPlans,
        workoutTrainingPlanId,
        workoutSetId,
        targetCount,
      );

      setWorkoutPlans(result);
    };

  const modifyWorkoutSetProgressStatus =
    (workoutTrainingPlanId: number) => (workoutSetId: number) => {
      if (!workoutPlans) return;

      const result = WorkoutService.modifyWorkoutSetProgressStatus(
        workoutPlans,
        workoutTrainingPlanId,
        workoutSetId,
      );

      setWorkoutPlans(result);
    };

  const removeWorkoutSet = (workoutTrainingPlanId: number) => {
    if (!workoutPlans) return;

    const result = WorkoutService.removeWorkoutSet(
      workoutPlans,
      workoutTrainingPlanId,
    );

    setWorkoutPlans(result);
  };

  const finishWorkoutPlan = async () => {
    if (!workoutPlans) return;

    const result = await Promise.all(
      workoutPlans.workoutTrainingPlans.map(item => {
        return WorkoutService.putWorkoutPlans(item.id, item.workoutSets);
      }),
    );
  };

  return {
    workoutPlans,
    removeWorkoutTrainingPlan,
    addWorkoutSet,
    modifyWorkoutSetWeight,
    modifyWorkoutSetCount,
    modifyWorkoutSetProgressStatus,
    removeWorkoutSet,
    finishWorkoutPlan,
  };
};
