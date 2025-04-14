import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Utensils } from "lucide-react"
import Link from "next/link"

export default function MealsPage() {
  const mealTemplates = [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Oatmeal with fruit and nuts",
      calories: 450,
      protein: 15,
      carbs: 65,
      fat: 12,
    },
    {
      id: "lunch",
      name: "Lunch",
      description: "Chicken salad with avocado",
      calories: 550,
      protein: 35,
      carbs: 25,
      fat: 30,
    },
    {
      id: "dinner",
      name: "Dinner",
      description: "Salmon with vegetables",
      calories: 650,
      protein: 40,
      carbs: 30,
      fat: 35,
    },
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-rose-500" />
          <span className="text-lg font-semibold">Meal Tracking</span>
        </Link>
        <div className="ml-auto">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add New Meal
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mealTemplates.map((meal) => (
            <Card key={meal.id}>
              <CardHeader>
                <CardTitle>{meal.name}</CardTitle>
                <CardDescription>{meal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div className="space-y-1">
                    <div className="font-medium">Calories</div>
                    <div>{meal.calories}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">Protein</div>
                    <div>{meal.protein}g</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">Carbs</div>
                    <div>{meal.carbs}g</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">Fat</div>
                    <div>{meal.fat}g</div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="default" size="sm">
                    Log Today
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="flex flex-col items-center justify-center p-6">
            <Plus className="h-8 w-8 text-gray-400" />
            <h3 className="mt-2 font-medium">Add New Meal Template</h3>
            <p className="mt-1 text-center text-sm text-gray-500">
              Create a new meal template to quickly log your meals
            </p>
            <Button className="mt-4">Create Template</Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
