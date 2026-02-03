import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/40 mt-20 pt-16 pb-8 px-8 md:px-16 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 pr-8">
          <h1 className="text-yellow-400 font-black text-2xl mb-4">MOVIEDB</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            The most comprehensive movie database distributed for cinema lovers.
            Discover curated lists, track your viewing progress, and dive deep
            into cinematic history.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm">
            Movies
          </h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="hover:text-yellow-500 cursor-pointer">
              Now Playing
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">Popular</li>
            <li className="hover:text-yellow-500 cursor-pointer">Top Rated</li>
            <li className="hover:text-yellow-500 cursor-pointer">Upcoming</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm">
            TV Shows
          </h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="hover:text-yellow-500 cursor-pointer">
              Airing Today
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">On TV</li>
            <li className="hover:text-yellow-500 cursor-pointer">Top Rated</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm">
            Community
          </h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="hover:text-yellow-500 cursor-pointer">
              Discussions
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Leaderboard
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">Contests</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-xs text-gray-600">
        <p>&copy; 2024 MovieDB. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
