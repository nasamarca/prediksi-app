import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingMarket } from "@/components/trending-market"
import { StatsBar } from "@/components/stats-bar"
import { WalletConnect } from "@/components/wallet-connect"
import { LearnMoreModal } from "@/components/learn-more-modal"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">Prediksi.lol</span>
            </Link>
          </div>
          <WalletConnect />
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Predict Indonesian Stocks on Solana
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Trade prediction markets for IDX stocks with real-time data and instant settlements.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/markets">
                  <Button size="lg" className="bg-[#00C897] hover:bg-[#00A77D]">
                    Get Started
                  </Button>
                </Link>
                <LearnMoreModal>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </LearnMoreModal>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Trending Markets</h3>
                      <Link href="/markets" className="text-sm text-primary hover:underline">
                        View All
                      </Link>
                    </div>
                    <div className="grid gap-4">
                      <TrendingMarket
                        ticker="BBRI"
                        outcome="Price > Rp6,000 by Apr 30"
                        yesPrice={0.65}
                        noPrice={0.35}
                        volume={120}
                        expiresIn="2d 5h"
                      />
                      <TrendingMarket
                        ticker="TLKM"
                        outcome="Price < Rp4,000 by May 15"
                        yesPrice={0.2}
                        noPrice={0.8}
                        volume={85}
                        expiresIn="5d 12h"
                      />
                      <TrendingMarket
                        ticker="ASII"
                        outcome="Price > Rp7,000 by Apr 28"
                        yesPrice={0.45}
                        noPrice={0.55}
                        volume={95}
                        expiresIn="1d 18h"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="border-t border-b bg-muted/40">
          <div className="container py-6">
            <StatsBar tvl="$1.5M" activeUsers="5k" totalTrades="10k" />
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link href="https://x.com/prediksi" className="hover:underline">
              X
            </Link>
            <Link href="https://t.me/prediksi" className="hover:underline">
              Telegram
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Prediksi.lol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

