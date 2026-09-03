'use client';

import { useState } from 'react';

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('');

  const creators = [
    {
      id: '1',
      name: 'Sarah Jenkins',
      handle: '@sarah_postpartum_fit',
      city: 'Austin',
      state: 'TX',
      specialties: ['Postpartum', 'Rehab'],
      program: '8-Week Core Rehab'
    },
    {
      id: '2',
      name: 'Elena Rostova',
      handle: '@pcos_strength_coach',
      city: 'Chicago',
      state: 'IL',
      specialties: ['PCOS', 'Strength'],
      program: 'PCOS Friendly Resistance'
    }
  ];

  const filtered = creators.filter(c => 
    !searchLocation || c.city.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>FitDirectory</h1>
      <p>Find specialized fitness programs near you.</p>

      <input 
        type="text" 
        placeholder="Search by city (e.g. Austin)..." 
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1.5rem' }}
      />

      <div style={{ display: 'grid', gap: '1rem' }}>
        {filtered.map(c => (
          <div key={c.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>{c.name} ({c.handle})</h3>
            <p>📍 {c.city}, {c.state}</p>
            <p><strong>Program:</strong> {c.program}</p>
          </div>
        ))}
      </div>
    </main>
  );
}