"use client"

import { useEffect, useRef } from "react"

export default function WeightChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Sample data - weight over 30 days (around 165 lbs)
    const weights = Array.from({ length: 30 }, (_, i) => {
      // Generate weights that fluctuate around 165
      return 165 + (Math.random() * 2 - 1)
    })

    const dates = Array.from({ length: 30 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - (29 - i))
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    })

    // Chart dimensions
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Find min and max values for scaling
    const minWeight = Math.min(...weights) - 1
    const maxWeight = Math.max(...weights) + 1

    // Draw weight line
    ctx.beginPath()
    weights.forEach((weight, i) => {
      const x = padding + (i * chartWidth) / (weights.length - 1)
      const y = padding + chartHeight - ((weight - minWeight) / (maxWeight - minWeight)) * chartHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw points
    weights.forEach((weight, i) => {
      const x = padding + (i * chartWidth) / (weights.length - 1)
      const y = padding + chartHeight - ((weight - minWeight) / (maxWeight - minWeight)) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()
    })

    // Draw target weight line
    const targetY = padding + chartHeight - ((165 - minWeight) / (maxWeight - minWeight)) * chartHeight
    ctx.beginPath()
    ctx.moveTo(padding, targetY)
    ctx.lineTo(canvas.width - padding, targetY)
    ctx.strokeStyle = "#10b981"
    ctx.setLineDash([5, 5])
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.setLineDash([])

    // Draw y-axis labels
    ctx.fillStyle = "#64748b"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    const yLabels = [minWeight, (minWeight + maxWeight) / 2, maxWeight]
    yLabels.forEach((label) => {
      const y = padding + chartHeight - ((label - minWeight) / (maxWeight - minWeight)) * chartHeight
      ctx.fillText(`${label.toFixed(1)} lbs`, padding - 5, y)
    })

    // Draw x-axis labels (every 5 days)
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    for (let i = 0; i < dates.length; i += 5) {
      const x = padding + (i * chartWidth) / (dates.length - 1)
      ctx.fillText(dates[i], x, canvas.height - padding + 5)
    }

    // Draw target weight label
    ctx.fillStyle = "#10b981"
    ctx.textAlign = "left"
    ctx.textBaseline = "bottom"
    ctx.fillText("Target: 165 lbs", padding + 5, targetY - 5)
  }, [])

  return (
    <div className="h-[300px] w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
