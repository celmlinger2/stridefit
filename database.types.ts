/**
 * Hand-written TypeScript types mirroring supabase/schema.sql.
 * (Regenerate with the Supabase CLI later via `supabase gen types` if desired.)
 */

export type MealType = "breakfast" | "lunch" | "dinner" | "snack";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type ActivityType =
  | "run"
  | "walk"
  | "cycle"
  | "swim"
  | "row"
  | "elliptical"
  | "other";
export type EventType = "race" | "challenge" | "group_run" | "other";

export interface Profile {
  id: string;
  display_name: string | null;
  calorie_target: number | null;
  protein_target_g: number | null;
  carbs_target_g: number | null;
  fat_target_g: number | null;
  health_data_consent: boolean;
  health_data_consented_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface FoodLog {
  id: string;
  user_id: string;
  logged_at: string;
  meal_type: MealType;
  food_name: string;
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
  created_at: string;
  updated_at: string;
}

export interface WorkoutTemplate {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  difficulty: Difficulty;
  created_at: string;
  updated_at: string;
}

export interface ExerciseSet {
  reps: number;
  weight_kg: number | null;
}

export interface LoggedExercise {
  name: string;
  sets: ExerciseSet[];
}

export interface WorkoutLog {
  id: string;
  user_id: string;
  template_id: string | null;
  performed_at: string;
  exercises: LoggedExercise[];
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface CardioLog {
  id: string;
  user_id: string;
  activity_type: ActivityType;
  performed_at: string;
  distance_km: number | null;
  duration_min: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface FitnessEvent {
  id: string;
  user_id: string;
  name: string;
  event_date: string;
  event_type: EventType;
  goal: string | null;
  created_at: string;
  updated_at: string;
}
