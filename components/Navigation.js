import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // Effect to apply the dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Effect to check for saved preference in localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);
  return (
    <div>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="md:hidden fixed top-4 left-4 z-20"
      >
        {/* SVG icon for the menu button */}
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 transform bg-white p-6 overflow-y-auto transition duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
      >
        <h3 className="font-semibold text-lg mb-2 hidden md:block">
          NAVIGATION
        </h3>
        <button
          className="p-2 rounded bg-gray-200 dark:bg-gray-600"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <ul className="space-y-1 mb-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/writing">Writing</Link>
          </li>
          <li>
            <Link href="/running">Running</Link>
          </li>
        </ul>
        <ul className="space-y-1 mb-5">
          <p className="font-bold">FIND ME ON</p>

          <li>
            <Link
              href="https://twitter.com/danielchingwq"
              className="hover:text-blue-600"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link href="https://danielching.medium.com">Medium</Link>
          </li>
          <li>
            <Link href="https://danielching.substack.com">Substack</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/danching">LinkedIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
