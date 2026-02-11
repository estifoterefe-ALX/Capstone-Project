import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black/40 mt-20 pt-16 pb-8 px-8 md:px-16 border-t border-gray-300 dark:border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 pr-8">
          <h1 className="text-yellow-500 dark:text-yellow-400 font-black text-2xl mb-4">
            MOVIEDB
          </h1>
          <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
            The most comprehensive movie database distributed for cinema lovers.
            Discover curated lists, track your viewing progress, and dive deep
            into cinematic history.
          </p>
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm">
            Movies
          </h4>
          <ul className="text-gray-600 dark:text-gray-500 text-sm space-y-2">
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Now Playing
            </li>
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Popular
            </li>
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Top Rated
            </li>
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Upcoming
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm">
            TV Shows
          </h4>
          <ul className="text-gray-600 dark:text-gray-500 text-sm space-y-2">
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Airing Today
            </li>
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              On TV
            </li>
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Top Rated
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm">
            Community
          </h4>
          <ul className="text-gray-600 dark:text-gray-500 text-sm space-y-2">
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Discussions
            </li>
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Leaderboard
            </li>
            <li className="hover:text-yellow-600 dark:hover:text-yellow-500 cursor-pointer transition-colors">
              Contests
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-800 pt-8 flex justify-between items-center text-xs text-gray-500 dark:text-gray-600">
        <p>&copy; 2024 MovieDB. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer transition-colors">
            Terms of Use
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
