/**
 * A small curated list of common foods with per-serving macros
 * (standard reference values, rounded). Used by the "What fits?"
 * remaining-macros suggester on the Nutrition page.
 */

export interface FoodItem {
  name: string;
  serving: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export const FOODS: FoodItem[] = [
  { name: "Greek yogurt (nonfat)", serving: "1 cup (170g)", calories: 100, protein: 17, carbs: 6, fat: 0 },
  { name: "Cottage cheese (low-fat)", serving: "1/2 cup (113g)", calories: 90, protein: 12, carbs: 5, fat: 2 },
  { name: "Grilled chicken breast", serving: "4 oz (113g)", calories: 185, protein: 35, carbs: 0, fat: 4 },
  { name: "Turkey deli slices", serving: "4 slices (56g)", calories: 60, protein: 9, carbs: 2, fat: 1 },
  { name: "Canned tuna in water", serving: "1 can (120g drained)", calories: 170, protein: 32, carbs: 0, fat: 3 },
  { name: "Large egg (hard-boiled)", serving: "1 egg (50g)", calories: 78, protein: 6, carbs: 1, fat: 5 },
  { name: "Egg whites", serving: "3 whites (99g)", calories: 51, protein: 11, carbs: 1, fat: 0 },
  { name: "Salmon fillet", serving: "4 oz (113g)", calories: 233, protein: 25, carbs: 0, fat: 14 },
  { name: "Lean ground beef (90%)", serving: "4 oz (113g)", calories: 200, protein: 22, carbs: 0, fat: 12 },
  { name: "Shrimp", serving: "4 oz (113g)", calories: 112, protein: 24, carbs: 1, fat: 1 },
  { name: "Tofu (firm)", serving: "1/2 block (125g)", calories: 117, protein: 13, carbs: 3, fat: 6 },
  { name: "Black beans", serving: "1/2 cup (86g)", calories: 114, protein: 8, carbs: 20, fat: 1 },
  { name: "Lentils (cooked)", serving: "1/2 cup (99g)", calories: 115, protein: 9, carbs: 20, fat: 0 },
  { name: "Quinoa (cooked)", serving: "1/2 cup (93g)", calories: 111, protein: 4, carbs: 20, fat: 2 },
  { name: "Brown rice (cooked)", serving: "1/2 cup (98g)", calories: 108, protein: 2, carbs: 22, fat: 1 },
  { name: "Oats (dry)", serving: "1/2 cup (40g)", calories: 154, protein: 5, carbs: 27, fat: 3 },
  { name: "Whole milk", serving: "1 cup (244g)", calories: 149, protein: 8, carbs: 12, fat: 8 },
  { name: "Cheddar cheese", serving: "1 oz (28g)", calories: 113, protein: 7, carbs: 0, fat: 9 },
  { name: "Peanut butter", serving: "2 tbsp (32g)", calories: 188, protein: 8, carbs: 7, fat: 16 },
  { name: "Almonds", serving: "1 oz (28g)", calories: 164, protein: 6, carbs: 6, fat: 14 },
  { name: "Avocado", serving: "1/2 fruit (68g)", calories: 109, protein: 1, carbs: 6, fat: 10 },
  { name: "Banana", serving: "1 medium (118g)", calories: 105, protein: 1, carbs: 27, fat: 0 },
  { name: "Apple", serving: "1 medium (182g)", calories: 95, protein: 0, carbs: 25, fat: 0 },
  { name: "Orange", serving: "1 medium (131g)", calories: 62, protein: 1, carbs: 15, fat: 0 },
  { name: "Whole wheat bread", serving: "1 slice (28g)", calories: 81, protein: 4, carbs: 14, fat: 1 },
  { name: "Bagel", serving: "1 medium (105g)", calories: 270, protein: 10, carbs: 53, fat: 2 },
  { name: "Pasta (cooked spaghetti)", serving: "1 cup (140g)", calories: 220, protein: 8, carbs: 43, fat: 1 },
  { name: "Sweet potato", serving: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fat: 0 },
  { name: "Broccoli (cooked)", serving: "1 cup (156g)", calories: 55, protein: 4, carbs: 11, fat: 0 },
  { name: "Protein bar (typical)", serving: "1 bar (60g)", calories: 210, protein: 20, carbs: 24, fat: 7 },
  { name: "String cheese", serving: "1 stick (28g)", calories: 80, protein: 7, carbs: 1, fat: 5 },
  { name: "Hummus", serving: "1/4 cup (60g)", calories: 166, protein: 5, carbs: 14, fat: 10 },
  { name: "Trail mix", serving: "1/4 cup (43g)", calories: 198, protein: 6, carbs: 19, fat: 12 },
  { name: "Popcorn (air-popped)", serving: "3 cups (24g)", calories: 93, protein: 3, carbs: 19, fat: 1 },
  { name: "Dark chocolate", serving: "1 oz (28g)", calories: 160, protein: 2, carbs: 13, fat: 11 },
  { name: "Orange juice", serving: "1 cup (248g)", calories: 112, protein: 2, carbs: 26, fat: 0 },
];
