import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 mb-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          My Portfolio
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="#profile" className="text-gray-700 hover:text-blue-600 transition-colors">
                Profile
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">
                Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 