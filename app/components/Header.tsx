'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { TrendingUp, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">AlphaFlow AI</h1>
              <p className="text-xs text-fg/60">Onchain Wealth Management</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-lg hover:bg-surface/50 transition-colors relative">
              <Bell className="w-5 h-5 text-fg/80" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
            </button>
            <ConnectWallet />
          </div>
        </div>
      </div>
    </header>
  );
}
