import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-items-center min-h-screen sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl">Welcome to the JSS Super App</h1>
      <h2 className="text-lg">Click a feature below to get started</h2>
      <Link href="/search">JSS Search</Link>
      <Link href="/prompt-game">JSS Adventure Game</Link>
      <Link href="/aspect-ratio">JSS Aspect Ratio Calculator</Link>
    </div>
  );
}
