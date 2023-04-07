import { WorkoutAPI } from '../api';
import { WorkoutPlan, WorkoutSet } from '../types/Model';
import { getCurrentDate } from '../utils';

export const getWorkoutStimulationBodyPartByOrder = async () => {
  try {
    const result = await WorkoutAPI.getWorkoutStimulationBodyParts();

    // order 기준 오름차순 정렬
    result?.sort((a, b) => a.order - b.order);

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getWorkoutExerciseByBodyPart = async (bodyPart: string) => {
  try {
    const result = await WorkoutAPI.getWorkoutExerciseByBodyPart(bodyPart);

    return result;
  } catch (e: any) {
    console.error(e.messsage);
  }
};

export const getExerciseDetails = async (exerciseId: number) => {
  try {
    const result = await WorkoutAPI.getExerciseDetails(exerciseId);

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getWorkoutPlans = async () => {
  try {
    const result = await WorkoutAPI.getWorkoutPlans();

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const postWorkoutPlans = async (workoutIdArr: number[]) => {
  try {
    const result = await WorkoutAPI.postWorkoutPlans(workoutIdArr);

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const putWorkoutPlans = async (
  workoutPlanId: number,
  workoutSets: WorkoutSet[],
) => {
  try {
    const result = await WorkoutAPI.putWorkoutPlans(workoutPlanId, workoutSets);

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const removeWorkoutTrainingPlan = (
  workoutPlans: WorkoutPlan,
  workoutTrainingPlanId: number,
) => {
  let copyOfWorkoutPlans = { ...workoutPlans };

  copyOfWorkoutPlans.workoutTrainingPlans =
    copyOfWorkoutPlans.workoutTrainingPlans.filter(
      item => item.id !== workoutTrainingPlanId,
    );

  return copyOfWorkoutPlans;
};

export const addWorkoutSet = (
  workoutPlans: WorkoutPlan,
  workoutTrainingPlanId: number,
) => {
  let copyOfWorkoutPlans = { ...workoutPlans };

  const targetWorkoutTrainingPlan =
    copyOfWorkoutPlans.workoutTrainingPlans.find(
      item => item.id === workoutTrainingPlanId,
    );

  if (!targetWorkoutTrainingPlan) return;

  const emptyWorkoutSet: WorkoutSet = {
    id: targetWorkoutTrainingPlan.workoutSets.slice(-1)[0].id + 1,
    weight: 0,
    count: 0,
    seconds: 0,
    progressStatus: 'NOT_YET',
  };

  targetWorkoutTrainingPlan.workoutSets =
    targetWorkoutTrainingPlan.workoutSets.concat(emptyWorkoutSet);

  return copyOfWorkoutPlans;
};

export const modifyWorkoutSetWeight = (
  workoutPlans: WorkoutPlan,
  workoutTrainingPlanId: number,
  workoutSetId: number,
  targetWeight: number,
) => {
  let copyOfWorkoutPlans = { ...workoutPlans };

  const targetWorkoutSet = copyOfWorkoutPlans.workoutTrainingPlans
    .find(item => item.id === workoutTrainingPlanId)
    ?.workoutSets.find(item => item.id === workoutSetId);

  if (!targetWorkoutSet) return;

  targetWorkoutSet.weight = targetWeight;

  return copyOfWorkoutPlans;
};

export const modifyWorkoutSetCount = (
  workoutPlans: WorkoutPlan,
  workoutTrainingPlanId: number,
  workoutSetId: number,
  targetCount: number,
) => {
  let copyOfWorkoutPlans = { ...workoutPlans };

  const targetWorkoutSet = copyOfWorkoutPlans.workoutTrainingPlans
    .find(item => item.id === workoutTrainingPlanId)
    ?.workoutSets.find(item => item.id === workoutSetId);

  if (!targetWorkoutSet) return;

  targetWorkoutSet.count = targetCount;

  return copyOfWorkoutPlans;
};

export const modifyWorkoutSetProgressStatus = (
  workoutPlans: WorkoutPlan,
  workoutTrainingPlanId: number,
  workoutSetId: number,
) => {
  let copyOfWorkoutPlans = { ...workoutPlans };

  const temp = copyOfWorkoutPlans.workoutTrainingPlans.find(
    item => item.id === workoutTrainingPlanId,
  );

  const targetWorkoutSet = copyOfWorkoutPlans.workoutTrainingPlans
    .find(item => item.id === workoutTrainingPlanId)
    ?.workoutSets.find(item => item.id === workoutSetId);

  if (!targetWorkoutSet) return;

  if (targetWorkoutSet.progressStatus === 'NOT_YET')
    targetWorkoutSet.progressStatus = 'COMPLETED';
  else targetWorkoutSet.progressStatus = 'NOT_YET';

  return copyOfWorkoutPlans;
};

export const removeWorkoutSet = (
  workoutPlans: WorkoutPlan,
  workoutTrainingPlanId: number,
) => {
  let copyOfWorkoutPlans = { ...workoutPlans };

  const targetWorkoutTrainingPlan =
    copyOfWorkoutPlans.workoutTrainingPlans.find(
      item => item.id === workoutTrainingPlanId,
    );

  if (!targetWorkoutTrainingPlan) return;

  targetWorkoutTrainingPlan.workoutSets.pop();

  return copyOfWorkoutPlans;
};
