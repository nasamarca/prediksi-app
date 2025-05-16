"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface TradeModalProps {
  isOpen: boolean
  onClose: () => void
  position: "Yes" | "No"
  amount: number
  ticker: string
}

export function TradeModal({ isOpen, onClose, position, amount, ticker }: TradeModalProps) {
  const router = useRouter()
  const [status, setStatus] = useState<"confirming" | "processing" | "success" | "error">("confirming")

  const handleConfirm = () => {
    setStatus("processing")
    // Simulate transaction processing
    setTimeout(() => {
      // 90% chance of success
      if (Math.random() < 0.9) {
        setStatus("success")
        setTimeout(() => {
          onClose()
          router.push("/portfolio")
        }, 2000)
      } else {
        setStatus("error")
      }
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {status === "confirming" && "Confirm Trade"}
            {status === "processing" && "Processing Transaction"}
            {status === "success" && "Trade Successful"}
            {status === "error" && "Transaction Failed"}
          </DialogTitle>
          <DialogDescription>
            {status === "confirming" && `You are about to place a trade on ${ticker}`}
            {status === "processing" && "Please wait while we process your transaction"}
            {status === "success" && "Your trade has been successfully placed"}
            {status === "error" && "There was an error processing your transaction"}
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          {status === "confirming" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">Position</div>
                <div className={`text-right font-medium ${position === "Yes" ? "text-green-600" : "text-red-600"}`}>
                  {position}
                </div>
                <div className="text-sm text-muted-foreground">Amount</div>
                <div className="text-right font-medium">{amount} SOL</div>
                <div className="text-sm text-muted-foreground">Ticker</div>
                <div className="text-right font-medium">{ticker}</div>
                <div className="text-sm text-muted-foreground">Network Fee</div>
                <div className="text-right text-sm">~0.000005 SOL</div>
              </div>
            </div>
          )}

          {status === "processing" && (
            <div className="flex flex-col items-center justify-center py-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Please wait while we process your transaction. This may take a few seconds.
              </p>
            </div>
          )}

          {status === "success" && (
            <div className="flex flex-col items-center justify-center py-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Your trade has been successfully placed. You can view it in your portfolio.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="flex flex-col items-center justify-center py-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                There was an error processing your transaction. Please try again.
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          {status === "confirming" && (
            <>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleConfirm} className="bg-[#00C897] hover:bg-[#00A77D]">
                Confirm Trade
              </Button>
            </>
          )}

          {status === "processing" && (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </Button>
          )}

          {status === "success" && (
            <Button
              onClick={() => {
                onClose()
                router.push("/portfolio")
              }}
              className="bg-[#00C897] hover:bg-[#00A77D]"
            >
              View Portfolio
            </Button>
          )}

          {status === "error" && (
            <>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleConfirm} className="bg-[#00C897] hover:bg-[#00A77D]">
                Try Again
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

