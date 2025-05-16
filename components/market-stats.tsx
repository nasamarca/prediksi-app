import { BarChart3, Clock, Users, Wifi } from "lucide-react"

interface MarketStatsProps {
  volume: number
  users: number
  oracleStatus: string
  expiresIn: string
}

export function MarketStats({ volume, users, oracleStatus, expiresIn }: MarketStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
        <BarChart3 className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Volume</span>
        <span className="font-medium">{volume} SOL</span>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
        <Users className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Users</span>
        <span className="font-medium">{users}</span>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
        <Wifi className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Oracle</span>
        <span className="font-medium">{oracleStatus}</span>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
        <Clock className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Expires In</span>
        <span className="font-medium">{expiresIn}</span>
      </div>
    </div>
  )
}

