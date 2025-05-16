import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp } from "lucide-react"

interface TrendingMarketProps {
  ticker: string
  outcome: string
  yesPrice: number
  noPrice: number
  volume: number
  expiresIn: string
}

export function TrendingMarket({ ticker, outcome, yesPrice, noPrice, volume, expiresIn }: TrendingMarketProps) {
  return (
    <Link href={`/markets/${ticker.toLowerCase()}`}>
      <Card className="transition-all hover:shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="font-bold text-primary">
                {ticker}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>{volume} SOL</span>
              </div>
            </div>
            <p className="text-sm font-medium">{outcome}</p>
            <div className="flex items-center justify-between">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded bg-green-500/10 px-2 py-1 text-green-600 dark:text-green-400">
                  Yes: {yesPrice} SOL
                </div>
                <div className="rounded bg-red-500/10 px-2 py-1 text-red-600 dark:text-red-400">No: {noPrice} SOL</div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{expiresIn}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

