/**
 * Workout of the Day engine.
 *
 * The workout is generated deterministically from the calendar date (plus the
 * user's equipment), so it automatically becomes a new workout at midnight —
 * no cron jobs, no stored state.
 */

export type EquipmentKey =
  | "bodyweight"
  | "dumbbells"
  | "barbell"
  | "kettlebell"
  | "bands"
  | "pullup-bar"
  | "bench"
  | "jump-rope";

export const EQUIPMENT_OPTIONS: { key: EquipmentKey; label: string; locked?: boolean }[] = [
  { key: "bodyweight", label: "Bodyweight", locked: true },
  { key: "dumbbells", label: "Dumbbells" },
  { key: "barbell", label: "Barbell" },
  { key: "kettlebell", label: "Kettlebell" },
  { key: "bands", label: "Resistance bands" },
  { key: "pullup-bar", label: "Pull-up bar" },
  { key: "bench", label: "Bench / chair" },
  { key: "jump-rope", label: "Jump rope" },
];

export interface Exercise {
  name: string;
  equipment: EquipmentKey[];
  focus: "Push" | "Pull" | "Legs" | "Core" | "Conditioning" | "Full body";
  instructions: string;
  sets: number;
  reps: number;
  unit: "reps" | "seconds";
  warmup?: boolean;
}

