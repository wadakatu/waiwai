import React from 'react';
import KeyVisual from '@/app/ui/home/keyVisual';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="grid gap-4">
        <KeyVisual />
        <section></section>
      </div>
    </main>
  );
}
