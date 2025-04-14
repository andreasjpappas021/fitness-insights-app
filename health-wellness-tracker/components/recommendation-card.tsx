import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface RecommendationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  actionText: string
  actionLink: string
}

export default function RecommendationCard({
  title,
  description,
  icon,
  actionText,
  actionLink,
}: RecommendationCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-blue-50 p-2 text-blue-600">{icon}</div>
        <div className="flex-1 space-y-1">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
          <Button asChild variant="link" className="h-auto p-0 text-blue-600">
            <Link href={actionLink}>{actionText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
