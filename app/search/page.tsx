'use client';
import { useState } from 'react';

interface SearchResult {
  title: string;
  url: URL;
  description: string;
  content: string;
  site_name: string;
  site_long_name: string;
  age: string;
  language: string;
  is_safe: string;
  favicon: URL;
  thumbnail: URL;
  snippets: string[];
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleClick = async () => {
    const response = await fetch('/api/search', {
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
      <h1>Welcome to JSS Search</h1>

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
          {results.map((result: SearchResult, index) => (
            <div key={index}>
              <li>
                <p>{result.snippets}</p>
                <p>
                  Source:{' '}
                  <a href={result.url.toString()} target="_blank">{result.url.toString()}</a>
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
