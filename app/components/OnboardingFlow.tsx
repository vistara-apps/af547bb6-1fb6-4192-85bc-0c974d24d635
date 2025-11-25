'use client';

import { useState } from 'react';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Wealth Management',
      description: 'Get personalized investment strategies powered by advanced AI algorithms and real-time market analysis.',
    },
    {
      icon: Shield,
      title: 'Secure & Transparent',
      description: 'Your assets are protected by Base blockchain security with full transparency and control over your portfolio.',
    },
    {
      icon: Zap,
      title: 'Instant Execution',
      description: 'Execute rebalancing strategies instantly with gasless transactions and cross-chain asset management.',
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem('alphaflow_onboarded', 'true');
      onComplete();
    }
  };

  const CurrentIcon = steps[step].icon;

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <CurrentIcon className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl font-bold gradient-text mb-3">
            {steps[step].title}
          </h2>
          <p className="text-fg/70 text-lg">
            {steps[step].description}
          </p>
        </div>

        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === step ? 'w-8 bg-accent' : 'w-2 bg-surface'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full px-6 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group"
        >
          <span>{step < steps.length - 1 ? 'Continue' : 'Get Started'}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="w-full text-fg/60 hover:text-fg transition-colors text-sm"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
