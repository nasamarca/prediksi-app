import { Users, BarChart3, Wallet } from "lucide-react"

interface StatsBarProps {
  tvl: string
  activeUsers: string
  totalTrades: string
}

export function StatsBar({ tvl, activeUsers, totalTrades }: StatsBarProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Wallet className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Value Locked</p>
          <p className="font-bold">{tvl}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Active Users</p>
          <p className="font-bold">{activeUsers}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <BarChart3 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Trades</p>
          <p className="font-bold">{totalTrades}</p>
        </div>
      </div>
    </div>
  )
}

