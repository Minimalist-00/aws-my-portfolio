export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-12 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-gray-500">
              © {currentYear} My Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 