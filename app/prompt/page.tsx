'use client';
import { useState } from 'react';

export default function AspectRatio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleClick = async () => {
    const response = await fetch('/api/prompt', {
      method: 'POST',
      body: JSON.stringify({
        searchTerm,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const searchResults = data.response.results;
    setResults((prev) => [...prev, ...searchResults]);
  };

  return (
    <div>
      <h1>Enter prompt below</h1>

      <input
        placeholder="enter search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button className="outline-sky-300 outline-2" onClick={handleClick}>
        Search
      </button>
      <p>Search and find results below</p>
      {results.length ? (
        <ul>
          {results.map((result, index) => (
            <div key={index}>
              <li>
                <p>{result.snippets}</p>
                <p>
                  Source:{' '}
                  <a href={result.url.toString()} target="_blank">
                    {result.url.toString()}
                  </a>
                </p>
              </li>
              <br></br>
            </div>
          ))}
        </ul>
      ) : (
        'Results will show here'
      )}
    </div>
  );
}
