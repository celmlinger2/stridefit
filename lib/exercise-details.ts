export type ExerciseDetail = { steps: string[]; mistake: string };

export const EXERCISE_DETAILS: Record<string, ExerciseDetail> = {
  "jumping-jacks": {
    steps: [
      "Stand tall with feet together and arms resting at your sides.",
      "Jump your feet out wide while sweeping both arms overhead.",
      "Jump back to the start position in one smooth rhythm.",
      "Stay light on the balls of your feet and keep a steady pace.",
    ],
    mistake: "Landing heavy and flat-footed — land softly on the balls of your feet with knees slightly bent.",
  },
  "high-knees": {
    steps: [
      "Stand tall with feet hip-width apart and core lightly braced.",
      "Drive one knee up toward hip height while pumping the opposite arm.",
      "Switch legs quickly, staying on the balls of your feet.",
      "Keep your chest up and land softly with each step.",
    ],
    mistake: "Leaning back as the knees come up — stay tall and slightly forward so your core does the work.",
  },
  "inchworms": {
    steps: [
      "Stand tall, hinge at your hips, and place your hands on the floor.",
      "Walk your hands forward until you reach a strong plank position.",
      "Pause briefly with your body in one straight line.",
      "Walk your hands back toward your feet and stand up to reset.",
    ],
    mistake: "Letting the hips sag in the plank — brace your core and keep your body in one straight line.",
  },
  "arm-circles": {
    steps: [
      "Stand tall with arms extended straight out to your sides.",
      "Make small, controlled circles forward, keeping arms at shoulder height.",
      "Gradually widen the circles as your shoulders warm up.",
      "Reverse direction and repeat for the same amount of time.",
    ],
    mistake: "Shrugging the shoulders toward your ears — drop them down and keep your neck relaxed.",
  },
  "leg-swings": {
    steps: [
      "Stand sideways next to a wall or chair and hold it for balance.",
      "Swing one leg forward and backward like a pendulum from the hip.",
      "Keep your torso tall and still while the leg moves freely.",
      "Switch sides, then repeat swinging the leg across your body.",
    ],
    mistake: "Twisting your whole torso with the swing — brace your core so only the leg moves.",
  },
  "push-ups": {
    steps: [
      "Set up in a plank with hands under your shoulders and body in one line.",
      "Lower your chest toward the floor, elbows tracking about 45 degrees out.",
      "Stop just before your chest touches, keeping your hips level.",
      "Press the floor away until your arms are straight again.",
    ],
    mistake: "Letting the hips sag or pike up — brace your core and glutes so your body stays one straight line.",
  },
  "squats": {
    steps: [
      "Stand with feet about shoulder-width apart, toes slightly turned out.",
      "Sit your hips down and back as if lowering into a chair.",
      "Keep your chest up and knees tracking out over your toes.",
      "Drive through your whole foot to stand back up tall.",
    ],
    mistake: "Letting the knees cave inward — push them out in line with your toes as you squat.",
  },
  "lunges": {
    steps: [
      "Stand tall and step one foot forward into a long stride.",
      "Lower straight down until both knees are bent about 90 degrees.",
      "Keep your torso upright and front knee in line with your toes.",
      "Push through your front foot to return to standing.",
    ],
    mistake: "Letting the front knee cave inward — track it over your second toe as you lower and rise.",
  },
  "plank": {
    steps: [
      "Place your forearms on the floor with elbows under your shoulders.",
      "Extend your legs behind you, resting on your toes.",
      "Form one straight line from head to heels, bracing your core.",
      "Hold while breathing steadily, keeping hips level the whole time.",
    ],
    mistake: "Letting the hips sag toward the floor — squeeze your glutes and brace your abs to stay level.",
  },
  "glute-bridges": {
    steps: [
      "Lie on your back with knees bent and feet flat, arms by your sides.",
      "Drive through your heels and lift your hips toward the ceiling.",
      "Squeeze your glutes hard at the top for a full second.",
      "Lower your hips slowly back to the floor and repeat.",
    ],
    mistake: "Arching the lower back at the top — ribs down and squeeze your glutes instead of overextending.",
  },
  "mountain-climbers": {
    steps: [
      "Start in a high plank with hands under shoulders and body straight.",
      "Drive one knee in toward your chest without lifting your hips.",
      "Switch legs quickly, alternating in a running rhythm.",
      "Keep your shoulders over your wrists and core braced throughout.",
    ],
    mistake: "Bouncing the hips up and down — brace your core and keep your back flat as the legs move.",
  },
  "burpees": {
    steps: [
      "From standing, squat down and place both hands on the floor.",
      "Jump your feet back into a plank, body in one straight line.",
      "Jump your feet back up outside your hands and stand tall.",
      "Finish with a small jump and arms overhead, then flow into the next rep.",
    ],
    mistake: "Letting the hips crash sagging to the floor — brace your core and land in a solid plank position.",
  },
  "sit-ups": {
    steps: [
      "Lie on your back with knees bent, feet flat, arms across your chest.",
      "Brace your core and curl your torso up toward your knees.",
      "Sit all the way up until your chest is near your thighs.",
      "Lower back down slowly, one vertebra at a time.",
    ],
    mistake: "Yanking on your neck to pull yourself up — keep hands off your head and let your abs do the lifting.",
  },
  "superman-pulls": {
    steps: [
      "Lie face down with arms extended overhead and legs straight.",
      "Lift your chest, arms, and thighs slightly off the floor.",
      "Pull your elbows down and back toward your ribs, squeezing shoulder blades.",
      "Extend your arms forward again and lower down with control.",
    ],
    mistake: "Cranking the neck to look forward — keep your gaze down so your neck stays in line with your spine.",
  },
  "calf-raises": {
    steps: [
      "Stand tall with feet hip-width apart, holding a wall for balance if needed.",
      "Press through the balls of your feet and lift your heels high.",
      "Pause at the top and squeeze your calves for a second.",
      "Lower your heels slowly back to the floor and repeat.",
    ],
    mistake: "Bouncing through reps quickly — slow down, pause at the top, and lower with control.",
  },
  "bear-crawl": {
    steps: [
      "Start on all fours with wrists under shoulders and knees under hips.",
      "Lift your knees an inch off the floor, back flat and core braced.",
      "Step your right hand and left foot forward together, staying low.",
      "Alternate sides, moving slowly while keeping your hips level.",
    ],
    mistake: "Letting the hips rock side to side — move slowly and brace your core to keep your back flat and still.",
  },
  "wall-sit": {
    steps: [
      "Stand with your back flat against a wall, feet about two feet out.",
      "Slide down until your thighs are parallel to the floor.",
      "Keep your knees at 90 degrees, stacked over your ankles.",
      "Press your whole back into the wall and hold, breathing steadily.",
    ],
    mistake: "Letting the knees slide past the toes or cave in — keep shins vertical and knees tracking over your feet.",
  },
  "bird-dogs": {
    steps: [
      "Start on all fours with hands under shoulders and knees under hips.",
      "Extend your right arm forward and left leg back in one line.",
      "Keep your hips level and core braced, back completely flat.",
      "Return to the floor with control and switch sides.",
    ],
    mistake: "Arching the back and rotating the hips open — brace your core and move slowly to stay perfectly level.",
  },
  "dead-bugs": {
    steps: [
      "Lie on your back with arms pointing up and knees bent at 90 degrees.",
      "Press your lower back gently into the floor and brace your core.",
      "Slowly extend one arm overhead and the opposite leg out straight.",
      "Return to the start and repeat on the other side.",
    ],
    mistake: "Letting the lower back arch off the floor — exhale and keep your ribs down as the limbs extend.",
  },
  "cat-cow": {
    steps: [
      "Start on all fours with wrists under shoulders and knees under hips.",
      "Inhale and let your belly drop, lifting your chest and tailbone gently.",
      "Exhale and round your back toward the ceiling, tucking your chin.",
      "Flow slowly between the two positions, matching your breath.",
    ],
    mistake: "Forcing the movement with speed — move slowly and only through a range that feels comfortable.",
  },
  "torso-twists": {
    steps: [
      "Stand tall with feet hip-width apart and arms in front of your chest.",
      "Brace your core and rotate your ribcage to one side.",
      "Keep your hips facing forward while your upper body turns.",
      "Return to center with control and rotate to the other side.",
    ],
    mistake: "Twisting through the lower back with loose hips — brace your core and turn from your ribcage, hips still.",
  },
  "march-in-place": {
    steps: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Lift one knee to a comfortable height while swinging the opposite arm.",
      "Set the foot down softly and switch to the other leg.",
      "Settle into a steady, rhythmic marching pace, staying tall.",
    ],
    mistake: "Slouching as you get tired — stay tall through your chest and keep the steps light and controlled.",
  },
  "hip-circles": {
    steps: [
      "Stand tall with feet hip-width apart and hands on your hips.",
      "Draw a big, slow circle with your hips in one direction.",
      "Keep your chest mostly still while your pelvis moves smoothly.",
      "Complete your reps, then reverse the circle direction.",
    ],
    mistake: "Bending and swaying the whole torso — brace lightly and let the motion come from your hips.",
  },
  "knee-push-ups": {
    steps: [
      "Set up on hands and knees, hands under shoulders, body straight from head to knees.",
      "Lower your chest toward the floor, elbows about 45 degrees out.",
      "Keep your hips in line with your shoulders and knees.",
      "Press the floor away until your arms are straight.",
    ],
    mistake: "Sticking the hips up in the air — keep one straight line from your head to your knees.",
  },
  "diamond-push-ups": {
    steps: [
      "Set up in a plank with hands together under your chest, thumbs and fingers forming a diamond.",
      "Lower your chest toward your hands, elbows close to your ribs.",
      "Keep your body in one straight line from head to heels.",
      "Press through your palms to straighten your arms fully.",
    ],
    mistake: "Flaring the elbows wide — keep them tracking back close to your body to load the triceps.",
  },
  "pike-push-ups": {
    steps: [
      "Start in a plank, then walk your feet in and lift your hips high.",
      "Form an upside-down V with your head between your arms.",
      "Bend your elbows to lower the top of your head toward the floor.",
      "Press back up until your arms are straight again.",
    ],
    mistake: "Letting the elbows flare straight out to the sides — keep them tracking back at about 45 degrees.",
  },
  "wide-push-ups": {
    steps: [
      "Set up in a plank with hands wider than shoulder-width apart.",
      "Lower your chest toward the floor, body in one straight line.",
      "Keep elbows tracking out at roughly 45 to 60 degrees.",
      "Press the floor away to return to the start.",
    ],
    mistake: "Placing the hands so wide the shoulders strain — go only slightly wider than your shoulders.",
  },
  "floor-dips": {
    steps: [
      "Sit on the floor with hands behind you, fingers pointing forward, knees bent.",
      "Lift your hips slightly off the floor by straightening your arms.",
      "Bend your elbows to lower your body toward the floor.",
      "Press through your palms to straighten your arms again.",
    ],
    mistake: "Shrugging the shoulders up to your ears — press your shoulders down and back as you push.",
  },
  "reverse-snow-angels": {
    steps: [
      "Lie face down with arms extended out to your sides, thumbs up.",
      "Lift your arms slightly off the floor, squeezing your shoulder blades.",
      "Sweep your arms in an arc toward your hips, keeping them hovering.",
      "Sweep back out to the start slowly and repeat without resting down.",
    ],
    mistake: "Letting the arms drop and rest on the floor between reps — keep them hovering to stay under tension.",
  },
  "prone-y-raises": {
    steps: [
      "Lie face down with arms extended overhead in a Y shape, thumbs up.",
      "Lift both arms a few inches off the floor.",
      "Squeeze your shoulder blades down and together as you lift.",
      "Lower slowly back to the floor with control.",
    ],
    mistake: "Lifting with a big lower-back arch — keep the lift small and let your upper back do the work.",
  },
  "superman-hold": {
    steps: [
      "Lie face down with arms extended overhead and legs straight.",
      "Lift your arms, chest, and thighs off the floor at the same time.",
      "Keep your gaze down so your neck stays neutral.",
      "Hold the position, breathing steadily, then lower with control.",
    ],
    mistake: "Holding your breath and cranking your neck up — keep breathing and look at the floor.",
  },
  "jump-squats": {
    steps: [
      "Stand with feet shoulder-width apart and chest tall.",
      "Sit into a squat, hips back and knees tracking over toes.",
      "Explode upward into a jump, extending hips and knees fully.",
      "Land softly into the next squat, absorbing the impact quietly.",
    ],
    mistake: "Landing stiff-legged with knees caving in — land softly and push your knees out as you absorb.",
  },
  "reverse-lunges": {
    steps: [
      "Stand tall with feet hip-width apart and hands at your sides or hips.",
      "Step one foot straight back into a long stride.",
      "Lower until both knees are bent about 90 degrees, torso upright.",
      "Push through your front foot to return to standing.",
    ],
    mistake: "Taking too short a step back so the front knee shoots forward — take a long step and lower straight down.",
  },
  "curtsy-lunges": {
    steps: [
      "Stand tall with feet hip-width apart.",
      "Step one leg back and across behind you, like a curtsy.",
      "Lower your hips until your front thigh is near parallel to the floor.",
      "Push through your front foot to return to standing.",
    ],
    mistake: "Letting the front knee cave inward — keep it tracking over your toes and your hips mostly square.",
  },
  "sumo-squats": {
    steps: [
      "Stand with feet wider than shoulders, toes turned out about 45 degrees.",
      "Lower your hips straight down between your heels, chest tall.",
      "Keep your knees tracking out over your toes the whole way.",
      "Drive through your whole foot to stand back up, squeezing your glutes.",
    ],
    mistake: "Letting the knees collapse inward — press them out so they follow the direction of your toes.",
  },
  "single-leg-glute-bridge": {
    steps: [
      "Lie on your back with one foot flat on the floor, other leg extended up.",
      "Drive through your planted heel and lift your hips high.",
      "Keep your pelvis level and squeeze your glute at the top.",
      "Lower slowly, then finish all reps before switching sides.",
    ],
    mistake: "Letting the pelvis drop and rotate toward the lifted leg — brace your core and keep both hips level.",
  },
  "donkey-kicks": {
    steps: [
      "Start on all fours with hands under shoulders and knees under hips.",
      "Keeping your knee bent 90 degrees, drive one heel up toward the ceiling.",
      "Lift until your thigh is about parallel to the floor, hips level.",
      "Lower with control and repeat, then switch sides.",
    ],
    mistake: "Arching the lower back to kick higher — keep the lift small and your core braced and still.",
  },
  "side-lunges": {
    steps: [
      "Stand tall with feet hip-width apart.",
      "Take a wide step to one side, sitting your hips back and down.",
      "Keep the stepping leg's knee tracking over its toes, other leg straight.",
      "Push through the bent leg's foot to return to center.",
    ],
    mistake: "Letting the straight leg's heel lift and knee bend — keep that leg straight with the full foot down.",
  },
  "crunches": {
    steps: [
      "Lie on your back with knees bent, feet flat, hands lightly behind your head.",
      "Exhale and curl your head, shoulders, and shoulder blades off the floor.",
      "Keep your lower back pressed down and chin slightly tucked.",
      "Lower slowly back down with control and repeat.",
    ],
    mistake: "Pulling on your neck with your hands — keep fingertips light and lift with your abs, not your arms.",
  },
  "leg-raises": {
    steps: [
      "Lie on your back with legs straight and hands under your hips for support.",
      "Keeping legs together and mostly straight, lift them toward the ceiling.",
      "Raise until your legs are vertical, lower back staying down.",
      "Lower slowly to just above the floor and repeat.",
    ],
    mistake: "Letting the lower back arch as you lower — stop the descent before your back peels off the floor.",
  },
  "bicycle-crunches": {
    steps: [
      "Lie on your back with hands lightly behind your head and legs lifted.",
      "Curl up and rotate one elbow toward the opposite knee as it pulls in.",
      "Extend the other leg out straight, hovering above the floor.",
      "Alternate sides in a smooth pedaling rhythm, exhaling on each twist.",
    ],
    mistake: "Rushing and yanking the elbow across — slow down, rotate from your torso, and control each rep.",
  },
  "side-plank": {
    steps: [
      "Lie on your side with your forearm down, elbow under your shoulder.",
      "Stack your feet and lift your hips until your body forms a straight line.",
      "Brace your core and keep your free hand on your hip or reaching up.",
      "Hold while breathing steadily, then switch sides.",
    ],
    mistake: "Letting the hips drop and roll forward — stack your body and squeeze your glutes to stay in one line.",
  },
  "hollow-hold": {
    steps: [
      "Lie on your back and press your lower back firmly into the floor.",
      "Lift your shoulders and legs a few inches off the ground.",
      "Extend your arms overhead by your ears, body shaped like a shallow bowl.",
      "Hold while breathing shallowly and keeping your back glued down.",
    ],
    mistake: "Letting the lower back arch off the floor — tuck your ribs down and bend your knees if needed to keep contact.",
  },
  "russian-twists": {
    steps: [
      "Sit with knees bent and feet flat, leaning back slightly with a tall chest.",
      "Clasp your hands in front of your chest and brace your core.",
      "Rotate your torso to one side, moving your hands with it.",
      "Return through center and rotate to the other side with control.",
    ],
    mistake: "Swinging the arms side to side while the torso stays still — turn your whole ribcage, arms following along.",
  },
  "skater-hops": {
    steps: [
      "Stand on one leg with a soft knee, ready to push off.",
      "Hop sideways and land on the opposite foot, absorbing softly.",
      "Let the trailing leg sweep behind you like a speed skater.",
      "Push straight back the other way, settling into a steady rhythm.",
    ],
    mistake: "Landing stiff and upright — sink into the landing leg with a bent knee to absorb each hop.",
  },
  "butt-kicks": {
    steps: [
      "Stand tall with feet hip-width apart.",
      "Bend one knee and kick your heel up toward your glutes.",
      "Alternate legs quickly in a jogging-in-place rhythm.",
      "Stay tall on the balls of your feet and land softly.",
    ],
    mistake: "Kicking the feet back behind you instead of up — think heel straight up to your glutes each rep.",
  },
  "squat-to-stand": {
    steps: [
      "Stand with feet shoulder-width apart and hinge down to grab your toes.",
      "Keeping your arms straight, pull your hips down into a deep squat.",
      "Lift your chest tall while holding your toes in the squat.",
      "Let go, hinge back up, and stand to reset for the next rep.",
    ],
    mistake: "Rounding hard through the lower back to reach your toes — bend your knees more so the reach stays comfortable.",
  },
  "goblet-squats": {
    steps: [
      "Hold one dumbbell vertically at your chest with both hands under the top end.",
      "Stand with feet shoulder-width apart, elbows tucked under the weight.",
      "Sit your hips down between your heels, chest tall and elbows inside your knees.",
      "Drive through your whole foot to stand, squeezing your glutes at the top.",
    ],
    mistake: "Letting the weight pull your chest down and round your back — keep the dumbbell glued to your chest and stay tall.",
  },
  "dumbbell-bench-press": {
    steps: [
      "Lie on a bench holding a dumbbell in each hand above your chest.",
      "Lower the weights with control until your elbows are just below bench level.",
      "Keep your wrists straight and feet pressed into the floor.",
      "Press the dumbbells up and slightly together until arms are straight.",
    ],
    mistake: "Bouncing the weights off the bottom — lower slowly and press from a controlled, brief pause.",
  },
  "dumbbell-floor-press": {
    steps: [
      "Lie on the floor with a dumbbell in each hand, knees bent, feet flat.",
      "Press the weights straight up over your chest until arms are straight.",
      "Lower with control until your upper arms rest briefly on the floor.",
      "Press back up, keeping wrists straight and elbows about 45 degrees out.",
    ],
    mistake: "Flaring the elbows straight out to the sides — keep them angled about 45 degrees from your torso.",
  },
  "bent-over-rows": {
    steps: [
      "Hold a dumbbell in each hand and hinge at your hips, back flat, knees soft.",
      "Let the weights hang below your shoulders with arms straight.",
      "Row the dumbbells up to your ribs, driving your elbows behind you.",
      "Squeeze your shoulder blades, then lower with control and repeat.",
    ],
    mistake: "Rounding the lower back and jerking the weight up — keep your back flat and pull smoothly.",
  },
  "romanian-deadlifts": {
    steps: [
      "Stand tall holding dumbbells in front of your thighs, feet hip-width apart.",
      "Push your hips back and hinge, sliding the weights down your legs.",
      "Keep your back flat and knees only slightly bent as you lower.",
      "Stop when you feel a strong hamstring stretch, then drive your hips forward to stand.",
    ],
    mistake: "Turning it into a squat with lots of knee bend — think hips back, shins mostly vertical.",
  },
  "overhead-press": {
    steps: [
      "Stand tall holding dumbbells at shoulder height, palms forward.",
      "Brace your core and squeeze your glutes to protect your back.",
      "Press the weights straight overhead until your arms are straight.",
      "Lower slowly back to shoulder height with control.",
    ],
    mistake: "Arching the lower back to push the weight up — brace your core and ribs down before you press.",
  },
  "bicep-curls": {
    steps: [
      "Stand tall holding dumbbells at your sides, palms facing forward.",
      "Keeping your elbows pinned at your ribs, curl the weights up.",
      "Squeeze your biceps at the top without swinging your body.",
      "Lower the weights slowly all the way down and repeat.",
    ],
    mistake: "Swinging the weights with your back and shoulders — keep your elbows still and let only your forearms move.",
  },
  "lateral-raises": {
    steps: [
      "Stand tall holding light dumbbells at your sides, palms facing in.",
      "With a slight bend in your elbows, raise the weights out to shoulder height.",
      "Lead with your elbows and keep your wrists below them.",
      "Lower slowly back to your thighs with control.",
    ],
    mistake: "Using weights so heavy you shrug and swing — go lighter and lift smoothly to shoulder height only.",
  },
  "dumbbell-lunges": {
    steps: [
      "Stand tall holding a dumbbell in each hand at your sides.",
      "Step forward into a long stride and lower until both knees bend about 90 degrees.",
      "Keep your torso tall and front knee tracking over your toes.",
      "Push through your front foot to return to standing, then switch legs.",
    ],
    mistake: "Wobbling side to side from a too-narrow stance — step slightly wider than a tightrope line for balance.",
  },
  "renegade-rows": {
    steps: [
      "Set up in a plank holding dumbbells, hands under shoulders, feet wide.",
      "Brace your core hard and keep your hips perfectly level.",
      "Row one dumbbell up to your ribs while the other arm supports you.",
      "Lower with control and alternate sides without rocking.",
    ],
    mistake: "Letting the hips rotate open as you row — widen your feet and brace harder to stay square to the floor.",
  },
  "dumbbell-chest-fly": {
    steps: [
      "Lie on a bench holding dumbbells above your chest, palms facing each other.",
      "With a soft bend in your elbows, open your arms wide in a big arc.",
      "Lower until you feel a gentle stretch across your chest.",
      "Bring the weights back together over your chest in the same arc.",
    ],
    mistake: "Dropping the weights too deep and straining the shoulders — stop at a comfortable stretch and keep a bend in the elbows.",
  },
  "dumbbell-pullover": {
    steps: [
      "Lie on a bench holding one dumbbell with both hands above your chest.",
      "Keeping arms nearly straight with a soft elbow bend, lower the weight behind your head.",
      "Lower until you feel a stretch through your chest and lats.",
      "Pull the weight back over your chest in the same arc.",
    ],
    mistake: "Bending the elbows into a press — keep the arm angle fixed so the movement comes from your shoulders.",
  },
  "single-arm-dumbbell-row": {
    steps: [
      "Place one knee and hand on a bench, other foot on the floor, back flat.",
      "Hold a dumbbell in your free hand, arm hanging straight down.",
      "Row the weight up to your hip, driving your elbow toward the ceiling.",
      "Lower slowly to a full stretch and repeat, then switch sides.",
    ],
    mistake: "Rotating your torso to heave the weight up — keep your back flat and still, pulling with your back muscles.",
  },
  "dumbbell-deadlift": {
    steps: [
      "Stand with feet hip-width apart, a dumbbell in each hand in front of you.",
      "Push your hips back and hinge down, keeping the weights close to your legs.",
      "Keep your back flat and chest up as the weights pass your knees.",
      "Drive your hips forward and squeeze your glutes to stand tall.",
    ],
    mistake: "Rounding the back and letting the weights drift away from your legs — keep them close and your back flat.",
  },
  "dumbbell-front-squat": {
    steps: [
      "Hold a dumbbell at each shoulder, elbows pointing forward and up.",
      "Stand with feet shoulder-width apart and brace your core.",
      "Sit your hips down between your heels, keeping your chest tall.",
      "Drive through your whole foot to stand back up.",
    ],
    mistake: "Letting the elbows drop so the chest collapses forward — keep elbows up and chest proud throughout.",
  },
  "dumbbell-hip-thrust": {
    steps: [
      "Sit on the floor with your upper back against a bench, dumbbell resting across your hips.",
      "Plant your feet flat, knees bent, and brace the weight with your hands.",
      "Drive through your heels and lift your hips until your thighs are parallel to the floor.",
      "Squeeze your glutes at the top, then lower with control.",
    ],
    mistake: "Arching the lower back at the top — tuck your chin, keep ribs down, and finish with your glutes.",
  },
  "hammer-curls": {
    steps: [
      "Stand tall holding dumbbells at your sides, palms facing each other.",
      "Keeping elbows pinned at your ribs, curl the weights straight up.",
      "Keep your palms facing in for the whole movement.",
      "Lower slowly to the start and repeat without swinging.",
    ],
    mistake: "Letting the elbows drift forward at the top — keep them locked at your sides so the arms do the work.",
  },
  "concentration-curl": {
    steps: [
      "Sit on a bench and brace your elbow against your inner thigh.",
      "Hold a dumbbell with your arm extended down toward the floor.",
      "Curl the weight up toward your shoulder without moving your elbow.",
      "Squeeze at the top, lower slowly, and finish all reps before switching arms.",
    ],
    mistake: "Swinging the torso to help the weight up — stay seated still and let the bicep do all the work.",
  },
  "tricep-kickbacks": {
    steps: [
      "Hinge forward with a flat back, one dumbbell in hand, upper arm parallel to the floor.",
      "Pin your elbow at your side with your forearm hanging down.",
      "Straighten your arm by extending the weight behind you.",
      "Squeeze your tricep at the top, then lower with control.",
    ],
    mistake: "Letting the upper arm drop and swing — keep your elbow high and locked in place so only the forearm moves.",
  },
  "overhead-tricep-extension": {
    steps: [
      "Stand tall holding one dumbbell overhead with both hands around the top end.",
      "Keep your elbows close to your head, pointing forward.",
      "Lower the weight slowly behind your head by bending your elbows.",
      "Extend your arms back to straight without flaring your elbows.",
    ],
    mistake: "Letting the elbows flare wide and back arch — keep elbows tucked in and brace your core.",
  },
  "arnold-press": {
    steps: [
      "Stand tall holding dumbbells in front of your shoulders, palms facing you.",
      "Press the weights up while rotating your palms to face forward.",
      "Finish overhead with arms straight and palms forward.",
      "Reverse the rotation as you lower back to the start.",
    ],
    mistake: "Rushing the rotation and losing control — move slowly so the turn and the press stay one smooth motion.",
  },
  "dumbbell-shrugs": {
    steps: [
      "Stand tall holding heavy dumbbells at your sides, arms straight.",
      "Lift your shoulders straight up toward your ears.",
      "Pause and squeeze at the top for a full second.",
      "Lower the weights slowly back down and repeat.",
    ],
    mistake: "Rolling the shoulders in a circle — shrug straight up and straight down instead.",
  },
  "front-raises": {
    steps: [
      "Stand tall holding light dumbbells in front of your thighs, palms down.",
      "With a slight elbow bend, raise one or both weights to shoulder height.",
      "Keep your torso still and core braced as you lift.",
      "Lower slowly back to your thighs with control.",
    ],
    mistake: "Swinging your hips to launch the weight — brace your core and lift only as high as your shoulders.",
  },
  "reverse-fly": {
    steps: [
      "Hinge at your hips with a flat back, light dumbbells hanging below your chest.",
      "With a soft elbow bend, open your arms out to the sides.",
      "Squeeze your shoulder blades together at the top of the lift.",
      "Lower slowly back down and repeat without standing up between reps.",
    ],
    mistake: "Standing upright as you lift — stay hinged with a flat back so your rear shoulders do the work.",
  },
  "dumbbell-calf-raises": {
    steps: [
      "Stand tall holding a dumbbell in each hand at your sides.",
      "Optionally stand on a step edge so your heels can drop below level.",
      "Press through the balls of your feet and lift your heels as high as possible.",
      "Pause at the top, then lower slowly into a full stretch.",
    ],
    mistake: "Rushing through a short range of motion — slow down and use the full stretch-to-squeeze range every rep.",
  },
  "dumbbell-farmers-march": {
    steps: [
      "Stand tall holding a heavy dumbbell in each hand at your sides.",
      "Brace your core, pull your shoulders down, and look straight ahead.",
      "March in place, lifting each knee to a comfortable height with control.",
      "Set each foot down softly and keep your torso perfectly upright.",
    ],
    mistake: "Leaning to one side or letting the weights pull your shoulders down — stand tall and brace your core throughout.",
  },
  "back-squat": {
    steps: [
      "Rest the bar on your upper back, hands gripping wide, feet shoulder-width apart.",
      "Unrack, step back, brace your core, and take a deep breath.",
      "Sit your hips down between your heels, knees tracking over your toes.",
      "Drive through your whole foot to stand, exhaling near the top.",
    ],
    mistake: "Letting the knees cave and the chest fold forward — push your knees out and keep your chest proud.",
  },
  "deadlift": {
    steps: [
      "Stand with feet hip-width apart, bar over your mid-foot, shins close to the bar.",
      "Hinge down and grip the bar, flattening your back and lifting your chest.",
      "Take a deep breath, brace, and drive the floor away to stand tall.",
      "Lock out with your glutes, then hinge the bar back down with control.",
    ],
    mistake: "Rounding the lower back to pull — set a flat back and push with your legs before you lift.",
  },
  "barbell-bench-press": {
    steps: [
      "Lie on the bench with eyes under the bar, feet planted, shoulder blades pinched.",
      "Unrack the bar over your chest with straight arms and a firm grip.",
      "Lower the bar with control to your mid-chest, elbows about 45 to 75 degrees out.",
      "Press the bar up and slightly back until your arms are straight.",
    ],
    mistake: "Bouncing the bar off your chest — lower with control, touch lightly, and press from a steady position.",
  },
  "barbell-overhead-press": {
    steps: [
      "Hold the bar at shoulder height with a grip just outside your shoulders.",
      "Brace your core and squeeze your glutes hard before you press.",
      "Press the bar straight up, moving your head back slightly as it passes.",
      "Lock out overhead with the bar over your mid-foot, then lower with control.",
    ],
    mistake: "Arching the lower back into a standing bench press — squeeze your glutes and keep your ribs down.",
  },
  "barbell-row": {
    steps: [
      "Hinge at your hips with a flat back, bar hanging below your shoulders.",
      "Grip the bar just outside your knees and brace your core.",
      "Row the bar into your lower ribs, driving your elbows behind you.",
      "Lower the bar slowly to straight arms and repeat without standing up.",
    ],
    mistake: "Standing more upright with each rep to cheat the weight — keep your torso angle fixed and back flat.",
  },
  "front-squat": {
    steps: [
      "Rest the bar on the front of your shoulders, fingertips under it, elbows high.",
      "Stand with feet shoulder-width apart and brace your core.",
      "Sit your hips down between your heels, keeping your torso as upright as possible.",
      "Drive through your whole foot to stand, keeping elbows up throughout.",
    ],
    mistake: "Letting the elbows drop so the bar rolls forward — keep elbows high and chest tall the whole set.",
  },
  "barbell-romanian-deadlift": {
    steps: [
      "Stand tall holding the bar at your thighs, feet hip-width apart.",
      "Push your hips back and hinge, sliding the bar down the front of your legs.",
      "Keep the bar in contact with your legs and your back perfectly flat.",
      "Stop at a strong hamstring stretch, then drive your hips forward to stand.",
    ],
    mistake: "Letting the bar drift away from your body — keep it dragging lightly against your legs the whole way.",
  },
  "barbell-hip-thrust": {
    steps: [
      "Sit with your upper back against a bench and the bar padded across your hips.",
      "Plant your feet flat with shins vertical at the top position.",
      "Drive through your heels and lift your hips until your body is tabletop flat.",
      "Squeeze your glutes hard at the top, then lower with control.",
    ],
    mistake: "Overextending the lower back at lockout — finish the rep with your glutes and ribs down, not an arch.",
  },
  "barbell-incline-bench-press": {
    steps: [
      "Set the bench to about 30 to 45 degrees and lie back with feet planted.",
      "Unrack the bar over your upper chest with a firm, even grip.",
      "Lower the bar with control to your upper chest, elbows angled in slightly.",
      "Press the bar up and slightly back until your arms are straight.",
    ],
    mistake: "Setting the bench too steep and turning it into a shoulder press — keep the incline around 30 degrees.",
  },
  "close-grip-bench-press": {
    steps: [
      "Lie on the bench and grip the bar with hands about shoulder-width apart.",
      "Unrack and hold the bar over your chest with straight arms.",
      "Lower the bar to your lower chest, keeping elbows close to your ribs.",
      "Press the bar back up until your arms are straight.",
    ],
    mistake: "Gripping too narrow and straining the wrists — shoulder-width hands with elbows tucked is plenty close.",
  },
  "barbell-curl": {
    steps: [
      "Stand tall gripping the bar with palms up, hands shoulder-width apart.",
      "Pin your elbows at your sides and brace your core.",
      "Curl the bar up toward your shoulders without swinging.",
      "Lower slowly all the way down and repeat.",
    ],
    mistake: "Rocking your whole body to swing the bar up — keep your torso still and lower the weight if you cannot.",
  },
  "barbell-shrugs": {
    steps: [
      "Stand tall holding the bar in front of your thighs with a firm grip.",
      "Keeping your arms straight, lift your shoulders straight toward your ears.",
      "Pause and squeeze at the top for a full second.",
      "Lower the bar slowly and repeat without bending your elbows.",
    ],
    mistake: "Bending the elbows to help lift — keep arms straight so your traps do all the work.",
  },
  "barbell-lunges": {
    steps: [
      "Rest the bar on your upper back like a squat and stand tall, feet hip-width apart.",
      "Step forward into a long stride and lower until both knees bend about 90 degrees.",
      "Keep your torso tall and front knee tracking over your toes.",
      "Push through your front foot to return to standing, then switch legs.",
    ],
    mistake: "Taking short, wobbly steps on a tightrope line — step to a comfortable width and lower straight down.",
  },
  "barbell-good-mornings": {
    steps: [
      "Rest the bar on your upper back like a squat, feet hip-width apart.",
      "Soften your knees slightly and brace your core hard.",
      "Hinge at your hips, pushing them back while keeping your back flat.",
      "Lower until your torso is near parallel, then drive your hips forward to stand.",
    ],
    mistake: "Rounding the back and using too much weight — start very light and keep the hinge slow and flat-backed.",
  },
  "barbell-calf-raises": {
    steps: [
      "Rest the bar on your upper back like a squat, standing on a step edge if available.",
      "Let your heels drop below level for a full stretch.",
      "Press through the balls of your feet and lift your heels as high as possible.",
      "Pause at the top, lower slowly, and repeat without bouncing.",
    ],
    mistake: "Bending the knees to bounce the weight — keep legs nearly straight and move slowly through the full range.",
  },
  "barbell-reverse-curl": {
    steps: [
      "Stand tall gripping the bar with palms facing down, hands shoulder-width apart.",
      "Pin your elbows at your sides and brace your core.",
      "Curl the bar up toward your shoulders, keeping your wrists straight.",
      "Lower slowly all the way down and repeat.",
    ],
    mistake: "Letting the wrists bend backward under the load — keep them straight and flat with your forearms.",
  },
  "pendlay-row": {
    steps: [
      "Set up with a flat back parallel to the floor, bar on the ground below your shoulders.",
      "Grip the bar wide and brace your core hard.",
      "Row the bar explosively into your lower ribs without lifting your torso.",
      "Lower the bar all the way back to the floor and reset before each rep.",
    ],
    mistake: "Letting the set turn into a regular row without floor contact — reset the bar on the ground every rep.",
  },
  "barbell-glute-bridge": {
    steps: [
      "Lie on the floor with the bar padded across your hips, knees bent, feet flat.",
      "Hold the bar steady with both hands so it does not roll.",
      "Drive through your heels and lift your hips toward the ceiling.",
      "Squeeze your glutes at the top, then lower slowly to the floor.",
    ],
    mistake: "Pushing through your toes and feeling it in your back — drive through your heels and finish with your glutes.",
  },
  "kettlebell-swings": {
    steps: [
      "Stand with feet slightly wider than hips, kettlebell on the floor just in front of you.",
      "Hinge at your hips, grip the handle, and hike the bell back between your legs.",
      "Snap your hips forward and squeeze your glutes to swing the bell to chest height.",
      "Let the bell fall back into the hinge and repeat in a smooth rhythm.",
    ],
    mistake: "Squatting down and lifting with your arms — the swing is a hip hinge; your arms are just ropes.",
  },
  "kettlebell-goblet-squat": {
    steps: [
      "Hold the kettlebell by the horns at your chest, elbows tucked down.",
      "Stand with feet shoulder-width apart and brace your core.",
      "Sit your hips down between your heels, keeping your chest tall.",
      "Drive through your whole foot to stand, squeezing your glutes.",
    ],
    mistake: "Letting the bell drift away from your chest so your back rounds — keep it glued to your sternum.",
  },
  "kettlebell-deadlift": {
    steps: [
      "Stand with the kettlebell between your feet, feet hip-width apart.",
      "Hinge at your hips with a flat back and grip the handle with both hands.",
      "Drive the floor away and stand tall, squeezing your glutes.",
      "Hinge the bell back down to the floor with control and reset.",
    ],
    mistake: "Squatting the weight up with a rounded back — hinge from your hips and keep your back flat and chest up.",
  },
  "single-arm-kettlebell-press": {
    steps: [
      "Clean the kettlebell to your shoulder, wrist straight, bell resting on your forearm.",
      "Stand tall, brace your core, and squeeze your glutes.",
      "Press the bell straight overhead until your arm is fully extended.",
      "Lower slowly back to the rack position and finish all reps before switching arms.",
    ],
    mistake: "Letting the wrist bend back under the bell — keep your wrist straight and knuckles pointing up.",
  },
  "kettlebell-halos": {
    steps: [
      "Hold the kettlebell upside down by the horns at chest height.",
      "Brace your core and keep your ribs down and hips still.",
      "Circle the bell slowly around your head, passing behind your neck.",
      "Complete your reps in one direction, then reverse the circle.",
    ],
    mistake: "Letting your torso sway and twist with the bell — brace hard so only your arms and shoulders move.",
  },
  "kettlebell-row": {
    steps: [
      "Stagger your stance and rest your free forearm on your front thigh, back flat.",
      "Hold the kettlebell in the other hand, arm hanging straight down.",
      "Row the bell up to your hip, driving your elbow behind you.",
      "Lower slowly to a full stretch and finish all reps before switching sides.",
    ],
    mistake: "Twisting your torso to lift the bell — keep your shoulders square and pull with your back.",
  },
  "kettlebell-high-pull": {
    steps: [
      "Stand over the kettlebell and hinge down to grip the handle with one hand.",
      "Hike the bell back between your legs like a one-arm swing.",
      "Snap your hips forward, then pull the elbow back so the bell floats to chest height.",
      "Guide the bell back down into the next hinge and repeat.",
    ],
    mistake: "Yanking the bell up with your arm first — drive with your hips and let the pull finish the motion.",
  },
  "kettlebell-sumo-deadlift": {
    steps: [
      "Stand wide with toes turned out, kettlebell on the floor between your feet.",
      "Hinge and squat down to grip the handle, chest tall and back flat.",
      "Drive through your whole foot and stand tall, squeezing your glutes.",
      "Lower the bell back to the floor with control and reset.",
    ],
    mistake: "Letting the knees cave inward in the wide stance — push them out in line with your turned-out toes.",
  },
  "kettlebell-lunges": {
    steps: [
      "Hold a kettlebell in one hand at your side or at your chest in goblet position.",
      "Step forward into a long stride and lower until both knees bend about 90 degrees.",
      "Keep your torso tall and front knee tracking over your toes.",
      "Push through your front foot to stand, then switch legs or sides.",
    ],
    mistake: "Leaning toward the loaded side — brace your core and stay tall and centered over your hips.",
  },
  "kettlebell-floor-press": {
    steps: [
      "Lie on the floor holding a kettlebell in each hand, or one, above your chest.",
      "Press the bells straight up until your arms are fully extended.",
      "Lower with control until your upper arms rest briefly on the floor.",
      "Press back up, keeping wrists straight and stacked over your elbows.",
    ],
    mistake: "Letting the wrists bend back under the bells — keep them straight with knuckles pointing at the ceiling.",
  },
  "kettlebell-overhead-carry": {
    steps: [
      "Press one kettlebell overhead and lock your arm out, wrist straight.",
      "Pull your ribs down, brace your core, and keep your shoulder packed down.",
      "Walk slowly with short, controlled steps and eyes ahead.",
      "Switch arms halfway or after your set distance and repeat.",
    ],
    mistake: "Arching your back and letting the arm drift forward — keep ribs down and the bell stacked over your shoulder.",
  },
  "kettlebell-windmill": {
    steps: [
      "Press a kettlebell overhead with one arm and turn both feet 45 degrees the other way.",
      "Lock your eyes on the bell and brace your core.",
      "Push your hip toward the bell side and hinge down, free hand sliding down your leg.",
      "Lower as far as comfortable with a flat back, then reverse to stand tall.",
    ],
    mistake: "Bending the spine sideways instead of hinging — push your hip out and keep your back straight as you descend.",
  },
  "kettlebell-figure-8": {
    steps: [
      "Stand with feet slightly wider than hips, kettlebell in one hand, knees soft.",
      "Hinge slightly and pass the bell back between your legs to your other hand.",
      "Bring it around the outside of your leg and pass it through again.",
      "Keep a smooth figure-8 rhythm going, then reverse direction.",
    ],
    mistake: "Standing up tall and rounding between passes — stay in a low athletic hinge the whole time.",
  },
  "kettlebell-suitcase-carry": {
    steps: [
      "Stand tall holding one heavy kettlebell at your side like a suitcase.",
      "Brace your core and stand perfectly upright, shoulders level.",
      "Walk slowly with controlled steps, resisting the pull of the weight.",
      "Switch hands halfway or after your set distance and repeat.",
    ],
    mistake: "Leaning away from or into the weight — imagine a wall on both sides and stay tall and level.",
  },
  "kettlebell-thruster": {
    steps: [
      "Hold a kettlebell in each hand at shoulder height, or one at your chest.",
      "Squat down between your heels, keeping your chest tall.",
      "Drive up out of the squat and use the momentum to press the bells overhead.",
      "Lower the bells to your shoulders and flow straight into the next squat.",
    ],
    mistake: "Pressing only with your arms after standing still — connect the movements so your legs power the press.",
  },
  "band-pull-aparts": {
    steps: [
      "Stand tall holding a band in front of your chest, arms straight, palms down.",
      "Keeping arms straight, pull the band apart out to your sides.",
      "Touch the band to your chest while squeezing your shoulder blades together.",
      "Return slowly to the start without letting the band snap back.",
    ],
    mistake: "Shrugging and bending the elbows to pull — keep arms straight and shoulders down, squeezing your shoulder blades.",
  },
  "banded-squats": {
    steps: [
      "Stand on the band with feet shoulder-width apart, holding the ends at your shoulders.",
      "Brace your core and keep your chest tall against the band's pull.",
      "Sit your hips down between your heels, knees tracking over your toes.",
      "Drive through your whole foot to stand, stretching the band as you rise.",
    ],
    mistake: "Letting the band pull your chest down and round your back — stay tall and push your knees out.",
  },
  "band-rows": {
    steps: [
      "Anchor the band at chest height or step on it and hinge forward with a flat back.",
      "Hold an end in each hand with arms extended in front of you.",
      "Row your elbows back, pulling the handles to your ribs.",
      "Squeeze your shoulder blades, then extend your arms slowly and repeat.",
    ],
    mistake: "Standing upright and yanking with your arms — keep your torso angle fixed and pull with your back.",
  },
  "band-chest-press": {
    steps: [
      "Anchor the band behind you at chest height and hold an end in each hand.",
      "Step forward into a staggered stance so the band has tension.",
      "Press both hands forward until your arms are straight in front of your chest.",
      "Bring your hands back slowly to chest level with control.",
    ],
    mistake: "Letting your elbows drop and shoulders roll forward — keep elbows at chest height and chest proud as you press.",
  },
  "banded-lateral-walks": {
    steps: [
      "Loop a mini band around your legs just above your knees or at your ankles.",
      "Drop into a quarter squat with feet hip-width apart, keeping tension on the band.",
      "Step sideways with one foot, then follow with the other, keeping tension throughout.",
      "Take all your steps one way, then walk back the other way.",
    ],
    mistake: "Letting your feet come together and lose band tension — keep your feet apart and stay low the whole time.",
  },
  "band-bicep-curls": {
    steps: [
      "Stand on the middle of the band with feet hip-width apart.",
      "Hold an end in each hand, palms up, elbows pinned at your sides.",
      "Curl your hands up toward your shoulders against the band's pull.",
      "Lower slowly all the way down and repeat without swinging.",
    ],
    mistake: "Letting your elbows drift forward as you curl — pin them at your ribs so only your forearms move.",
  },
  "band-overhead-press": {
    steps: [
      "Stand on the middle of the band with feet hip-width apart.",
      "Hold the ends at shoulder height, palms facing forward.",
      "Brace your core and press your hands straight overhead.",
      "Lower slowly back to shoulder height with control.",
    ],
    mistake: "Arching your back as the band tension builds — brace your core and squeeze your glutes before pressing.",
  },
  "band-tricep-pushdowns": {
    steps: [
      "Anchor the band overhead and grip an end in each hand, elbows at your sides.",
      "Start with forearms parallel to the floor, elbows bent about 90 degrees.",
      "Push your hands down until your arms are fully straight.",
      "Return slowly to the start without letting your elbows move.",
    ],
    mistake: "Letting the elbows flare and drift forward — keep them pinned to your ribs the entire set.",
  },
  "band-face-pulls": {
    steps: [
      "Anchor the band at about face height and hold an end in each hand.",
      "Step back until your arms are straight with tension on the band.",
      "Pull the band toward your face, elbows high and wide, thumbs toward you.",
      "Squeeze your shoulder blades, then extend your arms slowly and repeat.",
    ],
    mistake: "Pulling the band down to your chest like a row — aim for your face with elbows up high.",
  },
  "band-romanian-deadlift": {
    steps: [
      "Stand on the middle of the band, feet hip-width apart, holding the ends at your thighs.",
      "Push your hips back and hinge, letting your hands slide down with the band taut.",
      "Keep your back flat and knees only slightly bent.",
      "Drive your hips forward to stand tall, squeezing your glutes.",
    ],
    mistake: "Rounding the back and squatting the motion — hinge from your hips with a flat back and mostly straight legs.",
  },
  "band-glute-bridge": {
    steps: [
      "Loop a mini band around your legs just above your knees.",
      "Lie on your back with knees bent, feet flat, arms by your sides.",
      "Drive through your heels and lift your hips, pushing your knees out against the band.",
      "Squeeze your glutes at the top, then lower slowly and repeat.",
    ],
    mistake: "Letting the band pull your knees together — press your knees out the whole time you lift.",
  },
  "band-clamshells": {
    steps: [
      "Loop a mini band above your knees and lie on your side, knees bent, feet together.",
      "Rest your head on your bottom arm and stack your hips.",
      "Keeping your feet touching, open your top knee like a clamshell.",
      "Lower slowly and finish all reps before switching sides.",
    ],
    mistake: "Rolling your hips backward as the knee opens — keep your pelvis still and let the hip do the work.",
  },
  "band-lateral-raises": {
    steps: [
      "Stand on the middle of the band with feet hip-width apart.",
      "Hold an end in each hand at your sides with a slight elbow bend.",
      "Raise your arms out to shoulder height against the band's pull.",
      "Lower slowly back to your sides with control.",
    ],
    mistake: "Shrugging the shoulders up to your ears — keep them down and lead the lift with your elbows.",
  },
  "band-woodchoppers": {
    steps: [
      "Anchor the band high and stand sideways to it, holding the handle with both hands.",
      "Start with arms up toward the anchor and torso rotated toward it.",
      "Pull the handle diagonally down across your body to the opposite hip.",
      "Control the return to the start and finish all reps before switching sides.",
    ],
    mistake: "Pulling only with your arms while your body stays still — rotate through your torso and pivot your back foot.",
  },
  "band-pallof-press": {
    steps: [
      "Anchor the band at chest height and stand sideways, holding the handle at your chest.",
      "Step away until the band has steady tension pulling you toward the anchor.",
      "Brace your core and press your hands straight out in front of you.",
      "Hold briefly without rotating, then bring your hands back and repeat.",
    ],
    mistake: "Letting the band twist your torso toward the anchor — brace hard and keep your shoulders and hips square.",
  },
  "band-pull-through": {
    steps: [
      "Anchor the band low behind you and stand facing away, feet wide.",
      "Reach back between your legs to grip the band, hinging at your hips.",
      "Drive your hips forward powerfully to stand tall, arms staying long.",
      "Let your hips push back into the hinge to repeat in rhythm.",
    ],
    mistake: "Pulling the band up with your arms and back — keep arms as ropes and let your hip drive do the work.",
  },
  "pull-ups": {
    steps: [
      "Grip the bar with palms facing away, hands just outside shoulder-width.",
      "Start from a dead hang with arms fully straight.",
      "Pull your chest toward the bar by driving your elbows down to your ribs.",
      "Lower slowly all the way back to straight arms before the next rep.",
    ],
    mistake: "Kicking and swinging to get up — stay strict and controlled, or use a band for assistance instead.",
  },
  "chin-ups": {
    steps: [
      "Grip the bar with palms facing you, hands about shoulder-width apart.",
      "Start from a dead hang with arms fully straight.",
      "Pull your chin over the bar, driving your elbows down and back.",
      "Lower slowly to straight arms before starting the next rep.",
    ],
    mistake: "Cutting reps short at the bottom — lower to fully straight arms every rep for the full benefit.",
  },
  "hanging-knee-raises": {
    steps: [
      "Hang from the bar with a firm grip and arms straight.",
      "Brace your core and keep your body as still as possible.",
      "Curl your knees up toward your chest by tilting your pelvis.",
      "Lower your legs slowly back down without swinging.",
    ],
    mistake: "Swinging your legs up with momentum — slow down and curl your pelvis to lift with your abs.",
  },
  "dead-hangs": {
    steps: [
      "Grip the bar with both hands, palms facing away, shoulder-width apart.",
      "Lift your feet off the ground and hang with arms fully straight.",
      "Keep your shoulders engaged slightly, not shrugged up to your ears.",
      "Hold for time, breathing steadily, then step down with control.",
    ],
    mistake: "Completely relaxing so your shoulders shrug to your ears — keep a little tension by pulling your shoulder blades down.",
  },
  "negative-pull-ups": {
    steps: [
      "Use a box or jump to start with your chin over the bar.",
      "Grip firmly and lift your feet, holding yourself at the top.",
      "Lower yourself as slowly as you can, aiming for three to five seconds.",
      "Reach straight arms at the bottom, reset, and repeat.",
    ],
    mistake: "Dropping quickly through the bottom half — fight gravity evenly through the entire way down.",
  },
  "scapular-pull-ups": {
    steps: [
      "Hang from the bar with arms straight and a relaxed, tall hang.",
      "Without bending your elbows, pull your shoulder blades down and together.",
      "Your body should rise a few inches as your shoulders depress.",
      "Reverse slowly back to the relaxed hang and repeat.",
    ],
    mistake: "Bending the elbows and turning it into a mini pull-up — keep arms locked straight and move only your shoulder blades.",
  },
  "hanging-leg-raises": {
    steps: [
      "Hang from the bar with a firm grip and arms straight.",
      "Brace your core and keep your legs together and mostly straight.",
      "Lift your legs up to about hip height by curling your pelvis.",
      "Lower slowly back down without letting your body swing.",
    ],
    mistake: "Swinging back and forth for momentum — pause at the bottom of each rep before lifting again.",
  },
  "toes-to-bar": {
    steps: [
      "Hang from the bar with arms straight and core braced.",
      "Lean back slightly and lift your legs in an arc toward the bar.",
      "Curl your pelvis at the top so your toes touch or near the bar.",
      "Lower your legs slowly and under control to limit swinging.",
    ],
    mistake: "Kipping wildly with no control — build up from leg raises and keep the lowering slow and strict.",
  },
  "commando-pull-ups": {
    steps: [
      "Stand under the bar sideways and grip it hand over hand like a rope.",
      "Hang with your body perpendicular to the bar, arms straight.",
      "Pull up until your head passes to one side of the bar.",
      "Lower fully and alternate which side your head passes on each rep.",
    ],
    mistake: "Letting your body spin and swing — brace your core and grip tight to stay facing one direction.",
  },
  "active-hang": {
    steps: [
      "Grip the bar with both hands and hang with arms fully straight.",
      "Pull your shoulder blades down and together without bending your elbows.",
      "Lift your chest slightly and hold this engaged position.",
      "Hold for time, breathing steadily, keeping your ribs down.",
    ],
    mistake: "Letting your shoulders creep up to your ears — think of pulling your shoulder blades into your back pockets.",
  },
  "step-ups": {
    steps: [
      "Stand facing a sturdy bench or step with feet hip-width apart.",
      "Place one whole foot flat on the step.",
      "Drive through that foot to stand fully on the step, keeping your torso tall.",
      "Step back down with control and repeat, then switch legs.",
    ],
    mistake: "Pushing off hard with the bottom foot — let the top leg do nearly all the lifting.",
  },
  "bulgarian-split-squats": {
    steps: [
      "Stand a stride in front of a bench and rest the top of your rear foot on it.",
      "Keep your torso tall and front foot flat on the floor.",
      "Lower straight down until your front thigh is near parallel to the floor.",
      "Drive through your front foot to stand back up.",
    ],
    mistake: "Setting up so close that your front knee jams forward — take a long enough stance to lower straight down comfortably.",
  },
  "bench-dips": {
    steps: [
      "Sit on a bench edge and place your hands beside your hips, fingers forward.",
      "Walk your feet out and lift your hips clear of the bench.",
      "Lower your body by bending your elbows until your upper arms are near parallel.",
      "Press through your palms to straighten your arms back up.",
    ],
    mistake: "Letting your shoulders roll forward and shrug — keep your chest up and shoulder blades down as you dip.",
  },
  "incline-push-ups": {
    steps: [
      "Place your hands on a bench, slightly wider than shoulders, arms straight.",
      "Step your feet back into a straight plank line from head to heels.",
      "Lower your chest toward the bench, elbows about 45 degrees out.",
      "Press back up until your arms are straight again.",
    ],
    mistake: "Letting your hips sag below the body line — brace your core and glutes to stay in one straight line.",
  },
  "bench-hip-thrust": {
    steps: [
      "Sit on the floor with your upper back resting against a bench edge.",
      "Plant your feet flat with knees bent so shins are vertical at the top.",
      "Drive through your heels and lift your hips until your body is flat like a table.",
      "Squeeze your glutes at the top, then lower slowly and repeat.",
    ],
    mistake: "Placing your feet too far away so your hamstrings take over — walk them in until your shins are vertical at the top.",
  },
  "decline-push-ups": {
    steps: [
      "Place your feet on a bench and hands on the floor under your shoulders.",
      "Form a straight line from head to heels, bracing your core.",
      "Lower your chest toward the floor, elbows tracking about 45 degrees out.",
      "Press the floor away until your arms are straight.",
    ],
    mistake: "Letting the hips pike up high — keep one straight line and lower your chest, not just your head.",
  },
  "box-jumps": {
    steps: [
      "Stand facing a sturdy box about an arm's length away, feet hip-width apart.",
      "Dip into a quarter squat and swing your arms back.",
      "Explode up and forward, landing softly on the box with both feet flat.",
      "Stand fully tall on the box, then step back down and reset.",
    ],
    mistake: "Jumping straight back down off the box — step down instead to save your joints and stay in control.",
  },
  "seated-bench-leg-raises": {
    steps: [
      "Sit on the edge of a bench and grip the sides behind you for support.",
      "Lean back slightly and extend your legs out in front, hovering off the floor.",
      "Keeping your legs together, lift them up toward chest height.",
      "Lower slowly back to the hover without letting your feet rest.",
    ],
    mistake: "Rounding your back and collapsing your chest — sit tall and lean back only slightly from your hips.",
  },
  "bench-plank": {
    steps: [
      "Place your forearms or hands on a bench, elbows under your shoulders.",
      "Walk your feet back until your body forms one straight line.",
      "Brace your core and squeeze your glutes to keep your hips level.",
      "Hold while breathing steadily for the full set time.",
    ],
    mistake: "Letting your lower back sag toward the floor — brace harder and tuck your pelvis slightly to stay flat.",
  },
  "bench-step-downs": {
    steps: [
      "Stand on a bench or step with one foot near the edge.",
      "Shift your weight onto that leg and bend its knee slowly.",
      "Lower until the opposite heel lightly taps the floor beside the bench.",
      "Drive through the standing leg to straighten back up, then switch sides.",
    ],
    mistake: "Dropping quickly and pushing off the floor foot — lower slowly and let the standing leg control everything.",
  },
  "bench-calf-raises": {
    steps: [
      "Stand on the edge of a bench or step, heels hanging off, holding support.",
      "Let your heels drop below the step for a full stretch.",
      "Press through the balls of your feet and lift your heels as high as possible.",
      "Pause at the top, then lower slowly back into the stretch.",
    ],
    mistake: "Bouncing out of the bottom — pause briefly at both the stretch and the top of every rep.",
  },
  "bench-reverse-hypers": {
    steps: [
      "Lie face down across a bench with your hips at the edge, gripping the sides.",
      "Let your legs hang toward the floor with knees slightly bent.",
      "Squeeze your glutes and lift your legs up to about body height.",
      "Lower slowly back down without letting your feet touch the floor.",
    ],
    mistake: "Swinging the legs up with momentum and overarching — lift only to body height using your glutes.",
  },
  "basic-bounce": {
    steps: [
      "Hold the rope handles at hip height with elbows relaxed at your sides.",
      "Turn the rope with small wrist circles and bounce lightly on both feet.",
      "Jump just an inch or two — only high enough for the rope to pass.",
      "Keep a steady rhythm, landing softly on the balls of your feet.",
    ],
    mistake: "Jumping too high and kicking your feet back — keep the bounce tiny and your feet under you.",
  },
  "jump-rope-high-knees": {
    steps: [
      "Start with a few basic bounces to find your rhythm.",
      "As the rope comes around, drive one knee up toward hip height.",
      "Alternate knees on each pass of the rope, staying light on your feet.",
      "Keep your chest tall and wrists turning steadily at your sides.",
    ],
    mistake: "Speeding up the rope to match your knees — keep one steady rope rhythm and fit your knees to it.",
  },
  "double-unders": {
    steps: [
      "Start with several relaxed single bounces to settle your rhythm.",
      "Jump slightly higher and spin your wrists faster to pass the rope twice.",
      "Keep your body tall and your jump straight up, not kicked back.",
      "Land softly and flow back into single bounces or the next double.",
    ],
    mistake: "Bending your knees and kicking your heels up — jump straight and let faster wrists do the work.",
  },
  "side-swings": {
    steps: [
      "Hold both rope handles together in front of your body.",
      "Swing the rope in a figure pattern beside one side of your body.",
      "Step or bounce lightly in place while the rope swings clear of your feet.",
      "Open the rope back out and resume normal jumping when ready.",
    ],
    mistake: "Swinging the rope across your body and tripping on it — keep the swing fully to one side until you open it.",
  },
  "alternate-foot-steps": {
    steps: [
      "Start with a basic bounce to establish your rope rhythm.",
      "Shift your weight and tap one foot forward as the rope passes.",
      "Alternate feet each turn, like a slow boxer's shuffle.",
      "Keep the jumps low and your upper body relaxed and tall.",
    ],
    mistake: "Making the steps too big and catching the rope — keep the foot taps small and close to the ground.",
  },
  "boxer-steps": {
    steps: [
      "Start bouncing lightly with the rope at an easy rhythm.",
      "Shift your weight from foot to foot, letting one heel lift at a time.",
      "Roll your weight side to side like a boxer staying loose.",
      "Keep your shoulders relaxed and wrists turning small, steady circles.",
    ],
    mistake: "Bouncing stiffly on both feet at once — relax and let your weight genuinely shift side to side.",
  },
  "criss-cross": {
    steps: [
      "Start with a basic bounce and a comfortable rhythm.",
      "As the rope comes down, cross your forearms in front of your body.",
      "Jump through the smaller loop, keeping your hands low near your hips.",
      "Uncross on the next turn and alternate crossed and normal passes.",
    ],
    mistake: "Crossing your hands too high and wide — cross low at your waist so the loop stays open enough to jump.",
  },
  "backward-jumps": {
    steps: [
      "Stand with the rope behind your heels, handles at your sides.",
      "Swing the rope backward over your head using your wrists.",
      "Bounce lightly on the balls of your feet as the rope passes under you.",
      "Keep a small, steady jump and relaxed shoulders throughout.",
    ],
    mistake: "Turning the rope with your whole arms — use small wrist circles just like forward jumping.",
  },
  "single-leg-hops": {
    steps: [
      "Balance on one foot with a soft knee, other foot hovering behind you.",
      "Hop lightly in place, landing on the ball of your foot.",
      "Keep your hips level and your torso tall over the standing leg.",
      "Do short sets and switch legs before fatigue ruins your balance.",
    ],
    mistake: "Letting the knee cave inward on landing — land softly with your knee tracking over your toes.",
  },
};
