"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Check, ExternalLink } from "lucide-react"
import Link from "next/link"

interface LearnMoreModalProps {
  children: React.ReactNode
}

export function LearnMoreModal({ children }: LearnMoreModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>About Prediksi.ai</DialogTitle>
          <DialogDescription>The decentralized prediction market for Indonesian stocks on Solana</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-[24px_1fr] items-start gap-4">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Real-time IDX Stock Predictions</h3>
              <p className="text-sm text-muted-foreground">
                Trade on the future price movements of Indonesian stocks with instant settlements
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[24px_1fr] items-start gap-4">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Powered by Solana</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy fast transactions and low fees on the Solana blockchain
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[24px_1fr] items-start gap-4">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">PREDIK Token Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Earn PREDIK tokens for participating in markets and governance
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[24px_1fr] items-start gap-4">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Mobile-First Experience</h3>
              <p className="text-sm text-muted-foreground">Optimized for mobile with Solana Mobile Stack integration</p>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-0">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <div className="flex gap-2">
            <Link href="/faq" onClick={() => setOpen(false)}>
              <Button variant="outline" className="flex items-center gap-1">
                <span>FAQ</span>
              </Button>
            </Link>
            <Link href="/markets" onClick={() => setOpen(false)}>
              <Button className="bg-[#00C897] hover:bg-[#00A77D] flex items-center gap-1">
                <span>Explore Markets</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

