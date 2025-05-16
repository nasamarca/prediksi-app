import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

interface ResolvedMarketProps {
  ticker: string
  outcome: string
  invested: number
  payout: number
  position: "Yes" | "No"
  result: "Won" | "Lost"
  date: string
}

export function ResolvedMarket({ ticker, outcome, invested, payout, position, result, date }: ResolvedMarketProps) {
  const profit = payout - invested
  const isWon = result === "Won"

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
              <Badge
                variant="outline"
                className={
                  isWon
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : "bg-red-500/10 text-red-600 dark:text-red-400"
                }
              >
                {result}
              </Badge>
            </div>
            <p className="text-sm">{outcome}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3" />
              <span>Resolved on {date}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-lg font-bold">{isWon ? `+${profit.toFixed(1)} SOL` : "0 SOL"}</div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-muted-foreground">Invested:</span>
              <span>{invested} SOL</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-muted-foreground">Payout:</span>
              <span>{payout} SOL</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

