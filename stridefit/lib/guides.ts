export type Guide = {
  href: string;
  category: string;
  title: string;
  copy: string;
  image: string;
  published: string;
  readMinutes: number;
};

export const GUIDES: Guide[] = [
  {
    href: "/beginners-guide-to-running-walking",
    category: "Running",
    title: "Beginner's Guide to Running and Walking",
    copy: "The walk-run method, a realistic first-week plan, and the consistency system that keeps beginners going.",
    image: "/guides/running.webp",
    published: "Oct 9, 2026",
    readMinutes: 7,
  },
  {
    href: "/beginner-5k-training-plan",
    category: "Training",
    title: "8-Week Beginner 5K Training Plan",
    copy: "Three walk-run sessions a week, from your first intervals to race day — no experience needed.",
    image: "/guides/5k.webp",
    published: "Oct 12, 2026",
    readMinutes: 9,
  },
  {
    href: "/how-to-track-macros",
    category: "Nutrition",
    title: "How to Track Macros",
    copy: "Set protein, carb, and fat targets and log food without it taking over your life.",
    image: "/guides/macros.webp",
    published: "Oct 12, 2026",
    readMinutes: 9,
  },
  {
    href: "/calories-to-lose-weight",
    category: "Nutrition",
    title: "How Many Calories Should I Eat to Lose Weight?",
    copy: "Find your real calorie target: estimate maintenance, pick a deficit, adjust from the trend.",
    image: "/guides/calories.webp",
    published: "Oct 14, 2026",
    readMinutes: 5,
  },
  {
    href: "/strength-training-for-beginners",
    category: "Training",
    title: "Strength Training for Beginners: A Simple 4-Week Plan",
    copy: "Three full-body workouts a week, a handful of basic moves, and a simple 4-week progression.",
    image: "/guides/strength.webp",
    published: "Oct 14, 2026",
    readMinutes: 6,
  },
  {
    href: "/how-to-pace-a-10k",
    category: "Running",
    title: "How to Pace a 10K: Start Slower, Finish Faster",
    copy: "Pick an honest goal time, run mile 1 controlled, settle in the middle, and finish brave — with a pace chart for common goals.",
    image: "/guides/10k.webp",
    published: "Oct 15, 2026",
    readMinutes: 6,
  },
  {
    href: "/what-to-eat-before-and-after-a-run",
    category: "Nutrition",
    title: "What to Eat Before and After a Run",
    copy: "Simple timing rules for pre-run meals and snacks, the foods that cause stomach trouble, and the protein + carbs rule for recovery.",
    image: "/guides/run-fuel.webp",
    published: "Oct 19, 2026",
    readMinutes: 7,
  },
];
