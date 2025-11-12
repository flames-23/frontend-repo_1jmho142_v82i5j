import React from 'react'
import Spline from '@splinetool/react-spline'
import { Star, BookOpen, Target, Rocket, Briefcase, CheckCircle2, Sparkles } from 'lucide-react'

function Tag({ children, color = 'bg-yellow-300 text-black' }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide inline-flex items-center gap-1 ${color} shadow-[2px_2px_0_0_#000]`}> 
      <Sparkles className="w-3 h-3" /> {children}
    </span>
  )
}

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 md:px-10 py-14">
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(#00000011_1px,transparent_1px)] [background-size:18px_18px]"></div>
      <div className="relative bg-white/80 backdrop-blur-sm border-2 border-black rounded-2xl p-6 md:p-8 shadow-[6px_6px_0_#000]">
        <div className="flex items-center gap-3 mb-5">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-black shadow-[3px_3px_0_#000]">
            {Icon ? <Icon className="text-white" /> : <Star className="text-white" />}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight">
            {title}
          </h2>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none prose-p:text-slate-800 prose-strong:text-black prose-li:marker:text-black">
          {children}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const palette = {
    blue: 'from-blue-500 to-blue-700',
    purple: 'from-purple-500 to-purple-700',
    yellow: 'from-yellow-300 to-yellow-400',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50 text-black">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/70 border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-black shadow-[3px_3px_0_#000]"></div>
            <div className="font-extrabold text-lg md:text-xl tracking-tight">Finance Pro India</div>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <a href="#welcome" className="font-semibold hover:underline">Welcome</a>
            <a href="#what" className="font-semibold hover:underline">What</a>
            <a href="#purpose" className="font-semibold hover:underline">Purpose</a>
            <a href="#steps" className="font-semibold hover:underline">Steps</a>
            <a href="#cases" className="font-semibold hover:underline">Case Studies</a>
            <a href="#scenarios" className="font-semibold hover:underline">Scenarios</a>
            <a href="#why" className="font-semibold hover:underline">Why</a>
            <a href="#summary" className="font-semibold hover:underline">End</a>
          </nav>
          <Tag>Comic Doodle Style</Tag>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-400 to-purple-500"></div>
          <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-yellow-300 to-purple-400"></div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-10 py-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <Tag color="bg-blue-500 text-white">Corporate Finance</Tag>
              <Tag color="bg-purple-600 text-white">India</Tag>
              <Tag color="bg-yellow-300 text-black">Quick Course</Tag>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Financial Management for Corporate Professionals in India
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-800">
              A visual, comic-book inspired guide to managing money, risk, and growth in modern Indian enterprises.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#steps" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black shadow-[4px_4px_0_#000] bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                <Rocket className="w-4 h-4" /> Start Learning
              </a>
              <a href="#cases" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-yellow-300 text-black font-bold shadow-[4px_4px_0_#000]">
                <BookOpen className="w-4 h-4" /> Explore Cases
              </a>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[520px] rounded-2xl border-2 border-black shadow-[8px_8px_0_#000] bg-white/60 overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/0"></div>
          </div>
        </div>
      </section>

      <Section id="welcome" title="Welcome!" icon={Star}>
        <p>
          Welcome to your fast, friendly intro to corporate financial management in India. Expect crisp concepts, practical tools, and a doodle-meets-comic aesthetic to keep things fun and memorable.
        </p>
      </Section>

      <Section id="what" title="What is Financial Management?" icon={BookOpen}>
        <p>
          Financial management is the planning, organizing, directing, and controlling of financial activities—like procurement and utilization of funds—within an enterprise. It balances three levers:
        </p>
        <ul>
          <li><strong>Liquidity</strong>: Enough cash to run operations smoothly.</li>
          <li><strong>Profitability</strong>: Generating sustainable returns.</li>
          <li><strong>Risk</strong>: Managing volatility in markets, credit, and operations.</li>
        </ul>
      </Section>

      <Section id="purpose" title="Purpose and Objectives" icon={Target}>
        <ul>
          <li>Optimize the <strong>cost of capital</strong> and maintain an ideal capital structure.</li>
          <li>Ensure <strong>adequate liquidity</strong> via cash flow forecasting and treasury policies.</li>
          <li>Maximize <strong>shareholder value</strong> through investment decisions and payouts.</li>
          <li>Strengthen <strong>risk management</strong> with robust governance and controls.</li>
          <li>Drive <strong>strategic growth</strong> through M&A, capex, and market expansion.</li>
        </ul>
      </Section>

      <Section id="steps" title="Steps and Goals to Achieve" icon={Rocket}>
        <ol>
          <li><strong>Diagnose</strong>: Assess working capital, leverage, margins, and ROCE.</li>
          <li><strong>Plan</strong>: Build rolling forecasts; align with strategy and board goals.</li>
          <li><strong>Fund</strong>: Choose mix of equity, debt, internal accruals, and subsidies.</li>
          <li><strong>Deploy</strong>: Prioritize projects using NPV/IRR, payback, and scenario tests.</li>
          <li><strong>Protect</strong>: Hedge FX/commodity exposures; implement credit policies.</li>
          <li><strong>Monitor</strong>: Variance analysis, covenant tracking, dashboards.</li>
          <li><strong>Communicate</strong>: Transparent investor relations and disclosures.</li>
        </ol>
        <p className="mt-4">
          Goalposts: positive free cash flow, healthy interest coverage, disciplined capex, and a consistent dividend or buyback policy aligned with growth.
        </p>
      </Section>

      <Section id="cases" title="Famous Case Study Style Examples (India)" icon={Briefcase}>
        <ul>
          <li><strong>Tata Motors & JLR</strong>: Post-acquisition liquidity crunch managed through refinancing, cost controls, and product-led growth—showing the power of cash discipline in turnarounds.</li>
          <li><strong>Hindustan Unilever</strong>: Benchmark in working capital efficiency—tight inventory cycles and distributor financing improved cash conversion.</li>
          <li><strong>Infosys</strong>: Conservative treasury with strong cash reserves enabling stable payouts and resilience during downturns.</li>
          <li><strong>Yes Bank Crisis (cautionary)</strong>: Highlights the need for robust risk governance and asset quality oversight.</li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">
          Illustrative summaries for learning; consult official reports for details.
        </p>
      </Section>

      <Section id="scenarios" title="Practical Scenarios" icon={BookOpen}>
        <ul>
          <li><strong>Rupee Depreciation</strong>: Exporter gains, importer hedges via forwards/options.</li>
          <li><strong>Commodity Spike</strong>: Use futures, pass-through clauses, or product mix shifts.</li>
          <li><strong>Tight Liquidity</strong>: Sale-and-leaseback, invoice discounting, short-term lines.</li>
          <li><strong>High Rates</strong>: Reprice debt, extend maturities, evaluate ECBs if viable.</li>
          <li><strong>Rapid Growth</strong>: Align capex with demand visibility; staggered rollouts.</li>
        </ul>
      </Section>

      <Section id="why" title="Why It Matters" icon={Target}>
        <p>
          Sound financial management lowers funding costs, increases strategic flexibility, and protects the company during shocks. It also improves valuation through steady free cash flows and credible governance—key for Indian public markets.
        </p>
      </Section>

      <Section id="summary" title="Summary & Thank You" icon={CheckCircle2}>
        <p>
          You covered the core: definitions, objectives, step-by-step execution, real-world case styles, and everyday scenarios.
        </p>
        <ul>
          <li>Keep dashboards simple and timely.</li>
          <li>Guard liquidity; growth follows discipline.</li>
          <li>Align funding choices with strategy and risk appetite.</li>
        </ul>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border-2 border-black bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[6px_6px_0_#000]">
            <div className="font-bold">Thanks for completing the course!</div>
            <div className="text-sm opacity-90">Share this with your team and put it into practice this quarter.</div>
          </div>
          <div className="p-4 rounded-xl border-2 border-black bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-[6px_6px_0_#000]">
            <div className="font-bold">End Note</div>
            <div className="text-sm opacity-90">Finance isn’t just numbers—it’s choices, timing, and clarity.</div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="w-full h-24 rounded-2xl border-2 border-black bg-gradient-to-r from-yellow-300 via-blue-500 to-purple-600 relative overflow-hidden shadow-[6px_6px_0_#000]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10px_10px,rgba(255,255,255,0.25)_2px,transparent_2px)] bg-[length:18px_18px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border-2 border-black font-bold">
                Built with a doodle + comic vibe in blue, purple, yellow, and black.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
