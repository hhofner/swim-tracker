import { reactive } from 'vue'

export interface WholeWorkout {
  id: number
  title: string
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
    total: 0,
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
])
