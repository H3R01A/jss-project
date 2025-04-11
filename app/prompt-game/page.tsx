'use client';
import { useState, useRef } from 'react';

export default function AspectRatio() {
  const [playerLevel, setPlayerLevel] = useState('');
  const [playerWeapon, setPlayerWeapon] = useState('axe');
  const [playerWon, setPlayerWon] = useState(false);
  const [playerInput, setPlayerInput] = useState(false);


  const handleClick = async () => {
    const response = await fetch('/api/prompt', {
      method: 'POST',
      body: JSON.stringify({
        playerLevel,
        playerWeapon,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.canBeatYouWithLevel === "true" || data.canBeatYouWithSacredWeapon === "true") {
      console.log('player won');
      setPlayerWon(true);
    } else {
      console.log('player lost');
      setPlayerWon(false);
    }
    setPlayerInput(true);
  };

  return (
    <div>
      <h1>On your quest, you encounter a Minotaur</h1>
      <p>Enter your level and weapon to see if you can beat it</p>
      <input
        placeholder="Enter player level here"
        value={playerLevel}
        onChange={(e) => setPlayerLevel(e.target.value)}
      ></input>
      <select
        value={playerWeapon}
        onChange={(e) => setPlayerWeapon(e.target.value)}
      >
        <option value="axe">Axe</option>
        <option value="sword">Sword</option>
        <option value="sacred bow">Sacred Bow</option>
      </select>
      <button className="outline-sky-300 outline-2" onClick={handleClick}>
        Battle the Minotaur
      </button>
      {playerInput && (
        <p>
          {playerWon ? 'You won!' : 'You lost!'}
        </p>
      )}
    </div>
  );
}
