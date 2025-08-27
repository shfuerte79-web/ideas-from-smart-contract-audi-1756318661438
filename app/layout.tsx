import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Interactive Smart Contract Training Bot",
    "one_liner": "Train developers using interactive AI simulations of smart contract vulnerabilities.",
    "why_now": "With the rise of Web3, educating developers about security in a hands-on manner is timely and essential.",
    "novel_mechanism": "Uses gamified learning with real-time feedback on coding practices through AI.",
    "ai_stack": [
      "Claude/GPT",
      "Agents",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Onboarding junior developers",
      "Simulating auditing scenarios",
      "Training workshops with automation"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Gamified training module",
        "Basic vulnerability scenarios",
        "User progress tracking"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "Stripe",
        "Unity for simulation"
      ],
      "data_bootstrap": [
        "public datasets of smart contract vulnerabilities",
        "synthetic scenarios via LLM"
      ],
      "risk": [
        "Low user engagement",
        "Misinterpretation of AI feedback"
      ],
      "mitigation": [
        "User incentives and gamification",
        "Expert-reviewed content"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Engaging workshop demo",
        "FREE initial training session"
      ],
      "channels": [
        "ProductHunt",
        "Discord",
        "Web3 developer forums"
      ],
      "pricing": {
        "free": "First training module",
        "pro": "$19/month",
        "business": "$199/year"
      }
    },
    "moat": [
      "Learning network effect",
      "Initial content library exclusivity",
      "Partnership with coding bootcamps"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "This AI product is distinct as it not only identifies vulnerabilities but also actively trains users, reducing the chance of clones succeeding."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}