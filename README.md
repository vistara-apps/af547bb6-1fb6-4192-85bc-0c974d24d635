# AlphaFlow AI - Base Mini App

AI-driven Onchain Wealth Management on Base & Farcaster

## Features

- 🤖 AI-powered portfolio recommendations
- 📊 Real-time portfolio monitoring
- 🔄 Instant rebalancing with gasless transactions
- 🌐 Cross-chain execution (Base + Solana)
- 👥 Social investing features
- 🎓 Educational content and rituals

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit for social features
- Tailwind CSS for styling
- TypeScript for type safety

## Base Mini App Integration

This app is designed to run as a Farcaster Mini App with full Base blockchain integration:

- Wallet connection via OnchainKit
- Basename identity resolution
- Gas-sponsored transactions
- Frame-based social interactions
- Push notifications for portfolio updates

## License

MIT
