import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container max-w-3xl py-6 md:py-8">
      <div className="mb-6">
        <Link href="/" className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers to common questions about Prediksi.ai</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Prediksi.ai?</AccordionTrigger>
          <AccordionContent>
            Prediksi.ai is a decentralized prediction market platform for Indonesian stocks built on the Solana
            blockchain. Users can trade on the future price movements of IDX stocks with real-time data and instant
            settlements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do prediction markets work?</AccordionTrigger>
          <AccordionContent>
            Prediction markets allow users to buy or sell shares based on the outcome of future events. On Prediksi.ai,
            you can take positions on whether a stock will reach a certain price by a specific date. If your prediction
            is correct, you earn a profit; if not, you lose your investment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What is the PREDIK token?</AccordionTrigger>
          <AccordionContent>
            PREDIK is the native utility token of the Prediksi.ai platform. It can be used for governance voting,
            creating markets, earning staking rewards, and accessing premium features. PREDIK holders also receive a
            portion of platform fees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How are markets resolved?</AccordionTrigger>
          <AccordionContent>
            Markets are resolved using price data from Pyth oracles, which provide real-time IDX stock prices. When a
            market expires, the smart contract automatically checks the final price against the prediction threshold and
            distributes rewards to winning participants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How do I connect my wallet?</AccordionTrigger>
          <AccordionContent>
            Click the "Connect Wallet" button in the top-right corner of the page. If you're using a mobile device with
            Solana Mobile Stack, the connection will be seamless. Otherwise, you can connect using browser extensions
            like Phantom or Solflare.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How do I create a market?</AccordionTrigger>
          <AccordionContent>
            To create a market, navigate to the Markets page and click "Create Market". Select a stock, define the
            outcome conditions, set an expiration date, and provide initial liquidity. You'll need to pay a small fee in
            PREDIK tokens to prevent spam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Is Prediksi.ai regulated?</AccordionTrigger>
          <AccordionContent>
            Prediksi.ai operates as a decentralized protocol on the Solana blockchain. While we strive to comply with
            applicable regulations, users should consult their local laws regarding prediction markets and
            cryptocurrency trading. Prediksi.ai is not available in jurisdictions where such activities are prohibited.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

