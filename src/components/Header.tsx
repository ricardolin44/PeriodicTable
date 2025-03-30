'use client';

export default function Header() {
  return (
    <header className="bg-background-dark text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Periodic Table</h1>
          <span className="text-sm text-gray-400">Interactive Element Explorer</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-accent transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-accent transition-colors">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
