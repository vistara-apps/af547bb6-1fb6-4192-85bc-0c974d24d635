'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
  confidence: number;
  action: string;
}

export function AIRecommendations() {
  const [recommendations] = useState<Recommendation[]>([
    {
      id: '1',
      title: 'Increase Solana Exposure',
      description: 'Based on recent market trends and your risk profile, increasing SOL allocation by 5% could optimize returns.',
      impact: '+2.3% projected annual return',
      confidence: 87,
      action: 'Rebalance Now',
    },
    {
      id: '2',
      title: 'Diversify into Real Assets',
      description: 'Consider adding tokenized real estate to reduce volatility and provide stable income streams.',
      impact: '-15% portfolio volatility',
      confidence: 92,
      action: 'Explore Options',
    },
    {
      id: '3',
      title: 'Harvest Tax Losses',
      description: 'Optimize your tax position by strategically selling underperforming assets and reinvesting.',
      impact: '$1,234 tax savings',
      confidence: 78,
      action: 'Review Strategy',
    },
  ]);

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-fg">AI Recommendations</h3>
        </div>
        <button className="text-sm text-accent hover:text-accent/80 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec) => (
          <div key={rec.id} className="glass rounded-lg p-5 hover:bg-surface/50 transition-all duration-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-fg mb-1">{rec.title}</h4>
                <p className="text-sm text-fg/70 mb-2">{rec.description}</p>
                <div className="flex items-center space-x-4 text-xs">
                  <span className="text-success flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{rec.impact}</span>
                  </span>
                  <span className="text-fg/60">
                    {rec.confidence}% confidence
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full mt-3 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 group">
              <span>{rec.action}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
