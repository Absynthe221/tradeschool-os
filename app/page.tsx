import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { TradeModules } from '@/components/home/TradeModules'
import { Stats } from '@/components/home/Stats'
import { CTA } from '@/components/home/CTA'

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Features />
      <TradeModules />
      <Stats />
      <CTA />
    </div>
  )
}

