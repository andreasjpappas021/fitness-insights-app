import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpFromLine,
  Calendar,
  ChevronUp,
  Dumbbell,
  Heart,
  LineChart,
  Utensils,
} from "lucide-react"
import Link from "next/link"
import WeightChart from "@/components/weight-chart"
import MoodTracker from "@/components/mood-tracker"
import RecommendationCard from "@/components/recommendation-card"
import HealthDataImport from "@/components/health-data-import"
import WorkoutHistory from "@/components/workout-history"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-lg font-semibold">HealthSync</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Calendar className="mr-2 h-4 w-4" />
            Today
          </Button>
          <Button size="sm" className="hidden md:flex">
            <ArrowUpFromLine className="mr-2 h-4 w-4" />
            Import Health Data
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
              <Dumbbell className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">165 lbs</div>
              <p className="text-xs text-gray-500">Target: 165 lbs</p>
              <div className="mt-2 flex items-center text-xs text-green-500">
                <ChevronUp className="h-4 w-4" />
                <span>On target</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Calories</CardTitle>
              <LineChart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">450</div>
              <p className="text-xs text-gray-500">Daily average</p>
              <div className="mt-2 flex items-center text-xs text-green-500">
                <ChevronUp className="h-4 w-4" />
                <span>+12% from last week</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Workouts</CardTitle>
              <Dumbbell className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-500">This week</p>
              <div className="mt-2 flex items-center text-xs text-amber-500">
                <ChevronUp className="h-4 w-4" />
                <span>1 more recommended</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Mood</CardTitle>
              <Heart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Good</div>
              <p className="text-xs text-gray-500">Today's mood</p>
              <div className="mt-2 flex items-center text-xs text-green-500">
                <ChevronUp className="h-4 w-4" />
                <span>Consistent this week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="meals">Meals</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Weight Trend</CardTitle>
                  <CardDescription>Your weight over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <WeightChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Today's Mood</CardTitle>
                  <CardDescription>How are you feeling today?</CardDescription>
                </CardHeader>
                <CardContent>
                  <MoodTracker />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>Based on your recent activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RecommendationCard
                    title="Workout Recommended"
                    description="You haven't worked out in 2 days. Consider a moderate workout tomorrow."
                    icon={<Dumbbell className="h-5 w-5" />}
                    actionText="View Workout Plans"
                    actionLink="/workouts"
                  />
                  <RecommendationCard
                    title="Nutrition Tip"
                    description="Your protein intake has been below target. Consider adding more protein to your breakfast."
                    icon={<Utensils className="h-5 w-5" />}
                    actionText="View Meal Plans"
                    actionLink="/meals"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Import Health Data</CardTitle>
                  <CardDescription>Sync with Apple HealthKit</CardDescription>
                </CardHeader>
                <CardContent>
                  <HealthDataImport />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="meals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Meal Tracking</CardTitle>
                <CardDescription>Manage your meal templates and daily intake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Link href="/meals/breakfast" className="group block space-y-2 rounded-lg border p-4 hover:bg-gray-50">
                      <div className="font-medium">Breakfast</div>
                      <div className="text-sm text-gray-500">Oatmeal with fruit and nuts</div>
                    </Link>
                    <Link href="/meals/lunch" className="group block space-y-2 rounded-lg border p-4 hover:bg-gray-50">
                      <div className="font-medium">Lunch</div>
                      <div className="text-sm text-gray-500">Chicken salad with avocado</div>
                    </Link>
                    <Link href="/meals/dinner" className="group block space-y-2 rounded-lg border p-4 hover:bg-gray-50">
                      <div className="font-medium">Dinner</div>
                      <div className="text-sm text-gray-500">Salmon with vegetables</div>
                    </Link>
                  </div>
                  <Button className="w-full">Add New Meal Template</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workouts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Workout Schedule</CardTitle>
                <CardDescription>Recommended workout days based on your goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-7">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div
                      key={day}
                      className={`rounded-lg border p-3 text-center ${
                        i === 1 || i === 3 || i === 5 ? "bg-green-50 border-green-200" : ""
                      }`}
                    >
                      <div className="font-medium">{day}</div>
                      {i === 1 || i === 3 || i === 5 ? (
                        <div className="mt-2 text-xs text-green-600">Workout</div>
                      ) : (
                        <div className="mt-2 text-xs text-gray-500">Rest</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ✅ Supabase workout list */}
            <WorkoutHistory />
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Weight Management Insights</CardTitle>
                <CardDescription>Personalized recommendations to maintain 165 lbs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="font-medium text-blue-700">Calorie Adjustment</div>
                    <p className="mt-1 text-sm text-blue-600">
                      Based on your recent workouts, you can consume an additional 300 calories today while maintaining your weight goal.
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4">
                    <div className="font-medium text-amber-700">Activity Reminder</div>
                    <p className="mt-1 text-sm text-amber-600">
                      You've been less active in the past 3 days. Consider a light workout today or watching your calorie intake.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