const EXERCISES: Exercise[] = [
  // ---- Bodyweight ----
  { name: "Jumping jacks", equipment: ["bodyweight"], focus: "Conditioning", instructions: "Light and bouncy — wake the whole body up.", sets: 1, reps: 45, unit: "seconds", warmup: true },
  { name: "High knees", equipment: ["bodyweight"], focus: "Conditioning", instructions: "Drive knees up, pump arms, stay on the balls of your feet.", sets: 1, reps: 30, unit: "seconds", warmup: true },
  { name: "Inchworms", equipment: ["bodyweight"], focus: "Full body", instructions: "Walk hands out to a plank, then feet to hands. Keep legs straight.", sets: 1, reps: 6, unit: "reps", warmup: true },
  { name: "Arm circles", equipment: ["bodyweight"], focus: "Push", instructions: "Small to big circles, forward then backward.", sets: 1, reps: 30, unit: "seconds", warmup: true },
  { name: "Leg swings", equipment: ["bodyweight"], focus: "Legs", instructions: "Hold a wall, swing each leg front-to-back, then side-to-side.", sets: 1, reps: 10, unit: "reps", warmup: true },
  { name: "Push-ups", equipment: ["bodyweight"], focus: "Push", instructions: "Chest to floor, body in one straight line. Drop to knees if needed.", sets: 3, reps: 12, unit: "reps" },
  { name: "Squats", equipment: ["bodyweight"], focus: "Legs", instructions: "Hips back and down, chest up, knees track over toes.", sets: 3, reps: 15, unit: "reps" },
  { name: "Lunges", equipment: ["bodyweight"], focus: "Legs", instructions: "Long step, back knee kisses the floor, torso tall.", sets: 3, reps: 10, unit: "reps" },
  { name: "Plank", equipment: ["bodyweight"], focus: "Core", instructions: "Elbows under shoulders, squeeze glutes, breathe steadily.", sets: 3, reps: 45, unit: "seconds" },
  { name: "Glute bridges", equipment: ["bodyweight"], focus: "Legs", instructions: "Drive hips up, squeeze glutes hard at the top for a beat.", sets: 3, reps: 15, unit: "reps" },
  { name: "Mountain climbers", equipment: ["bodyweight"], focus: "Conditioning", instructions: "Fast knees to chest from a strong plank position.", sets: 3, reps: 30, unit: "seconds" },
  { name: "Burpees", equipment: ["bodyweight"], focus: "Conditioning", instructions: "Squat, jump back, push-up, jump in, explode up. No push-up is fine.", sets: 3, reps: 8, unit: "reps" },
  { name: "Sit-ups", equipment: ["bodyweight"], focus: "Core", instructions: "Controlled up and down — no yanking on your neck.", sets: 3, reps: 15, unit: "reps" },
  { name: "Superman pulls", equipment: ["bodyweight"], focus: "Pull", instructions: "Lift chest and legs, squeeze shoulder blades like a reverse fly.", sets: 3, reps: 12, unit: "reps" },
  { name: "Calf raises", equipment: ["bodyweight"], focus: "Legs", instructions: "Rise tall on your toes, pause, lower slowly.", sets: 3, reps: 20, unit: "reps" },
  { name: "Bear crawl", equipment: ["bodyweight"], focus: "Conditioning", instructions: "Knees hover an inch off the floor, crawl forward and back.", sets: 3, reps: 30, unit: "seconds" },
  { name: "Wall sit", equipment: ["bodyweight"], focus: "Legs", instructions: "Back flat to the wall, thighs parallel, breathe through it.", sets: 3, reps: 45, unit: "seconds" },
  { name: "Bird dogs", equipment: ["bodyweight"], focus: "Core", instructions: "Opposite arm and leg extend, hips stay square.", sets: 3, reps: 10, unit: "reps" },
  { name: "Dead bugs", equipment: ["bodyweight"], focus: "Core", instructions: "Back pressed to the floor, lower opposite arm and leg slowly.", sets: 3, reps: 10, unit: "reps" },
  // ---- Dumbbells ----
  { name: "Goblet squats", equipment: ["dumbbells"], focus: "Legs", instructions: "Hold one dumbbell at your chest, sit deep between your heels.", sets: 3, reps: 12, unit: "reps" },
  { name: "Dumbbell bench press", equipment: ["dumbbells", "bench"], focus: "Push", instructions: "Press up with control, lower until you feel a chest stretch.", sets: 3, reps: 10, unit: "reps" },
  { name: "Dumbbell floor press", equipment: ["dumbbells"], focus: "Push", instructions: "Lying on the floor, press up and pause triceps on the ground each rep.", sets: 3, reps: 12, unit: "reps" },
  { name: "Bent-over rows", equipment: ["dumbbells"], focus: "Pull", instructions: "Hinge at the hips, pull weights to your ribs, squeeze.", sets: 3, reps: 12, unit: "reps" },
  { name: "Romanian deadlifts", equipment: ["dumbbells"], focus: "Legs", instructions: "Soft knees, push hips back, feel the hamstrings load.", sets: 3, reps: 12, unit: "reps" },
  { name: "Overhead press", equipment: ["dumbbells"], focus: "Push", instructions: "Press overhead without arching your lower back.", sets: 3, reps: 10, unit: "reps" },
  { name: "Bicep curls", equipment: ["dumbbells"], focus: "Pull", instructions: "Elbows pinned to your sides, no swinging.", sets: 3, reps: 12, unit: "reps" },
  { name: "Lateral raises", equipment: ["dumbbells"], focus: "Push", instructions: "Raise to shoulder height with a soft elbow bend.", sets: 3, reps: 12, unit: "reps" },
  { name: "Dumbbell lunges", equipment: ["dumbbells"], focus: "Legs", instructions: "Weights at your sides, long confident steps.", sets: 3, reps: 10, unit: "reps" },
  { name: "Renegade rows", equipment: ["dumbbells"], focus: "Pull", instructions: "From a plank on the dumbbells, row one side without rotating hips.", sets: 3, reps: 8, unit: "reps" },
  // ---- Barbell ----
  { name: "Back squat", equipment: ["barbell"], focus: "Legs", instructions: "Big breath, brace, sit between your heels and drive up.", sets: 4, reps: 6, unit: "reps" },
  { name: "Deadlift", equipment: ["barbell"], focus: "Pull", instructions: "Hips back, chest up, drag the bar up your shins.", sets: 4, reps: 6, unit: "reps" },
  { name: "Barbell bench press", equipment: ["barbell", "bench"], focus: "Push", instructions: "Five points of contact, touch chest, press in a slight arc.", sets: 4, reps: 6, unit: "reps" },
  { name: "Barbell overhead press", equipment: ["barbell"], focus: "Push", instructions: "Squeeze glutes, press the bar up and slightly back.", sets: 3, reps: 8, unit: "reps" },
  { name: "Barbell row", equipment: ["barbell"], focus: "Pull", instructions: "Hinged torso, pull the bar to your lower ribs.", sets: 3, reps: 8, unit: "reps" },
  { name: "Front squat", equipment: ["barbell"], focus: "Legs", instructions: "Elbows high, torso vertical, knees forward.", sets: 3, reps: 8, unit: "reps" },
  // ---- Kettlebell ----
  { name: "Kettlebell swings", equipment: ["kettlebell"], focus: "Conditioning", instructions: "Hike it back, snap hips forward — arms are just ropes.", sets: 4, reps: 15, unit: "reps" },
  { name: "Kettlebell goblet squat", equipment: ["kettlebell"], focus: "Legs", instructions: "Bell at chest, elbows tucked, sit deep.", sets: 3, reps: 12, unit: "reps" },
  { name: "Kettlebell deadlift", equipment: ["kettlebell"], focus: "Pull", instructions: "Hinge, grip, stand tall with glutes squeezed.", sets: 3, reps: 12, unit: "reps" },
  { name: "Single-arm kettlebell press", equipment: ["kettlebell"], focus: "Push", instructions: "Wrist straight, press up while bracing your core.", sets: 3, reps: 8, unit: "reps" },
  { name: "Kettlebell halos", equipment: ["kettlebell"], focus: "Push", instructions: "Circle the bell slowly around your head, ribs down.", sets: 2, reps: 8, unit: "reps" },
  // ---- Bands ----
  { name: "Band pull-aparts", equipment: ["bands"], focus: "Pull", instructions: "Arms straight at chest height, pull the band apart and squeeze.", sets: 3, reps: 15, unit: "reps" },
  { name: "Banded squats", equipment: ["bands"], focus: "Legs", instructions: "Band under feet, hold at shoulders, squat with tension.", sets: 3, reps: 15, unit: "reps" },
  { name: "Band rows", equipment: ["bands"], focus: "Pull", instructions: "Anchor at chest height, pull elbows past your torso.", sets: 3, reps: 12, unit: "reps" },
  { name: "Band chest press", equipment: ["bands"], focus: "Push", instructions: "Anchor behind you, press forward like a push-up in the air.", sets: 3, reps: 12, unit: "reps" },
  { name: "Banded lateral walks", equipment: ["bands"], focus: "Legs", instructions: "Band around knees, quarter squat, step sideways without wobbling.", sets: 3, reps: 12, unit: "reps" },
  { name: "Band bicep curls", equipment: ["bands"], focus: "Pull", instructions: "Stand on the band, curl with elbows pinned.", sets: 3, reps: 15, unit: "reps" },
  // ---- Pull-up bar ----
  { name: "Pull-ups", equipment: ["pullup-bar"], focus: "Pull", instructions: "Full hang to chin over bar. Use a band or jump assist if needed.", sets: 3, reps: 6, unit: "reps" },
  { name: "Chin-ups", equipment: ["pullup-bar"], focus: "Pull", instructions: "Underhand grip, chest to bar, lower all the way.", sets: 3, reps: 6, unit: "reps" },
  { name: "Hanging knee raises", equipment: ["pullup-bar"], focus: "Core", instructions: "Dead hang, raise knees to chest without swinging.", sets: 3, reps: 10, unit: "reps" },
  { name: "Dead hangs", equipment: ["pullup-bar"], focus: "Pull", instructions: "Just hang. Grip, shoulders, and spine will thank you.", sets: 3, reps: 30, unit: "seconds" },
  // ---- Bench / chair ----
  { name: "Step-ups", equipment: ["bench"], focus: "Legs", instructions: "Drive through the heel, stand tall, lower with control.", sets: 3, reps: 10, unit: "reps" },
  { name: "Bulgarian split squats", equipment: ["bench"], focus: "Legs", instructions: "Back foot on the bench, drop straight down. Spicy and effective.", sets: 3, reps: 8, unit: "reps" },
  { name: "Bench dips", equipment: ["bench"], focus: "Push", instructions: "Hands on the edge, lower until elbows hit 90 degrees.", sets: 3, reps: 12, unit: "reps" },
  { name: "Incline push-ups", equipment: ["bench"], focus: "Push", instructions: "Hands on the bench, body straight — great push-up builder.", sets: 3, reps: 12, unit: "reps" },
  // ---- Jump rope ----
  { name: "Basic bounce", equipment: ["jump-rope"], focus: "Conditioning", instructions: "Small jumps, wrists do the work, land soft.", sets: 4, reps: 60, unit: "seconds" },
  { name: "Jump rope high knees", equipment: ["jump-rope"], focus: "Conditioning", instructions: "Run in place under the rope — knees up.", sets: 3, reps: 30, unit: "seconds" },
  { name: "Double-unders", equipment: ["jump-rope"], focus: "Conditioning", instructions: "One jump, two spins. For when basics feel easy.", sets: 4, reps: 20, unit: "reps" },
];

