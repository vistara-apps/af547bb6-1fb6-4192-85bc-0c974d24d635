'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart, Activity } from 'lucide-react';

interface PortfolioStats {
  totalValue: number;
  change24h: number;
  changePercent: number;
}

export function PortfolioDashboard() {
  const [stats] = useState<PortfolioStats>({
    totalValue: 125847.32,
    change24h: 3456.78,
    changePercent: 2.82,
  });

  const holdings = [
    { name: 'Ethereum', symbol: 'ETH', value: 45230.12, allocation: 36, change: 3.2 },
    { name: 'Bitcoin', symbol: 'BTC', value: 38450.67, allocation: 31, change: 1.8 },
    { name: 'Solana', symbol: 'SOL', value: 22134.89, allocation: 18, change: 5.4 },
    { name: 'Base Assets', symbol: 'BASE', value: 12031.64, allocation: 10, change: -0.5 },
    { name: 'Stablecoins', symbol: 'USDC', value: 8000.00, allocation: 5, change: 0.0 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Portfolio Value Card */}
      <div className="glass rounded-lg p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-fg/60 mb-1">Total Portfolio Value</p>
            <h2 className="text-4xl font-bold text-fg">
              ${stats.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h2>
          </div>
          <div className="p-3 rounded-lg bg-success/10">
            <DollarSign className="w-6 h-6 text-success" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {stats.changePercent >= 0 ? (
              <TrendingUp className="w-5 h-5 text-success" />
            ) : (
              <TrendingDown className="w-5 h-5 text-danger" />
            )}
            <span className={`text-lg font-semibold ${stats.changePercent >= 0 ? 'text-success' : 'text-danger'}`}>
              {stats.changePercent >= 0 ? '+' : ''}{stats.changePercent}%
            </span>
          </div>
          <span className="text-sm text-fg/60">
            {stats.change24h >= 0 ? '+' : ''}${Math.abs(stats.change24h).toLocaleString('en-US', { minimumFractionDigits: 2 })} (24h)
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="glass rounded-lg p-4 hover:bg-surface/50 transition-all duration-200 group">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <Activity className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-fg">Rebalance</p>
              <p className="text-xs text-fg/60">AI-optimized</p>
            </div>
          </div>
        </button>

        <button className="glass rounded-lg p-4 hover:bg-surface/50 transition-all duration-200 group">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
              <PieChart className="w-5 h-5 text-success" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-fg">Analytics</p>
              <p className="text-xs text-fg/60">Deep insights</p>
            </div>
          </div>
        </button>
      </div>

      {/* Holdings List */}
      <div className="glass rounded-lg p-6">
        <h3 className="text-lg font-semibold text-fg mb-4">Your Holdings</h3>
        <div className="space-y-3">
          {holdings.map((holding, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-surface/30 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">{holding.symbol.slice(0, 2)}</span>
                </div>
                <div>
                  <p className="font-semibold text-fg">{holding.name}</p>
                  <p className="text-xs text-fg/60">{holding.allocation}% allocation</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-fg">
                  ${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className={`text-xs ${holding.change >= 0 ? 'text-success' : 'text-danger'}`}>
                  {holding.change >= 0 ? '+' : ''}{holding.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
