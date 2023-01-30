export const POST_KAKAO_SIGN_IN = (accessToken: string, refreshToken: string) =>
  `/login/oauth/KAKAO?accessToken=${accessToken}&refreshToken=${refreshToken}`;

// Workout
export const GET_WORKOUT_STIMULATION_BODY_PARTS = () =>
  `/workout-stimulation-body-parts`;
export const GET_WORKOUT_EXERCISE_BY_BODY_PART = (bodyPart: string) =>
  `/workouts?bodyPart=${bodyPart}`;
