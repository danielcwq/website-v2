export default function Sidebar() {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          {/* Add social media/profile links here */}
          <li>
            <a
              href="https://twitter.com"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Twitter
            </a>
          </li>
          {/* Repeat for other links */}
        </ul>
      </div>
    </aside>
  );
}
