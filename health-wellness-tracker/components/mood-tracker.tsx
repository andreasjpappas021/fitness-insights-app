"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Smile, Meh, Frown, Heart, ThumbsUp } from "lucide-react"

type Mood = "great" | "good" | "okay" | "bad" | "terrible"

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>("good")
  const [saved, setSaved] = useState(true)

  const moods: { value: Mood; label: string; icon: React.ReactNode; color: string }[] = [
    { value: "great", label: "Great", icon: <Heart className="h-6 w-6" />, color: "text-rose-500 hover:text-rose-600" },
    {
      value: "good",
      label: "Good",
      icon: <ThumbsUp className="h-6 w-6" />,
      color: "text-green-500 hover:text-green-600",
    },
    { value: "okay", label: "Okay", icon: <Smile className="h-6 w-6" />, color: "text-blue-500 hover:text-blue-600" },
    { value: "bad", label: "Bad", icon: <Meh className="h-6 w-6" />, color: "text-amber-500 hover:text-amber-600" },
    {
      value: "terrible",
      label: "Terrible",
      icon: <Frown className="h-6 w-6" />,
      color: "text-red-500 hover:text-red-600",
    },
  ]

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood)
    setSaved(false)
  }

  const saveMood = () => {
    // Here you would save the mood to your Supabase backend
    console.log("Saving mood:", selectedMood)
    setSaved(true)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => handleMoodSelect(mood.value)}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              selectedMood === mood.value ? `${mood.color} bg-gray-100` : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {mood.icon}
            <span className="text-xs mt-1">{mood.label}</span>
          </button>
        ))}
      </div>

      <Button onClick={saveMood} className="w-full" disabled={saved}>
        {saved ? "Mood Saved" : "Save Mood"}
      </Button>
    </div>
  )
}
