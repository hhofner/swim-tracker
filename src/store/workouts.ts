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
  }
])
