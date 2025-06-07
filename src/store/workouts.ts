import { reactive } from 'vue'

export interface WholeWorkout {
  id: number
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
  total: number
  subSections: SubSection[]
}

interface SubSection {
  title?: string
  multiplier?: number
  workouts: Workout[]
}

interface Workout {
  title: string
  total: number
  notes?: string
}

export const workouts = reactive<WholeWorkout[]>([
  {
    id: 1,
    name: "Pacific Spiny Lumpsucker",
    level: "Advanced",
    total: 3500,
    subSections: [
      {
        title: "Warmup",
        workouts: [
          {
            title: "300 swim, 200 pull, 100 kick",
            total: 600
          }
        ]
      },
      {
        title: "Set 1",
        multiplier: 4,
        workouts: [
          {
            title: "50 kick, 50 drill, 50 drill, 50 swim @ b +20",
            total: 200,
            notes: "IM order (one of each stroke…do these on a comfortable base, it’s just to get the blood flowing, move all the muscles)"
          }
        ]
      },
      {
        title: "Main Set",
        multiplier: 2,
        workouts: [
          {
            title: "300 paddles only @ b -5",
            total: 300
          },
          {
            title: "2 x 150 swim @ b—>build to 80-85%",
            total: 300
          },
          {
            title: "3 x 100 swim BEST AVERAGE PACE @ b+20",
            total: 300
          },
          {
            title: "1:00 recovery (and to get your paddles back on for the second round)",
            total: 0
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "300 choice",
            total: 300
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Sea Otter",
    level: "Beginner",
    total: 800,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "100 swim",
            total: 100
          },
          {
            title: "100 kick",
            total: 100
          }
        ]
      },
      {
        title: "Set 1",
        multiplier: 3,
        workouts: [
          {
            title: "9x50 @ :20 rest",
            total: 450
          }
        ]
      },
      {
        title: "Set 2",
        workouts: [
          {
            title: "100 swim strong, breating every three",
            total: 100
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "50 easy",
            total: 50
          }
        ]
      }
    ]
  },
  {
    name: "Halimeda Ghost Pipefish",
    id: 3,
    level: "Intermediate",
    total: 2800,
    subSections: [
      {
        title: "Warm-up",
        workouts: [
          {
            title: "1x400 swim",
            total: 400
          },
          {
            title: "1x200 IM drill",
            total: 200
          },
          {
            title: "1x100",
            total: 100
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "1x200 @ B+ 20: 50 drill / 50 kick / 50 build / 50 ez",
            total: 200
          },
          {
            title: "2x50 @ 1:00/1:10: 1 STRONG - 1 ez",
            total: 200
          },
          {
            title: "1x200 @ B + 15: 50 kick / 50 build / 50 ez / 50 strong",
            total: 200
          },
          {
            title: "4x50 @ 1:00/1:10: 1 ez - 2 STRONG - 1 ez",
            total: 200
          },
          {
            title: "1x200 @ B + 10: 50 build / 50 ez / 50 strong / 50 FAST",
            total: 200
          },
          {
            title: "6x50 @ 1:00/1:10: 1 ez - 1 STRONG - 2 ez - 2 STRONG",
            total: 200
          }
        ]
      },
      {
        title: "Main Set",
        workouts: [
          {
            title: "3x300 pull or swim descend 1-3, each one ~5 seconds faster than previous",
            total: 900
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "Your choice warm down",
            total: 0
          }
        ]
      },
    ]
  },
  {
    id: 4,
    name: "Shortfin Squid",
    level: "Beginner",
    total: 900,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "2 x 100 warm up @ :30 rest",
            total: 200
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "4 x 25 @ :30 rest, SPRINT",
            total: 100,
            notes: "Breathe as few times as possible on these"
          },
          {
            title: "4 x 50 @ :15 rest",
            total: 200,
            notes: "Active recovery, you can go slowly but keep moving and do your best to stick with the :15 rest"
          },
          {
            title: "4 x 25 @ :30 rest, SPRINT",
            total: 100,
            notes: "Again, breathing as few times as possible"
          },
          {
            title: "4 x 50 @ :15 rest",
            total: 200,
            notes: "Active recovery, you can go slowly but keep moving and do your best to stick with the :15 rest"
          },
          {
            title: "100 freestyle warmdown",
            total: 100,
            notes: "swim slowly and relax"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Sea Bunny",
    level: "Beginner",
    total: 1200,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "8 x 25 kick with board @ :15 rest",
            total: 200
          },
          {
            title: "4 x 50 swim alternate free/stroke by 25 @ :20 rest",
            total: 200
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "8 x 25 kick, evens fast, odds easy @ :10 rest",
            total: 200
          },
          {
            title: "8 x 25 swim freestyle @ :15 rest",
            total: 200
          },
          {
            title: "4 x 50 swim @ :20 rest",
            total: 200
          },
          {
            title: "8 x 25 odds FAST freestyle, evens easy stroke @ :10 rest",
            total: 200
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Marrus Orthocanna",
    level: "Intermediate",
    total: 1750,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "250 your choice",
            total: 250
          }
        ]
      },
      {
        title: "Main Set",
        workouts: [
          {
            title: "4 x 100 stroke (your choice) @ :15 rest",
            total: 400
          },
          {
            title: "200 freestyle @ :20 rest",
            total: 200,
            notes: "alternate breathing every 3 on odd laps, every 4 on even laps"
          },
          {
            title: "4 x 100 freestyle @ :15 rest",
            total: 400,
            notes: "breathing every 2 or 4 ON YOUR WEAKEST SIDE"
          },
          {
            title: "250 freestyle breathing pattern",
            total: 250,
            notes: "25 breathing every 6, 50 breathing every 5 (alternating sides), 75 breathing every 4, 100 breathing every 3 (alternating sides)"
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "250 easy",
            total: 250
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Red Spotted Blenny",
    level: "Intermediate",
    total: 1600,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "200 easy",
            total: 200
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "3×100 free swim @ b +5",
            total: 300,
            notes: "nice and smooth"
          },
          {
            title: "1×300 free swim @ b",
            total: 300,
            notes: "at a comfortable pace"
          },
          {
            title: "3×100 free swim @ b",
            total: 300,
            notes: "cruise"
          },
          {
            title: "1×300 free swim @ b descend to fast",
            total: 300,
            notes: "start out swim nice and smooth, by end should be going fast"
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "4 x 50 kick down (no board), easy back @ b +20",
            total: 200,
            notes: "or your choice, nice and smooth"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Squirrelfish",
    level: "Intermediate",
    total: 1400,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "200 swim",
            total: 200
          },
          {
            title: "6 x 50 kick @ :15 rest",
            total: 300
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "4 x 25 @ :30 (or whatever is a comfortable base)",
            total: 100
          },
          {
            title: "100 @ b+15",
            total: 100,
            notes: ":30 rest"
          },
          {
            title: "2 x 50 @ b +5",
            total: 100
          },
          {
            title: "100 @ b+15",
            total: 100,
            notes: ":45 rest"
          },
          {
            title: "1 x 100 @ b",
            total: 100
          },
          {
            title: "100 @ b+15",
            total: 100,
            notes: "1:00 rest"
          },
          {
            title: "100 @ b -5 (that's right!)",
            total: 100
          },
          {
            title: "100 @ b+15",
            total: 100
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "100 easy",
            total: 100
          }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Squidworm",
    level: "Intermediate",
    total: 1400,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "200 swim your choice",
            total: 200
          },
          {
            title: "100 kick",
            total: 100
          },
          {
            title: "100 pull (buoy, no paddles)",
            total: 100
          }
        ]
      },
      {
        title: "Set 1",
        multiplier: 4,
        workouts: [
          {
            title: "25 build up (start slow, build to fast) @ :15 rest",
            total: 25
          },
          {
            title: "25 build down (start fast off the wall, ease down to slow) @ :15 rest",
            total: 25
          },
          {
            title: "25 easy @ :15 rest",
            total: 25
          },
          {
            title: "25 FAST @ 15 rest",
            total: 25
          }
        ]
      },
      {
        title: "Set 2",
        workouts: [
          {
            title: "4 x 50 kick @ :20 rest",
            total: 200,
            notes: "Your legs will probably be tired after the 25s, try to maintain some form and hold a steady pace on these"
          }
        ]
      },
      {
        title: "Set 3",
        workouts: [
          {
            title: "300 swim straight",
            total: 300
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "100 choice",
            total: 100
          }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Leafy Seadragon",
    level: "Intermediate",
    total: 1150,
    subSections: [
      {
        title: "Warmup",
        workouts: [
          {
            title: "2 x 75 swim @ :15 rest, nice and smooth, on middle 25 breathe only to weak side",
            total: 150
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "4 x 50 @ :10 rest, second 25 stroke",
            total: 200,
            notes: "ideally backstroke, which is a helpful stroke for orienting yourself and catching your breath during open water swims. Breaststroke is also good."
          }
        ]
      },
      {
        title: "Set 2",
        workouts: [
          {
            title: "4x100 @ 15 seconds rest, descending:",
            total: 400,
            notes: "No. 1 @ 70 percent effort, No. 2 @ 80 percent effort, No. 3 @ 90 percent effort, No. 4 @ 95 percent effort"
          }
        ]
      },
      {
        title: "Set 3",
        workouts: [
          {
            title: "200 easy pull with buoy (paddles optional), breathe every 3 (bi-lateral breathing)",
            total: 200
          }
        ]
      },
      {
        title: "Set 4",
        workouts: [
          {
            title: "4x25 @ :10 rest, sprint—>AS FAST AS YOU CAN GO",
            total: 100
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "100 easy",
            total: 100
          }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Lizard Island Octopus",
    level: "Intermediate",
    total: 1100,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "50 swim, 50 kick, 50 swim (swam as a 150)",
            total: 150
          }
        ]
      },
      {
        title: "Main Set",
        multiplier: 2,
        workouts: [
          {
            title: "100 smooth @ :20 rest",
            total: 100
          },
          {
            title: "100 negative split (second half faster than first) @ :30 rest",
            total: 100
          },
          {
            title: "100 smooth @ :20 rest",
            total: 100
          },
          {
            title: "100 FAST @ :30 rest",
            total: 100,
            notes: "Go right into the second round after you take :30 following the fast 100"
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "3 x 50 easy @ :20 rest",
            total: 150
          }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Juvenile Emperor Angelfish",
    level: "Advanced",
    total: 1900,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "200 swim",
            total: 200
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "4 x 100 alt free/IM @ b +25",
            total: 400
          }
        ]
      },
      {
        title: "Set 2",
        workouts: [
          {
            title: "1 x 150 free @ b +10",
            total: 150
          },
          {
            title: "2 x 50 stroke @ b +20",
            total: 100
          },
          {
            title: "2 x 150 free @ b +15",
            total: 300
          },
          {
            title: "4 x 50 stroke @ b +20",
            total: 200
          },
          {
            title: "1 x 150 free @ b +20",
            total: 150
          },
          {
            title: "6 x 50 stroke @ b +20",
            total: 300
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "100 easy",
            total: 100
          }
        ]
      }
    ]
  },
  {
    id: 13,
    name: "Anglerfish",
    level: "Advanced",
    total: 2000,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "200 swim",
            total: 200
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "4 x 50 kick @ kb",
            total: 200
          },
          {
            title: "6 x 50 reverse IM order @ b +15",
            total: 300
          }
        ]
      },
      {
        title: "Set 2",
        workouts: [
          {
            title: "3 x 100 free @ b",
            total: 300
          },
          {
            title: "200 IM @ b +30",
            total: 200
          },
          {
            title: "2 x 100 free @ b",
            total: 200
          },
          {
            title: "2 x 100 IM @ b +20",
            total: 200
          },
          {
            title: "1 x 100 free @ b",
            total: 100
          },
          {
            title: "4 x 50 IM order @ b +10",
            total: 200
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "100 easy",
            total: 100
          }
        ]
      }
    ]
  },
  {
    id: 14,
    name: "Sea Pen",
    level: "Advanced",
    total: 1800,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "300 swim",
            total: 300
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "2 x 300 @ b +30",
            total: 600
          },
          {
            title: ":30 rest",
            total: 0
          },
          {
            title: "2 x 200 @ b",
            total: 400
          },
          {
            title: ":30 rest",
            total: 0
          },
          {
            title: "4 x 100 @ b -5",
            total: 400
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "100 easy",
            total: 100
          }
        ]
      }
    ]
  },
  {
    id: 15,
    name: "Hairy Frogfish",
    level: "Intermediate",
    total: 1300,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "200 choice",
            total: 200
          }
        ]
      },
      {
        title: "Main Set",
        workouts: [
          {
            title: "3 x 300 free @ b —> Goal is to hold b -15",
            total: 900
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "200 easy",
            total: 200
          }
        ]
      }
    ]
  },
  {
    id: 16,
    name: "Clownfish",
    level: "Advanced",
    total: 2000,
    subSections: [
      {
        title: "Warm Up",
        workouts: [
          {
            title: "200 choice",
            total: 200
          },
          {
            title: "8 x 50 @ 10 seconds rest",
            total: 400,
            notes: "odds kick, evens swim"
          }
        ]
      },
      {
        title: "Set 1",
        workouts: [
          {
            title: "100 free @ b +5",
            total: 100
          },
          {
            title: "6 x 25 stroke @ :30 (or slower base if needed)",
            total: 150
          },
          {
            title: "100 free @ b+5",
            total: 100
          },
          {
            title: "6 x 50 stroke @ b+20",
            total: 300
          }
        ]
      },
      {
        title: "Set 2",
        workouts: [
          {
            title: "4 x 100 kick @ kb",
            total: 400
          },
          {
            title: "8 x 25 @ :30",
            total: 200,
            notes: "4x: 25 only two breaths, 25 half sprint half easy, 25 only 2 breaths, 25 half easy half sprint"
          }
        ]
      },
      {
        title: "Warm Down",
        workouts: [
          {
            title: "150 easy",
            total: 150
          }
        ]
      }
    ]
  }
])
