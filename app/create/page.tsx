"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CreateMarket() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    stock: "",
    condition: "",
    threshold: "",
    expiration: "",
    time: "",
    liquidity: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/markets")
    }, 2000)
  }

  const isFormValid = () => {
    return (
      formData.stock &&
      formData.condition &&
      formData.threshold &&
      formData.expiration &&
      formData.time &&
      formData.liquidity
    )
  }

  return (
    <div className="container max-w-2xl py-6 md:py-8">
      <div className="mb-6">
        <Link
          href="/markets"
          className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Markets</span>
        </Link>
        <h1 className="text-2xl font-bold md:text-3xl">Create a Market</h1>
        <p className="text-muted-foreground">Propose a new prediction market for the community</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Market Details</CardTitle>
          <CardDescription>Define the stock, outcome, and expiration for your prediction market</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock Ticker</Label>
              <Select onValueChange={(value) => handleChange("stock", value)}>
                <SelectTrigger id="stock">
                  <SelectValue placeholder="Select a stock" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BBRI">BBRI - Bank Rakyat Indonesia</SelectItem>
                  <SelectItem value="BBCA">BBCA - Bank Central Asia</SelectItem>
                  <SelectItem value="TLKM">TLKM - Telkom Indonesia</SelectItem>
                  <SelectItem value="ASII">ASII - Astra International</SelectItem>
                  <SelectItem value="UNVR">UNVR - Unilever Indonesia</SelectItem>
                  <SelectItem value="BMRI">BMRI - Bank Mandiri</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Outcome Type</Label>
              <RadioGroup defaultValue="binary" className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="binary" id="binary" />
                  <Label htmlFor="binary" className="font-normal">
                    Binary (Yes/No)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="range" id="range" disabled />
                  <Label htmlFor="range" className="font-normal text-muted-foreground">
                    Range (Coming soon)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <Select onValueChange={(value) => handleChange("condition", value)}>
                  <SelectTrigger id="condition">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="greater">Price greater than</SelectItem>
                    <SelectItem value="less">Price less than</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="threshold">Threshold (Rp)</Label>
                <Input
                  id="threshold"
                  type="number"
                  placeholder="e.g., 5000"
                  onChange={(e) => handleChange("threshold", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="expiration">Expiration Date</Label>
                <Input id="expiration" type="date" onChange={(e) => handleChange("expiration", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Expiration Time</Label>
                <Input id="time" type="time" onChange={(e) => handleChange("time", e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="liquidity">Initial Liquidity (SOL)</Label>
              <Input
                id="liquidity"
                type="number"
                min="1"
                placeholder="Min. 1 SOL"
                onChange={(e) => handleChange("liquidity", e.target.value)}
              />
              <p className="text-xs text-muted-foreground">You must provide initial liquidity to create a market</p>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">Creation Fee</span>
                <span>$3 in PREDIK</span>
              </div>
              <p className="text-xs text-muted-foreground">This fee helps prevent spam and rewards PREDIK stakers</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00C897] hover:bg-[#00A77D]"
              disabled={isSubmitting || !isFormValid()}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Market"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

