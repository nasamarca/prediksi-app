import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MarketCard } from "@/components/market-card"
import { Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

export default function MarketExplorer() {
  return (
    <div className="container py-6 md:py-8">
      <div className="mb-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Market Explorer</h1>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search by stock ticker or category..." className="pl-8" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Link href="/create">
            <Button className="bg-[#00C897] hover:bg-[#00A77D]">Create Market</Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4 w-full justify-start">
          <TabsTrigger value="all">All Markets</TabsTrigger>
          <TabsTrigger value="my">My Predictions</TabsTrigger>
          <TabsTrigger value="ending">Ending Soon</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MarketCard
              ticker="BBRI"
              name="Bank Rakyat Indonesia"
              outcome="Price > Rp6,000 by Apr 30"
              yesPrice={0.65}
              noPrice={0.35}
              volume={120}
              expiresIn="2d 5h"
            />
            <MarketCard
              ticker="TLKM"
              name="Telkom Indonesia"
              outcome="Price < Rp4,000 by May 15"
              yesPrice={0.2}
              noPrice={0.8}
              volume={85}
              expiresIn="5d 12h"
            />
            <MarketCard
              ticker="ASII"
              name="Astra International"
              outcome="Price > Rp7,000 by Apr 28"
              yesPrice={0.45}
              noPrice={0.55}
              volume={95}
              expiresIn="1d 18h"
            />
            <MarketCard
              ticker="BBCA"
              name="Bank Central Asia"
              outcome="Price > Rp10,000 by May 1"
              yesPrice={0.7}
              noPrice={0.3}
              volume={150}
              expiresIn="6d 8h"
            />
            <MarketCard
              ticker="UNVR"
              name="Unilever Indonesia"
              outcome="Price < Rp3,500 by May 10"
              yesPrice={0.55}
              noPrice={0.45}
              volume={75}
              expiresIn="10d 14h"
            />
            <MarketCard
              ticker="BMRI"
              name="Bank Mandiri"
              outcome="Price > Rp5,500 by Apr 25"
              yesPrice={0.4}
              noPrice={0.6}
              volume={110}
              expiresIn="1d 2h"
            />
          </div>
        </TabsContent>
        <TabsContent value="my" className="mt-0">
          <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
            <p className="text-center text-muted-foreground">Connect your wallet to view your predictions</p>
          </div>
        </TabsContent>
        <TabsContent value="ending" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MarketCard
              ticker="BMRI"
              name="Bank Mandiri"
              outcome="Price > Rp5,500 by Apr 25"
              yesPrice={0.4}
              noPrice={0.6}
              volume={110}
              expiresIn="1d 2h"
            />
            <MarketCard
              ticker="ASII"
              name="Astra International"
              outcome="Price > Rp7,000 by Apr 28"
              yesPrice={0.45}
              noPrice={0.55}
              volume={95}
              expiresIn="1d 18h"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

