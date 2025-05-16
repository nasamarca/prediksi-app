"use client"

import { useEffect, useRef } from "react"

interface PriceChartProps {
  isYesNoChart?: boolean
}

export function PriceChart({ isYesNoChart = false }: PriceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Generate random data
    const dataPoints = 30
    const data = Array.from({ length: dataPoints }, () => Math.random() * 0.2 + (isYesNoChart ? 0.4 : 9000))

    // If it's a Yes/No chart, add a second line
    const data2 = isYesNoChart ? Array.from({ length: dataPoints }, (_, i) => 1 - data[i]) : null

    // Chart dimensions
    const padding = 40
    const chartWidth = rect.width - padding * 2
    const chartHeight = rect.height - padding * 2

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, rect.height - padding)
    ctx.lineTo(rect.width - padding, rect.height - padding)
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.setLineDash([5, 5])
    for (let i = 1; i < gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      ctx.moveTo(padding, y)
      ctx.lineTo(rect.width - padding, y)
    }
    ctx.stroke()
    ctx.setLineDash([])

    // Calculate min and max values
    const minValue = isYesNoChart ? 0 : Math.min(...data) * 0.9
    const maxValue = isYesNoChart ? 1 : Math.max(...data) * 1.1

    // Draw y-axis labels
    ctx.fillStyle = "#64748b"
    ctx.font = "12px Inter, sans-serif"
    ctx.textAlign = "right"
    for (let i = 0; i <= gridLines; i++) {
      const value = minValue + ((maxValue - minValue) / gridLines) * i
      const y = rect.height - padding - (chartHeight / gridLines) * i
      ctx.fillText(isYesNoChart ? `${(value * 100).toFixed(0)}%` : `Rp${value.toFixed(0)}`, padding - 10, y + 4)
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    const today = new Date()
    for (let i = 0; i < 3; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - (2 - i) * 10)
      const x = padding + (chartWidth / 2) * i
      ctx.fillText(`${date.getDate()}/${date.getMonth() + 1}`, x, rect.height - padding + 20)
    }

    // Draw line for data
    ctx.beginPath()
    ctx.strokeStyle = isYesNoChart ? "#22c55e" : "#3b82f6"
    ctx.lineWidth = 2
    for (let i = 0; i < dataPoints; i++) {
      const x = padding + (chartWidth / (dataPoints - 1)) * i
      const y = rect.height - padding - ((data[i] - minValue) / (maxValue - minValue)) * chartHeight
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // Draw area under the line
    ctx.lineTo(padding + chartWidth, rect.height - padding)
    ctx.lineTo(padding, rect.height - padding)
    ctx.closePath()
    ctx.fillStyle = isYesNoChart ? "rgba(34, 197, 94, 0.1)" : "rgba(59, 130, 246, 0.1)"
    ctx.fill()

    // Draw second line for No price if it's a Yes/No chart
    if (isYesNoChart && data2) {
      ctx.beginPath()
      ctx.strokeStyle = "#ef4444"
      ctx.lineWidth = 2
      for (let i = 0; i < dataPoints; i++) {
        const x = padding + (chartWidth / (dataPoints - 1)) * i
        const y = rect.height - padding - ((data2[i] - minValue) / (maxValue - minValue)) * chartHeight
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()
    }

    // Draw legend if it's a Yes/No chart
    if (isYesNoChart) {
      const legendX = rect.width - padding - 100
      const legendY = padding + 20

      // Yes legend
      ctx.beginPath()
      ctx.fillStyle = "#22c55e"
      ctx.rect(legendX, legendY, 12, 12)
      ctx.fill()
      ctx.fillStyle = "#64748b"
      ctx.textAlign = "left"
      ctx.fillText("Yes", legendX + 20, legendY + 10)

      // No legend
      ctx.beginPath()
      ctx.fillStyle = "#ef4444"
      ctx.rect(legendX, legendY + 20, 12, 12)
      ctx.fill()
      ctx.fillStyle = "#64748b"
      ctx.fillText("No", legendX + 20, legendY + 30)
    }
  }, [isYesNoChart])

  return (
    <div className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

