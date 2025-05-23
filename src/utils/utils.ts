import { type WholeWorkout } from '../store/workouts.ts'

export function calculateTotal(workout: WholeWorkout): number {
  let total = 0
  for (const subworkout of workout.subSections) {
    const multiplier = subworkout.multiplier ? subworkout.multiplier : 1
    console.log("multiplier ", multiplier)
    let subTotal = 0
    for (const exercise of subworkout.workouts) {
      subTotal = subTotal + exercise.total
    }
    total = total + (subTotal * multiplier)
  }
  return total
}
