"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Copy, QrCode } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QRCodeModal } from "@/components/qr-code-modal"
import { ActionModal } from "@/components/action-modal"

export default function Profile() {
  const walletAddress = "8zJ4d7LGsTELFzn6jKHq3bgBPdQKTAp1TJ4t5sMJgfjz"

  return (
    <div className="container py-6 md:py-8">
      <h1 className="mb-6 text-3xl font-bold">Profile</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="wallet" className="w-full">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="wallet" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">SOL Balance</span>
                      <span className="text-xl font-bold">5.2 SOL</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">PREDIK Balance</span>
                      <span className="text-xl font-bold">500 PREDIK</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-muted-foreground">Wallet Address</span>
                      <div className="flex items-center gap-2 rounded-lg border p-2">
                        <code className="flex-1 overflow-hidden text-ellipsis text-xs">{walletAddress}</code>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => navigator.clipboard.writeText(walletAddress)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <QRCodeModal walletAddress={walletAddress}>
                      <Button variant="outline" className="flex items-center gap-2">
                        <QrCode className="h-4 w-4" />
                        <span>Show QR Code</span>
                      </Button>
                    </QRCodeModal>
                    <ActionModal
                      title="Add SOL to Wallet"
                      description="Add SOL to your wallet from an exchange or another wallet"
                      actionText="Add SOL"
                      successText="SOL has been added to your wallet"
                    >
                      <Button className="bg-[#00C897] hover:bg-[#00A77D]">Add SOL</Button>
                    </ActionModal>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="badges" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Your Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500 dark:bg-green-900/20">
                        🏆
                      </div>
                      <span className="text-center font-medium">First Win</span>
                      <span className="text-center text-xs text-muted-foreground">Won your first prediction</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900/20">
                        🔮
                      </div>
                      <span className="text-center font-medium">Market Creator</span>
                      <span className="text-center text-xs text-muted-foreground">Created your first market</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-4 opacity-50">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">🚀</div>
                      <span className="text-center font-medium">10 Wins</span>
                      <span className="text-center text-xs text-muted-foreground">Win 10 predictions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Preferences</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="language">Language</Label>
                          <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                        </div>
                        <Select>
                          <SelectTrigger id="language" className="w-[180px]">
                            <SelectValue placeholder="English" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="id">Bahasa Indonesia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="dark-mode">Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Toggle dark mode on or off</p>
                        </div>
                        <Switch id="dark-mode" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-medium">Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="market-updates">Market Updates</Label>
                          <p className="text-sm text-muted-foreground">Get notified about market changes</p>
                        </div>
                        <Switch id="market-updates" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="trade-confirmations">Trade Confirmations</Label>
                          <p className="text-sm text-muted-foreground">Receive trade confirmation notifications</p>
                        </div>
                        <Switch id="trade-confirmations" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Trading Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Trades</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Win Rate</span>
                  <span className="font-medium">67%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Markets Created</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Profit</span>
                  <span className="font-medium text-green-500">+2.4 SOL</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

