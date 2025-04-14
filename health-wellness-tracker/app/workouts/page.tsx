import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell, Plus } from "lucide-react"
import Link from "next/link"

export default function WorkoutsPage() {
  const workouts = [
    {
      id: "1",
      name: "Morning Run",
      type: "Cardio",
      duration: "30 min",
      calories: 320,
      lastCompleted: "2 days ago",
    },
    {
      id: "2",
      name: "Full Body Strength",
      type: "Strength",
      duration: "45 min",
      calories: 380,
      lastCompleted: "4 days ago",
    },
    {
      id: "3",
      name: "Yoga Flow",
      type: "Flexibility",
      duration: "40 min",
      calories: 220,
      lastCompleted: "1 week ago",
    },
    {
      id: "4",
      name: "HIIT Session",
      type: "Cardio",
      duration: "25 min",
      calories: 300,
      lastCompleted: "3 days ago",
    },
  ]

  const recommendedDays = [1, 3, 5] // Monday, Wednesday, Friday (0-indexed)

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-rose-500" />
          <span className="text-lg font-semibold">Workout Planner</span>
        </Link>
        <div className="ml-auto">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Log Workout
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
            <CardDescription>Recommended workout days based on your goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-7">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                <div
                  key={day}
                  className={`rounded-lg border p-3 text-center ${
                    recommendedDays.includes(i) ? "bg-green-50 border-green-200" : ""
                  }`}
                >
                  <div className="font-medium">{day}</div>
                  {recommendedDays.includes(i) ? (
                    <div className="mt-2 text-xs text-green-600">Workout</div>
                  ) : (
                    <div className="mt-2 text-xs text-gray-500">Rest</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workouts.map((workout) => (
            <Card key={workout.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base">{workout.name}</CardTitle>
                  <Badge variant="outline">{workout.type}</Badge>
                </div>
                <CardDescription>Last completed: {workout.lastCompleted}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Dumbbell className="h-4 w-4 text-gray-500" />
                    <span>{workout.calories} cal</span>
                  </div>
                </div>
                <Button className="mt-4 w-full">Start Workout</Button>
              </CardContent>
            </Card>
          ))}
          <Card className="flex flex-col items-center justify-center p-6">
            <Plus className="h-8 w-8 text-gray-400" />
            <h3 className="mt-2 font-medium">Add New Workout</h3>
            <p className="mt-1 text-center text-sm text-gray-500">Create a custom workout routine</p>
            <Button className="mt-4">Create Workout</Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
