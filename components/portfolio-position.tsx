import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, Clock } from "lucide-react"

interface PortfolioPositionProps {
  ticker: string
  outcome: string
  invested: number
  currentValue: number
  position: "Yes" | "No"
  expiresIn: string
}

export function PortfolioPosition({
  ticker,
  outcome,
  invested,
  currentValue,
  position,
  expiresIn,
}: PortfolioPositionProps) {
  const profit = currentValue - invested
  const profitPercentage = ((profit / invested) * 100).toFixed(1)
  const isProfitable = profit > 0

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-bold text-primary">
                {ticker}
              </Badge>
              <Badge
                variant="outline"
                className={
                  position === "Yes"
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : "bg-red-500/10 text-red-600 dark:text-red-400"
                }
              >
                {position}
              </Badge>
            </div>
            <p className="text-sm">{outcome}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Expires in {expiresIn}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-lg font-bold">{currentValue} SOL</div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-muted-foreground">Invested:</span>
              <span>{invested} SOL</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${isProfitable ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
            >
              {isProfitable ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              <span>
                {isProfitable ? "+" : ""}
                {profit.toFixed(1)} SOL ({isProfitable ? "+" : ""}
                {profitPercentage}%)
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

