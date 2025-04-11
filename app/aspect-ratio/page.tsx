'use client';
import { useState } from 'react';
import findClosestAspectRatio from '../utils/findClosestAspectRatio';

const exampleRatios = [
  [1, 1],
  [16, 9],
  [21, 9],
  [3, 2],
  [2, 3],
  [4, 5],
  [5, 4],
  [3, 4],
  [4, 3],
  [9, 16],
  [9, 21],
];

export default function AspectRatio() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [ratio, setRatio] = useState<number[]>([]);

  const handleClick = async () => {
    const answer = findClosestAspectRatio(Number(width), Number(height));
    setRatio(answer);
  };

  return (
    <div>
      <h1>Enter Width and Height below to find out Aspect Ratio</h1>
      <p>Your answer will closest to one of the following ratios</p>
      <ul>
        {exampleRatios.map((exampleRatio, index) => (
          <li key={index}>{`[${exampleRatio[0]}, ${exampleRatio[1]}]`}</li>
        ))}
      </ul>
      <input
        placeholder="Enter Width Here"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      ></input>
      <input
        placeholder="Enter Height Here"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      ></input>
      <button className="outline-sky-300 outline-2" onClick={handleClick}>
        Calculate
      </button>
      <p>Find Ratio Below</p>
      {ratio.length
        ? `[${ratio[0]}, ${ratio[1]}]`
        : 'Enter Width and Height above'}
    </div>
  );
}
