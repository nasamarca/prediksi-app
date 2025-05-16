import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PortfolioPosition } from "@/components/portfolio-position"
import { ResolvedMarket } from "@/components/resolved-market"
import { Download } from "lucide-react"
import { ActionModal } from "@/components/action-modal"

export default function Portfolio() {
  return (
    <div className="container py-6 md:py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <ActionModal
          title="Export Trading History"
          description="Download your complete trading history as a CSV file"
          actionText="Export"
          successText="Your trading history has been exported successfully"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export History</span>
          </Button>
        </ActionModal>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="active">Active Positions</TabsTrigger>
              <TabsTrigger value="resolved">Resolved Markets</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="mt-0">
              <div className="grid gap-4">
                <PortfolioPosition
                  ticker="BBRI"
                  outcome="Price > Rp6,000 by Apr 30"
                  invested={2}
                  currentValue={2.5}
                  position="Yes"
                  expiresIn="2d 5h"
                />
                <PortfolioPosition
                  ticker="BBCA"
                  outcome="Price > Rp10,000 by May 1"
                  invested={1.5}
                  currentValue={1.2}
                  position="Yes"
                  expiresIn="6d 8h"
                />
                <PortfolioPosition
                  ticker="TLKM"
                  outcome="Price < Rp4,000 by May 15"
                  invested={0.5}
                  currentValue={0.8}
                  position="No"
                  expiresIn="5d 12h"
                />
              </div>
            </TabsContent>
            <TabsContent value="resolved" className="mt-0">
              <div className="grid gap-4">
                <ResolvedMarket
                  ticker="UNVR"
                  outcome="Price < Rp3,800 by Mar 20"
                  invested={1}
                  payout={1.8}
                  position="Yes"
                  result="Won"
                  date="Mar 20, 2025"
                />
                <ResolvedMarket
                  ticker="BMRI"
                  outcome="Price > Rp5,200 by Mar 15"
                  invested={0.5}
                  payout={0}
                  position="Yes"
                  result="Lost"
                  date="Mar 15, 2025"
                />
                <ResolvedMarket
                  ticker="ASII"
                  outcome="Price < Rp6,500 by Mar 10"
                  invested={1.2}
                  payout={2.1}
                  position="No"
                  result="Won"
                  date="Mar 10, 2025"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>PREDIK Token</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Balance</span>
                  <span className="text-xl font-bold">500 PREDIK</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Value</span>
                  <span className="font-medium">≈ 0.5 SOL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Staked</span>
                  <span className="font-medium">0 PREDIK</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ActionModal
                  title="Buy PREDIK Tokens"
                  description="Purchase PREDIK tokens using SOL"
                  actionText="Buy"
                  successText="Your purchase was successful"
                >
                  <Button variant="outline">Buy PREDIK</Button>
                </ActionModal>
                <ActionModal
                  title="Stake PREDIK Tokens"
                  description="Stake your PREDIK tokens to earn rewards"
                  actionText="Stake"
                  successText="Your tokens have been staked successfully"
                >
                  <Button className="bg-[#00C897] hover:bg-[#00A77D]">Stake</Button>
                </ActionModal>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

