'use client';

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <h2 className="text-xl font-semibold text-fg">Loading AlphaFlow AI</h2>
        <p className="text-sm text-fg/60">Preparing your wealth dashboard...</p>
      </div>
    </div>
  );
}
