'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from './components/Header';
import { PortfolioDashboard } from './components/PortfolioDashboard';
import { AIRecommendations } from './components/AIRecommendations';
import { OnboardingFlow } from './components/OnboardingFlow';
import { LoadingScreen } from './components/LoadingScreen';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);

    // Simulate checking onboarding status
    setTimeout(() => {
      const onboarded = localStorage.getItem('alphaflow_onboarded');
      setHasOnboarded(!!onboarded);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!hasOnboarded) {
    return <OnboardingFlow onComplete={() => setHasOnboarded(true)} />;
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <PortfolioDashboard />
        <AIRecommendations />
      </div>
    </main>
  );
}
