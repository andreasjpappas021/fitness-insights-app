import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Utensils, Dumbbell, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <LineChart className="h-6 w-6 text-rose-500" />
          <span className="text-lg font-semibold">Health Insights</span>
        </Link>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Weight Management</CardTitle>
            <CardDescription>Personalized insights to maintain your target weight of 165 lbs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="font-medium text-blue-700">Weekly Summary</div>
              <p className="mt-1 text-sm text-blue-600">
                Your weight has been stable this week. You've maintained an average of 165.2 lbs, which is right on
                target.
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-4">
              <div className="font-medium text-green-700">Calorie Budget</div>
              <p className="mt-1 text-sm text-green-600">
                Based on your recent activity level, your daily calorie budget is 2,450 calories to maintain your
                current weight.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-medium text-green-700">2,450</div>
                  <div className="text-green-600">calories/day</div>
                </div>
                <Button variant="outline" size="sm" className="text-green-700 border-green-200 hover:bg-green-100">
                  Adjust Budget
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 p-4">
              <div className="font-medium text-amber-700">Activity Recommendation</div>
              <p className="mt-1 text-sm text-amber-600">
                You've been less active in the past 3 days. Consider a light workout today or watching your calorie
                intake.
              </p>
              <div className="mt-3">
                <Button variant="outline" size="sm" className="text-amber-700 border-amber-200 hover:bg-amber-100">
                  View Workout Options
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Nutrition Insights</CardTitle>
              <CardDescription>Analysis of your eating patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                  <Utensils className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Protein Intake</h4>
                  <p className="text-sm text-gray-500">
                    Your protein intake has been below target (averaging 0.6g/lb vs. recommended 0.8g/lb). Consider
                    adding more protein-rich foods to your breakfast and lunch.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-blue-600">
                    View Protein-Rich Foods <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-50 p-2 text-green-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Meal Timing</h4>
                  <p className="text-sm text-gray-500">
                    You tend to eat dinner late (after 8pm) on weekdays. Consider having dinner earlier to improve sleep
                    quality and metabolism.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workout Insights</CardTitle>
              <CardDescription>Analysis of your exercise patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-purple-50 p-2 text-purple-600">
                  <Dumbbell className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Workout Consistency</h4>
                  <p className="text-sm text-gray-500">
                    You've been consistent with 3 workouts per week. This is a good frequency for maintaining your
                    current weight.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-rose-50 p-2 text-rose-600">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Intensity Distribution</h4>
                  <p className="text-sm text-gray-500">
                    Your workouts are primarily moderate intensity. Consider adding one high-intensity session per week
                    for improved cardiovascular health.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-rose-600">
                    View HIIT Workouts <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
