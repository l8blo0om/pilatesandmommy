'use client';

import { useEffect, useState } from 'react';

// Reads the public visit total from GoatCounter (already tracking this site).
// Renders nothing until the count loads, so it never shows a broken state.
export default function VisitCounter() {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://pilatesandmommy.goatcounter.com/counter/TOTAL.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.count) setCount(data.count);
      })
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <p className="text-xs text-gray-300" title="Total site visits">
      {count} visits
    </p>
  );
}
