"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpFromLine, Check, Loader2 } from "lucide-react"

export default function HealthDataImport() {
  const [importing, setImporting] = useState(false)
  const [imported, setImported] = useState(false)

  const handleImport = async () => {
    setImporting(true)

    // Simulate API call to import health data
    // In a real app, this would connect to Apple HealthKit API
    setTimeout(() => {
      setImporting(false)
      setImported(true)

      // Reset the imported state after 3 seconds
      setTimeout(() => {
        setImported(false)
      }, 3000)
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Import your workout data from Apple HealthKit to get personalized recommendations.
      </p>

      <Button onClick={handleImport} className="w-full" disabled={importing}>
        {importing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Importing...
          </>
        ) : imported ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Data Imported
          </>
        ) : (
          <>
            <ArrowUpFromLine className="mr-2 h-4 w-4" />
            Import Health Data
          </>
        )}
      </Button>

      <div className="text-xs text-gray-500">Last synced: Today at 10:15 AM</div>
    </div>
  )
}
