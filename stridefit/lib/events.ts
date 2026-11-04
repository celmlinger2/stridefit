// Public race-event listings for the /events hub.
//
// RULE (90-day SEO roadmap): only real, verified events — never
// placeholders. Every field below comes from the event's official
// race page or official registration listing, re-verified on the
// `lastVerified` date. Anything an official source does not state is
// written as "not stated" in the copy — never filled from third-party
// roundups. Prices step up as race day approaches: re-verify the
// whole entry before the date in `recheckBy` where set, and always
// show `lastVerified` on the page.

export type RaceEvent = {
  slug: string;
  name: string;
  organizer: string;
  /** ISO date of race day, for sorting and schema. */
  dateISO: string;
  dateLabel: string;
  startTimes: string;
  location: string;
  city: string;
  distances: string[];
  /** One line shown on the index card, e.g. "5K $40 · 10K $45". */
  priceSummary: string;
  prices: { label: string; price: string; note?: string }[];
  nextIncrease?: string;
  includes: string[];
  walkers: string;
  packetPickup: string;
  course: string;
  registrationUrl: string;
  officialUrl: string;
  beginnerTake: string;
  planFit: { label: string; href: string; copy: string };
  lastVerified: string;
};

export const EVENTS: RaceEvent[] = [
  {
    slug: "cyclones-frozen-5k-10k",
    name: "Cincinnati Cyclones Frozen 5K/10K",
    organizer: "Cincinnati Cyclones Foundation",
    dateISO: "2027-02-06",
    dateLabel: "Saturday, February 6, 2027",
    startTimes: "9:00 AM — both the 5K and 10K start together",
    location:
      "Heritage Bank Center, 100 Broadway, Cincinnati, OH 45202 — the start line is about a 5-minute walk from the arena, on the riverfront at The Banks",
    city: "Cincinnati, OH",
    distances: ["5K", "10K"],
    priceSummary: "5K $40 · 10K $45",
    prices: [
      { label: "5K", price: "$40" },
      { label: "10K", price: "$45" },
    ],
    nextIncrease:
      "Prices step up after December 31, 2026 (the 5K rises to $45) — entering before New Year's Eve is the easy saving.",
    includes: [
      "Long-sleeve tech shirt",
      "Finisher medal made from a real hockey puck",
      "Voucher for any remaining 2026–27 Cyclones regular-season home game",
      "Hot chocolate after the race",
    ],
    walkers:
      "Not stated. The official race page and registration listing don't publish a walker policy or a course cutoff, so if you plan to walk the whole way, check with the organizers before entering — and compare your expected pace with our pace calculator either way.",
    packetPickup:
      "Thursday, February 4 (10 AM–8 PM) and Friday, February 5 (10 AM–6 PM) at Tri-State Running Company — Edgewood, Mariemont, and Florence locations. Race-day pickup also runs 7:00–8:50 AM at Heritage Bank Center.",
    course:
      "Along the banks of the Ohio River and through Cincinnati's Transit Center underneath Second Street — a route you won't get on any other local race. The organizers don't publish a course elevation profile, so treat the hills question as unanswered rather than assuming it's flat.",
    registrationUrl:
      "https://runsignup.com/Race/OH/Cincinnati/CincinnatiCyclonesFrozen",
    officialUrl: "https://cycloneshockey.com/event/2027/02/frozen-5k-10k",
    beginnerTake:
      "A strong first race: local, mid-sized, for a hometown cause, and in February — far enough out that an 8-week beginner plan starting in early December lands you on the start line with weeks to spare. February in Cincinnati means cold-weather gear, not crowds.",
    planFit: {
      label: "Beginner 5K training plan",
      href: "/beginner-5k-training-plan",
      copy: "Picking the 5K? The 8-week beginner plan, started by mid-December, has you ready well before February 6. Choosing the 10K instead? Pair the extra weeks with our 10K pacing guide.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "flying-pig-5k-10k",
    name: "Flying Pig 5K & 10K",
    organizer: "Flying Pig Marathon Weekend",
    dateISO: "2027-05-01",
    dateLabel: "Saturday, May 1, 2027",
    startTimes: "10K at 7:00 AM · 5K at 9:00 AM — both on Saturday morning",
    location:
      "Mehring Way, Cincinnati, OH 45202 — both races start on Mehring Way and finish near the Anderson Pavilion and carousel, west of the Roebling Bridge",
    city: "Cincinnati, OH",
    distances: ["5K", "10K"],
    priceSummary: "5K $55.49 · 10K $66.18 (fees included)",
    prices: [
      {
        label: "5K (in person)",
        price: "$55.49",
        note: "Virtual option: $44.79",
      },
      {
        label: "10K (in person)",
        price: "$66.18",
        note: "Virtual option: $55.49",
      },
    ],
    nextIncrease:
      "No next price-increase date is published on the registration page — the prices above are the current tier, and Flying Pig prices do rise as weekend approaches, so don't sit on them.",
    includes: [
      "Race shirt and limited-edition poster",
      "Virtual goodie bag",
      "Finisher medal, mylar blanket, and finish-area refreshments",
      "Downloadable finisher certificate",
    ],
    walkers:
      "Welcome in writing: Flying Pig's FAQ says walkers are welcome in all its events, and asks walkers to hold a 16-minute-per-mile pace or move to the sidewalk as streets progressively re-open. That is a workable pace for a run-walk beginner — check yours with our pace calculator. The 10K is also hand-cycle friendly.",
    packetPickup:
      "P&G Health & Fitness Expo at First Financial Center (formerly the Duke Energy Convention Center), 525 Elm St, Cincinnati. For these Saturday races the expo window that works is Friday, April 30, 10 AM–7 PM — Saturday's expo hours (10 AM–5 PM) start after both races. Someone else can collect your packet with the official authorization form and a copy of your photo ID.",
    course:
      "The 5K loops downtown and the riverfront, including the transit tunnel. The 10K heads west on Mehring Way, crosses the Taylor Southgate Bridge into Newport, KY, loops Monmouth Street, and comes back over the bridge. Flying Pig's famous hills belong to Sunday's marathon course — the organizers publish no hill claim for the Saturday 5K/10K, and neither do we.",
    registrationUrl:
      "https://raceroster.com/events/2027/107466/2027-flying-pig-marathon-weekend",
    officialUrl: "https://flyingpigmarathon.com",
    beginnerTake:
      "The big-race experience, close to home: thousands of runners, a full weekend festival around it, and the region's best crowd support. It's a wonderful first race if the scale excites you — and an even better second race if you'd rather debut somewhere smaller, like the Frozen 5K in February.",
    planFit: {
      label: "How to pace a 10K",
      href: "/how-to-pace-a-10k",
      copy: "May 1 is the friendliest deadline on this list — there's time for the beginner 5K plan and a full base before it. Taking the 10K? Our pacing guide is the difference between a strong finish and a long last mile.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "upstander-5k",
    name: "Upstander 5K",
    organizer:
      "Nancy & David Wolf Holocaust & Humanity Center — Cohen Family Upstander 5K & Family Day",
    dateISO: "2027-06-27",
    dateLabel: "Sunday, June 27, 2027",
    startTimes: "8:30 AM — registration stays open right up to the start",
    location:
      "Union Terminal, 1301 Western Ave, Cincinnati, OH 45203 — start and finish at one of the city's landmark buildings",
    city: "Cincinnati, OH",
    distances: ["5K"],
    priceSummary: "5K $42.50",
    prices: [{ label: "5K", price: "$42.50" }],
    includes: [
      "Race t-shirt and an iconic Union Terminal finisher medal",
      "Free admission to Cincinnati Museum Center on race day",
      "Post-race live music, snacks, and giveaways",
      "Family Day activities — family programming, a pickleball tournament, hands-on art, and guided Upstander tours",
    ],
    walkers:
      "Explicitly for runners and walkers — the organizers describe a route that \"takes runners and walkers\" through the neighborhood. No course cutoff is published, which for a community 5K like this usually means the finish stays open while people are finishing; confirm on the registration page if a time limit matters to you.",
    packetPickup:
      "Not yet announced — the registration page currently says packet pickup details are \"coming soon.\" Check the official registration page closer to race week; we'll update this listing when the organizers publish it.",
    course:
      "Through Cincinnati's West End and Price Hill neighborhoods, starting and finishing at Union Terminal. The organizers don't publish an elevation profile.",
    registrationUrl: "https://runsignup.com/Race/OH/Cincinnati/HHCUpstander5K",
    officialUrl: "https://www.holocaustandhumanity.org",
    beginnerTake:
      "The most beginner-friendly entry on this list: a 5K only, walkers named in the description, a family festival wrapped around it, and a June date that gives a brand-new runner the longest possible runway — start the 8-week plan in late April and still arrive early.",
    planFit: {
      label: "Beginner 5K training plan",
      href: "/beginner-5k-training-plan",
      copy: "This is the natural target for the 8-week beginner 5K plan: start in late April, finish June 27, then spend the rest of the day in the museums your entry covers.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "love-every-breath-5k",
    name: "Love Every Breath 5K",
    organizer: "Love Every Breath 5k + 1 Mile Run/Walk — benefiting the Pulmonary Fibrosis Foundation",
    dateISO: "2027-02-14",
    dateLabel: "Sunday, February 14, 2027",
    startTimes: "5K at 10:30 AM · 1 Mile Run/Walk at 12:00 PM",
    location:
      "50 West Brewing, 7605 Wooster Pike, Cincinnati, OH 45227 — out-and-back on the Little Miami Scenic Trail",
    city: "Cincinnati, OH",
    distances: ["5K", "1 Mile"],
    priceSummary: "5K $35 · 1 Mile $25 (plus signup fees)",
    prices: [
      { label: "5K", price: "$35", note: "plus $3.10 signup fee" },
      { label: "1 Mile Run/Walk", price: "$25", note: "plus $2.50 signup fee" },
    ],
    nextIncrease:
      "No price-increase date is published — one flat price, and registration stays open until the 5K starts on race morning.",
    includes: [
      "Timed results",
      "A hot beverage or fry from 50 West Brewing, redeemable with your bib at the post-race party",
      "Raffle entry for Fleet Feet / Pulmonary Fibrosis Foundation swag bags",
      "Water and a snack at the finish",
    ],
    walkers:
      "Built for walkers: both the 5K and the 1 Mile are billed as Run/Walk events, and no pace cutoff is published. The later 10:30 AM start also makes this the most forgiving alarm clock on this list.",
    packetPickup:
      "Saturday, February 13, 4–6 PM at Fleet Feet Oakley, or race morning, February 14, 9–10 AM at Fleet Feet's 50 West location (1 Mile pickup continues 11 AM–12 PM at the 50W cabanas).",
    course:
      "An out-and-back on the Little Miami Scenic Trail from 50 West Brewing — a paved rail-trail, so no traffic and no getting lost: you turn around and come back the way you came. The organizers don't publish an elevation profile.",
    registrationUrl:
      "https://runsignup.com/Race/OH/Cincinnati/LoveEveryBreath5k1MileRunWalk",
    officialUrl:
      "https://runsignup.com/Race/OH/Cincinnati/LoveEveryBreath5k1MileRunWalk",
    beginnerTake:
      "A Valentine's morning run-walk on a scenic trail that finishes at a brewery, for a good cause. If the Frozen 5K a week earlier feels too soon, this is the same training block with eight extra days — and the 1 Mile option is a genuine on-ramp for someone not ready for 5K yet.",
    planFit: {
      label: "Beginner 5K training plan",
      href: "/beginner-5k-training-plan",
      copy: "Mid-February gives the 8-week beginner plan a comfortable mid-December start. Still building up from walking? Our walking starter plan is the bridge to it.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "time-to-paddy-5k-10k",
    name: "Time to Paddy 5K/10K & Lucky 13.1",
    organizer: "Bodies Race Company",
    dateISO: "2027-02-27",
    dateLabel: "Saturday, February 27, 2027",
    startTimes: "9:00 AM — all distances start together",
    location:
      "Rentschler Forest MetroPark, Cummins Shelter, 5701 Reigart Rd, Hamilton, OH 45011",
    city: "Hamilton, OH",
    distances: ["5K", "10K", "Half Marathon", "1 Mile"],
    priceSummary: "5K $30 · 10K $30 · Half $67",
    prices: [
      { label: "5K", price: "$30" },
      { label: "10K", price: "$30" },
      { label: "Half Marathon (Lucky 13.1)", price: "$67" },
      { label: "Youth 12 & under (5K/10K)", price: "$17" },
      { label: "1 Mile", price: "$22" },
    ],
    nextIncrease:
      "No price-increase date is published on the registration page.",
    includes: [
      "Custom bib and designer shirt",
      "Custom finisher medal",
      "Chip timing with live results and awards",
      "Free race photos",
      "Finish-line snacks",
    ],
    walkers:
      "The organizer's own pitch is aimed at beginners: its events \"welcome every pace and fitness level.\" No course cutoff is published. Shirt size is guaranteed if you register by midnight two Thursdays before race day.",
    packetPickup:
      "Race morning only, 7:30–8:45 AM at the park (pre-race pickup is only added if the organizer announces it by email).",
    course:
      "Inside Rentschler Forest MetroPark — a wooded park setting north of Cincinnati rather than downtown streets. The organizers don't publish a course elevation profile.",
    registrationUrl:
      "https://runsignup.com/Race/OH/Cincinnati/TimetoPaddy5k10kLucky131Cincinnati",
    officialUrl:
      "https://runsignup.com/Race/OH/Cincinnati/TimetoPaddy5k10kLucky131Cincinnati",
    beginnerTake:
      "The joint-cheapest entry on this list — $30 for the 5K or the 10K — with a St. Patrick's Day theme and an organizer that explicitly markets to first-timers. Hamilton is about 45 minutes from downtown Cincinnati, so it's a small road trip, not a hotel trip.",
    planFit: {
      label: "Beginner 5K training plan",
      href: "/beginner-5k-training-plan",
      copy: "Late February is a full 8-week plan away from a late-December start, with room to spare. Tempted by the 10K at the same $30? Our 10K pacing guide explains the jump honestly.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "dennis-risch-memorial-5k",
    name: "Dennis Risch Memorial 5K Run/Walk",
    organizer: "Dennis Risch Memorial Fund — this year supporting the Immigrant and Refugee Law Center",
    dateISO: "2027-03-07",
    dateLabel: "Sunday, March 7, 2027",
    startTimes: "9:00 AM",
    location:
      "Spring Grove Cemetery and Arboretum, Cincinnati, OH 45232 — starting and finishing near the Spring Grove Funeral Home, winding through the arboretum",
    city: "Cincinnati, OH",
    distances: ["5K"],
    priceSummary: "Adults $30 · Youth $10 (through Feb 27)",
    prices: [
      { label: "Adults 19+", price: "$30", note: "$35 from Feb 28 / race day" },
      { label: "Youth 6–18", price: "$10", note: "$15 from Feb 28 / race day" },
      { label: "Under 6", price: "Free", note: "No registration needed" },
    ],
    nextIncrease:
      "Enter by Saturday, February 27, 2027 to get the $30 adult / $10 youth price — it's $35 / $15 after that, including race-day registration (all registration is online).",
    includes: [
      "Awards — overall and per age division, plus a stroller category",
      "Post-race gathering at Brink Brewing Company, 11 AM–3 PM",
      "Commemorative shirt available for $15 extra (limited quantities — not included in entry)",
    ],
    walkers:
      "\"Runners and Walkers are welcome\" is the headline on the race page, and there's a stroller category in the awards. No course cutoff is published.",
    packetPickup:
      "No early pickup — race-day check-in only, 7:30–8:45 AM at the venue. Keep it simple and arrive early.",
    course:
      "Through the Spring Grove arboretum — 733 acres of gardens, lakes, and mature trees, and one of the most beautiful places to run in Cincinnati. The organizers don't publish an elevation profile; expect gentle garden roads, not a track.",
    registrationUrl:
      "https://runsignup.com/Race/OH/Cincinnati/DennisRischMemorial5KRunWalk",
    officialUrl:
      "https://runsignup.com/Race/OH/Cincinnati/DennisRischMemorial5KRunWalk",
    beginnerTake:
      "A small, fourth-year community race in a spectacular setting — the opposite of a overwhelming mega-event, and a kind first start line if big crowds put you off. Youth pricing ($10) makes it one of the cheapest family 5Ks on this list.",
    planFit: {
      label: "Beginner 5K training plan",
      href: "/beginner-5k-training-plan",
      copy: "Early March means the 8-week beginner plan starts in early January — the classic New Year start, with race day as the payoff.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "chicks-on-the-run-5k",
    name: "Chicks on the Run 5K & Honor Walk",
    organizer: "Chicks & Chucks, Inc. — supporting breast-cancer patients in Northern Kentucky and Greater Cincinnati",
    dateISO: "2027-04-24",
    dateLabel: "Saturday, April 24, 2027",
    startTimes: "5K at 9:00 AM · 1 Mile Honor Walk at 9:10 AM",
    location:
      "Barleycorn's Brewhouse, 402 Licking Pike, Wilder, KY 41071 — the Northern Kentucky entry on this list, about 20 minutes from Florence",
    city: "Wilder, KY",
    distances: ["5K", "1 Mile Honor Walk"],
    priceSummary: "5K $50 · Honor Walk $40 · VIP $60",
    prices: [
      { label: "5K Run/Walk", price: "$50" },
      { label: "1 Mile Honor Walk", price: "$40" },
      {
        label: "VIP 5K",
        price: "$60",
        note: "Adds VIP parking, a t-shirt, a beer coupon, and a private brewery tour",
      },
      { label: "T-shirt add-on", price: "$15", note: "Not included in base entry" },
    ],
    nextIncrease:
      "No price-increase date is published on the registration page.",
    includes: [
      "Finisher medal for every 5K finisher",
      "Chip timing by RaceRise",
      "Post-race celebration at Barleycorn's, including its special pink \"Peaches and Cream\" ale",
      "Awards, including $100 gift cards for the overall male and female winners",
    ],
    walkers:
      "A Run/Walk by design, with a separate 1 Mile Honor Walk for anyone who wants to take part without the 5K. No course cutoff is published.",
    packetPickup:
      "Friday, April 23, 1–5 PM at Barleycorn's, and race morning 7:30–9:00 AM. General parking is at Frederick's Landing with a free shuttle; VIP entries park on site.",
    course:
      "From Barleycorn's Brewhouse in Wilder, KY. The listing doesn't publish a course map or elevation profile — check the registration page for the route before race week.",
    registrationUrl:
      "https://www.givesignup.org/Race/KY/Wilder/ChicksOnTheRun5KHonorWalk",
    officialUrl:
      "https://www.givesignup.org/Race/KY/Wilder/ChicksOnTheRun5KHonorWalk",
    beginnerTake:
      "The closest race on this list to Northern Kentucky — no bridge, no downtown parking puzzle. A second-year charity run/walk with a brewery celebration at the finish and proceeds staying local, helping breast-cancer patients in NKY and Greater Cincinnati.",
    planFit: {
      label: "Beginner 5K training plan",
      href: "/beginner-5k-training-plan",
      copy: "Late April gives the 8-week plan a late-February start — the friendliest training weather of any race on this list.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "hometown-half-5k-10k",
    name: "Hometown Half Marathon, 5K & 10K — Cincinnati",
    organizer: "Bodies Race Company",
    dateISO: "2027-05-22",
    dateLabel: "Saturday, May 22, 2027",
    startTimes: "7:00 AM — all distances",
    location:
      "Rentschler Forest Park, Cummins Shelter, 5701 Reigart Rd, Hamilton, OH 45011 — same park as February's Time to Paddy",
    city: "Hamilton, OH",
    distances: ["5K", "10K", "Half Marathon"],
    priceSummary: "5K $30 · 10K $34 · Half $55",
    prices: [
      { label: "5K", price: "$30" },
      { label: "10K", price: "$34" },
      { label: "Half Marathon", price: "$55" },
      { label: "Youth 12 & under (5K/10K)", price: "$17" },
    ],
    nextIncrease:
      "No price-increase date is published on the registration page.",
    includes: [
      "Custom bib and designer shirt",
      "Custom finisher medal",
      "Chip timing with live results",
      "Free race photos and finish-line snacks",
      "Pacers for the half marathon",
    ],
    walkers:
      "Same Bodies Race Company welcome as its February race — events pitched at \"every pace and fitness level.\" No course cutoff is published.",
    packetPickup: "Race morning, 5:30–6:45 AM at the park.",
    course:
      "Rentschler Forest Park in Hamilton — park roads and woods instead of city streets. The organizers don't publish a course elevation profile.",
    registrationUrl:
      "https://www.trisignup.com/Race/OH/Harrison/HometownHalfMarathon5k10kCincinnati",
    officialUrl:
      "https://www.trisignup.com/Race/OH/Harrison/HometownHalfMarathon5k10kCincinnati",
    beginnerTake:
      "The natural step-up race: if a February or March 5K went well, this is a May 10K (or a first half, for the ambitious) at the same friendly park, from the same organizer, at the same kind of price.",
    planFit: {
      label: "How to pace a 10K",
      href: "/how-to-pace-a-10k",
      copy: "By May you could be graduating from the beginner 5K plan to your first 10K — our pacing guide is the bridge. Staying at 5K? There's time for a second full training block this spring.",
    },
    lastVerified: "November 4, 2026",
  },
  {
    slug: "heatwave-half-5k-10k",
    name: "Heatwave Half Marathon, 5K & 10K — Cincinnati",
    organizer: "Bodies Race Company",
    dateISO: "2027-07-10",
    dateLabel: "Saturday, July 10, 2027",
    startTimes: "7:00 AM — all distances, early to beat the heat",
    location:
      "Otto Armleder Memorial Park, 5057 Wooster Pike, Cincinnati, OH 45227",
    city: "Cincinnati, OH",
    distances: ["5K", "10K", "Half Marathon"],
    priceSummary: "5K $30 · 10K $30 · Half $55",
    prices: [
      { label: "5K", price: "$30" },
      { label: "10K", price: "$30" },
      { label: "Half Marathon", price: "$55" },
      { label: "Youth 12 & under (5K/10K)", price: "$17" },
    ],
    nextIncrease:
      "No price-increase date is published on the registration page.",
    includes: [
      "Custom bib and designer shirt",
      "Custom finisher medal",
      "Chip timing with live results",
      "Free race photos",
      "Free Kona Ice at the finish",
    ],
    walkers:
      "Same Bodies Race Company welcome as its other Cincinnati races — \"every pace and fitness level.\" No course cutoff is published.",
    packetPickup: "Race morning, 5:30–6:45 AM at the park.",
    course:
      "Otto Armleder Memorial Park on Cincinnati's east side, next to the Little Miami River. The organizers don't publish a course elevation profile.",
    registrationUrl:
      "https://runsignup.com/Race/OH/Hamilton/HeatwaveHalfMarathonCincinnati",
    officialUrl:
      "https://runsignup.com/Race/OH/Hamilton/HeatwaveHalfMarathonCincinnati",
    beginnerTake:
      "The name is honest: this is a July race, with a 7 AM start to dodge the worst of it and shaved ice at the finish. As a first race it's the hardest sell on this list — as a mid-summer goal after a spring 5K, with a few weeks of warm-weather training behind you, it's a fun one.",
    planFit: {
      label: "Beginner 5K training plan",
      href: "/beginner-5k-training-plan",
      copy: "A July target means starting the beginner plan in mid-May — and pairing it with our guide to what to eat and drink before and after a run matters more in summer than any other season.",
    },
    lastVerified: "November 4, 2026",
  },
];

export function findEvent(slug: string): RaceEvent | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

export const EVENTS_SORTED: RaceEvent[] = [...EVENTS].sort((a, b) =>
  a.dateISO.localeCompare(b.dateISO)
);
