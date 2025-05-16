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
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"

interface ActionModalProps {
  children: React.ReactNode
  title: string
  description: string
  actionText: string
  successText: string
}

export function ActionModal({ children, title, description, actionText, successText }: ActionModalProps) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  const handleAction = () => {
    setStatus("processing")
    // Simulate processing
    setTimeout(() => {
      // 90% chance of success
      if (Math.random() < 0.9) {
        setStatus("success")
        setTimeout(() => {
          setOpen(false)
          setStatus("idle")
        }, 2000)
      } else {
        setStatus("error")
      }
    }, 1500)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        if (!newOpen || status !== "processing") {
          setOpen(newOpen)
          if (!newOpen) setStatus("idle")
        }
      }}
    >
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {status === "idle" && title}
            {status === "processing" && "Processing"}
            {status === "success" && "Success"}
            {status === "error" && "Error"}
          </DialogTitle>
          <DialogDescription>
            {status === "idle" && description}
            {status === "processing" && "Please wait while we process your request"}
            {status === "success" && successText}
            {status === "error" && "There was an error processing your request"}
          </DialogDescription>
        </DialogHeader>

        {status === "processing" && (
          <div className="flex flex-col items-center justify-center py-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center justify-center py-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center justify-center py-4">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
        )}

        <DialogFooter>
          {status === "idle" && (
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAction} className="bg-[#00C897] hover:bg-[#00A77D]">
                {actionText}
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
                setOpen(false)
                setStatus("idle")
              }}
              className="bg-[#00C897] hover:bg-[#00A77D]"
            >
              Close
            </Button>
          )}

          {status === "error" && (
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAction} className="bg-[#00C897] hover:bg-[#00A77D]">
                Try Again
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

