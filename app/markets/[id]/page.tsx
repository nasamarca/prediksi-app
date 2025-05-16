"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { PriceChart } from "@/components/price-chart"
import { MarketStats } from "@/components/market-stats"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { TradeModal } from "@/components/trade-modal"

export default function MarketDetail({ params }: { params: { id: string } }) {
  const [amount, setAmount] = useState<number>(0)
  const [position, setPosition] = useState<"Yes" | "No" | null>(null)
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false)

  // This would be fetched from an API based on the ID
  const market = {
    id: params.id,
    ticker: params.id.toUpperCase(),
    name: getStockName(params.id.toUpperCase()),
    outcome: `Will ${params.id.toUpperCase()} > Rp10,000 by May 1?`,
    yesPrice: 0.7,
    noPrice: 0.3,
    volume: 50,
    users: 120,
    oracleStatus: "Live",
    expiresIn: "6d 8h",
  }

  function getStockName(ticker: string) {
    const stockNames: Record<string, string> = {
      BBRI: "Bank Rakyat Indonesia",
      TLKM: "Telkom Indonesia",
      ASII: "Astra International",
      BBCA: "Bank Central Asia",
      UNVR: "Unilever Indonesia",
      BMRI: "Bank Mandiri",
    }
    return stockNames[ticker] || "Unknown Stock"
  }

  const handleTrade = (selectedPosition: "Yes" | "No") => {
    setPosition(selectedPosition)
  }

  const handleConfirmTrade = () => {
    if (amount > 0 && position) {
      setIsTradeModalOpen(true)
    }
  }

  return (
    <div className="container py-6 md:py-8">
      <div className="mb-6">
        <Link
          href="/markets"
          className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Markets</span>
        </Link>
        <h1 className="text-2xl font-bold md:text-3xl">{market.outcome}</h1>
        <p className="text-muted-foreground">
          {market.ticker} • {market.name}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="price">
                <TabsList className="mb-4">
                  <TabsTrigger value="price">Price Chart</TabsTrigger>
                  <TabsTrigger value="yes-no">Yes/No Trend</TabsTrigger>
                </TabsList>
                <TabsContent value="price" className="h-[300px]">
                  <PriceChart />
                </TabsContent>
                <TabsContent value="yes-no" className="h-[300px]">
                  <PriceChart isYesNoChart />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-6">
            <MarketStats
              volume={market.volume}
              users={market.users}
              oracleStatus={market.oracleStatus}
              expiresIn={market.expiresIn}
            />
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium">Trade</h3>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className={`border-2 border-green-500 ${position === "Yes" ? "bg-green-500/20" : "bg-green-500/10 hover:bg-green-500/20"}`}
                  onClick={() => handleTrade("Yes")}
                >
                  Yes ({market.yesPrice} SOL)
                </Button>
                <Button
                  variant="outline"
                  className={`border-2 border-red-500 ${position === "No" ? "bg-red-500/20" : "bg-red-500/10 hover:bg-red-500/20"}`}
                  onClick={() => handleTrade("No")}
                >
                  No ({market.noPrice} SOL)
                </Button>
              </div>
              <div className="mb-4 space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Amount (SOL)
                </label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.0"
                  value={amount || ""}
                  onChange={(e) => setAmount(Number.parseFloat(e.target.value) || 0)}
                  min={0.1}
                  max={10}
                  step={0.1}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Min: 0.1 SOL</span>
                  <span>Max: 10 SOL</span>
                </div>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm">Slippage Tolerance</span>
                <span className="text-sm font-medium">1%</span>
              </div>
              <Button
                className="w-full bg-[#00C897] hover:bg-[#00A77D]"
                onClick={handleConfirmTrade}
                disabled={!position || amount <= 0}
              >
                Confirm Trade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {position && (
        <TradeModal
          isOpen={isTradeModalOpen}
          onClose={() => setIsTradeModalOpen(false)}
          position={position}
          amount={amount}
          ticker={market.ticker}
        />
      )}
    </div>
  )
}

