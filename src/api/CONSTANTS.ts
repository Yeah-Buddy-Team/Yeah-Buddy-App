// Auth
export const POST_KAKAO_SIGN_IN = (accessToken: string, refreshToken: string) =>
  `/login/oauth/KAKAO?accessToken=${accessToken}&refreshToken=${refreshToken}`;
export const GET_PROFILE = () => '/users/me';
export const PUT_NAME = () => '/users/me/name';

// Workout
export const GET_WORKOUT_STIMULATION_BODY_PARTS = () =>
  `/workout-stimulation-body-parts`;
export const GET_WORKOUT_EXERCISE_BY_BODY_PART = (bodyPart: string) =>
  `/workouts?workoutStimulationBodyPart=${bodyPart}`;
export const GET_EXERCISE_DETAILS = (exerciseId: number) =>
  `/workouts/${exerciseId}`;
export const GET_WORKOUT_PLANS = (workoutDate: string) =>
  `/workout-plans/${workoutDate}`;
export const POST_WORKOUT_PLANS = (workoutDate: string) =>
  `/workout-plans/${workoutDate}/workout-training-plans`;
export const PUT_WORKOUT_PLANS = (workoutDate: string, workoutPlanId: number) =>
  `/workout-plans/${workoutDate}/workout-training-plans/${workoutPlanId}`;

// Friends
export const GET_FRIENDS = () => `/friends?followeeId=1`;
export const GET_FRIENDS_REQUEST = () => `/friend-requests?followers&followees`;
