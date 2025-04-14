'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function WorkoutHistory() {
  const [workouts, setWorkouts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const USER_ID = "32daf91d-404e-42b8-8130-e4833589f1ea" // Replace with a real UUID

  useEffect(() => {
    const fetchWorkouts = async () => {
      const { data, error } = await supabase
        .from("workouts")
        .select("*")
        .eq("user_id", USER_ID)
        .order("start_time", { ascending: false })

      if (error) console.error("Error fetching workouts:", error)
      setWorkouts(data || [])
      setLoading(false)
    }

    fetchWorkouts()
  }, [])

  if (loading) return <p>Loading workouts...</p>
  if (!workouts.length) return <p>No workouts found.</p>

  return (
    <ul className="space-y-4 mt-4">
      {workouts.map((w) => (
        <li key={w.id} className="border rounded p-4 shadow-sm">
          <div className="font-medium">{w.workout_type}</div>
          <div>{w.duration} min • {w.calories} cal</div>
          <div className="text-xs text-gray-500">
            {new Date(w.start_time).toLocaleString()}
          </div>
        </li>
      ))}
    </ul>
  )
}