export interface DailyWorkout {
  date: string;
  warmup: Exercise[];
  main: Exercise[];
  finisher: Exercise;
}

/* Deterministic PRNG (mulberry32) + string hash (FNV-1a). */
function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickN<T>(rng: () => number, arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

/**
 * Build the workout for a date + equipment set. Deterministic: same inputs
 * always produce the same workout, and a new date means a new workout.
 */
export function getWorkoutOfDay(dateStr: string, equipment: EquipmentKey[]): DailyWorkout {
  const available = new Set<EquipmentKey>(["bodyweight", ...equipment]);
  const matches = (ex: Exercise) => ex.equipment.every((e) => available.has(e));

  const seedKey = `${dateStr}|${[...available].sort().join(",")}`;
  const rng = mulberry32(hashSeed(seedKey));

  const warmupPool = EXERCISES.filter((e) => e.warmup && matches(e));
  const mainPool = EXERCISES.filter((e) => !e.warmup && matches(e));
  const finisherPool = EXERCISES.filter(
    (e) => e.focus === "Conditioning" && !e.warmup && matches(e)
  );

  const warmup = pickN(rng, warmupPool.length > 0 ? warmupPool : EXERCISES.filter((e) => e.warmup), 2);

  // Build a balanced main set: try to cover different movement focuses.
  const focuses: Exercise["focus"][] = ["Push", "Pull", "Legs", "Core", "Conditioning", "Full body"];
  const main: Exercise[] = [];
  const used = new Set<string>();
  for (const f of pickN(rng, focuses, focuses.length)) {
    const candidates = mainPool.filter((e) => e.focus === f && !used.has(e.name));
    if (candidates.length > 0 && main.length < 5) {
      const chosen = pickN(rng, candidates, 1)[0];
      main.push(chosen);
      used.add(chosen.name);
    }
  }
  // Fill up to 5 with anything remaining.
  const rest = mainPool.filter((e) => !used.has(e.name));
  for (const e of pickN(rng, rest, Math.max(0, 5 - main.length))) {
    main.push(e);
    used.add(e.name);
  }

  const finisherCandidates = finisherPool.filter((e) => !used.has(e.name));
  const finisher =
    pickN(rng, finisherCandidates.length > 0 ? finisherCandidates : finisherPool, 1)[0] ??
    EXERCISES.find((e) => e.name === "Burpees")!;

  return { date: dateStr, warmup, main, finisher };
}

/** Local calendar date as YYYY-MM-DD (used as the daily seed). */
export function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const QUOTES = [
  "The only bad workout is the one that didn't happen.",
  "Discipline is choosing what you want most over what you want now.",
  "You don't have to be extreme, just consistent.",
  "Motivation gets you started. Habit keeps you going.",
  "Sweat is just your body applauding your effort.",
  "Don't wish for it. Work for it.",
  "Strong is not a size — it's a practice.",
  "Every rep is a vote for the person you want to become.",
  "Rest is part of the program, not a break from it.",
  "Start where you are. Use what you have. Do what you can.",
  "Your future self is watching. Make them proud.",
  "Small steps every day lead to big changes.",
  "The hardest lift is lifting yourself off the couch.",
  "Progress, not perfection.",
  "Train like an athlete, recover like a pro.",
  "Sore today, strong tomorrow.",
  "You are one workout away from a better mood.",
  "Fitness is a journey, not a destination.",
  "What seems impossible today will be your warm-up someday.",
  "Champions train, losers complain.",
  "Your body can do it. It's your mind you have to convince.",
  "Don't count the days — make the days count.",
  "The pain you feel today is the strength you feel tomorrow.",
  "Wake up. Work out. Repeat.",
  "Be stronger than your excuses.",
  "A year from now you'll wish you started today.",
  "Nothing worth having comes easy — especially strength.",
  "Push yourself because no one else will do it for you.",
  "Great things never come from comfort zones.",
  "Your health is an investment, not an expense.",
  "Train insane or remain the same.",
  "The last three reps make the muscle grow.",
  "Fall seven times, stand up eight.",
  "Doubt kills more dreams than failure ever will.",
  "Success is what comes after you stop making excuses.",
  "Keep going — you're getting stronger every day.",
];

/** Deterministic daily quote: changes at midnight with the workout. */
export function getDailyQuote(date = new Date()): string {
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / 86400000);
  return QUOTES[dayOfYear % QUOTES.length];
}
