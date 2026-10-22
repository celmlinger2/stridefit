import type { Difficulty } from "@/lib/database.types";

/**
 * Built-in quick-start workout templates.
 *
 * Every exercise name must match an entry in the exercise library
 * (lib/workout-of-the-day.ts) exactly, so sets/reps pre-fill from the
 * library standard and each exercise carries its form video.
 */
export type BuiltInTemplate = {
  id: string;
  name: string;
  description: string;
  difficulty: Difficulty;
  equipmentLabel: string;
  minutes: number;
  exerciseNames: string[];
};

export const BUILT_IN_TEMPLATES: BuiltInTemplate[] = [
  {
    id: "full-body-strength-a",
    name: "Full-Body Strength A",
    description:
      "The classic starter session from our beginner strength plan: squat, push, row, hinge, core — one of everything.",
    difficulty: "beginner",
    equipmentLabel: "Dumbbells or bodyweight",
    minutes: 35,
    exerciseNames: ["Goblet squats", "Push-ups", "Bent-over rows", "Glute bridges", "Dead bugs"],
  },
  {
    id: "full-body-strength-b",
    name: "Full-Body Strength B",
    description:
      "The partner session to Strength A. Alternate A and B across the week and you've got a complete program.",
    difficulty: "beginner",
    equipmentLabel: "Dumbbells or bodyweight",
    minutes: 35,
    exerciseNames: ["Romanian deadlifts", "Overhead press", "Reverse lunges", "Plank", "Calf raises"],
  },
  {
    id: "bodyweight-beginner",
    name: "Bodyweight Beginner",
    description:
      "No equipment, no problem. Gentle full-body basics you can do in a living room — perfect first workout.",
    difficulty: "beginner",
    equipmentLabel: "No equipment",
    minutes: 25,
    exerciseNames: ["Squats", "Knee push-ups", "Glute bridges", "Bird dogs", "Wall sit"],
  },
  {
    id: "upper-body-builder",
    name: "Upper Body Builder",
    description:
      "Chest, back, shoulders, and arms with one pair of dumbbells. A proper push-pull session.",
    difficulty: "intermediate",
    equipmentLabel: "Dumbbells",
    minutes: 40,
    exerciseNames: [
      "Dumbbell floor press",
      "Bent-over rows",
      "Overhead press",
      "Bicep curls",
      "Tricep kickbacks",
    ],
  },
  {
    id: "leg-day",
    name: "Leg Day",
    description:
      "Squats, hinges, and single-leg work for strong legs and glutes, finished with calves.",
    difficulty: "intermediate",
    equipmentLabel: "Dumbbells",
    minutes: 40,
    exerciseNames: [
      "Goblet squats",
      "Romanian deadlifts",
      "Reverse lunges",
      "Glute bridges",
      "Dumbbell calf raises",
    ],
  },
  {
    id: "core-finisher",
    name: "Core Finisher",
    description:
      "Fifteen focused minutes for your midsection. Great on its own or bolted onto the end of any workout.",
    difficulty: "beginner",
    equipmentLabel: "No equipment",
    minutes: 15,
    exerciseNames: ["Dead bugs", "Bicycle crunches", "Leg raises", "Side plank", "Plank"],
  },
  {
    id: "cardio-sweat",
    name: "Cardio Sweat",
    description:
      "Bodyweight conditioning to get your heart rate up and keep it there. No equipment, no mercy.",
    difficulty: "intermediate",
    equipmentLabel: "No equipment",
    minutes: 20,
    exerciseNames: ["Jumping jacks", "Mountain climbers", "High knees", "Burpees", "Skater hops"],
  },
  {
    id: "runners-strength",
    name: "Runner's Strength",
    description:
      "The strength work runners actually need: single-leg glutes, calves, and core stability to hold form late in a run.",
    difficulty: "beginner",
    equipmentLabel: "Dumbbells optional",
    minutes: 30,
    exerciseNames: [
      "Single-leg glute bridge",
      "Reverse lunges",
      "Calf raises",
      "Side plank",
      "Dumbbell farmer's march",
    ],
  },
];
