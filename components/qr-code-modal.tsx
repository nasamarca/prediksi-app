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
import { Copy } from "lucide-react"

interface QRCodeModalProps {
  children: React.ReactNode
  walletAddress: string
}

export function QRCodeModal({ children, walletAddress }: QRCodeModalProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Wallet QR Code</DialogTitle>
          <DialogDescription>Scan this QR code to send SOL or PREDIK tokens to your wallet</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-4">
          <div className="h-48 w-48 bg-white p-2">
            {/* This is a placeholder for a real QR code */}
            <div className="flex h-full w-full items-center justify-center bg-[#00C897]/10 text-[#00C897]">QR Code</div>
          </div>
          <div className="mt-4 flex w-full items-center gap-2 rounded-lg border p-2">
            <code className="flex-1 overflow-hidden text-ellipsis text-xs">{walletAddress}</code>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          {copied && <p className="mt-2 text-xs text-green-500">Address copied to clipboard!</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" className="w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

