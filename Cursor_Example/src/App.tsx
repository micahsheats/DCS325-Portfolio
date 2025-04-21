import React from "react";
import { SnakeGame } from "./components/SnakeGame";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <svg className="h-8 w-8" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
              </svg>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="nav-link">
                Store
              </a>
              <a href="#" className="nav-link">
                Mac
              </a>
              <a href="#" className="nav-link">
                AirPods
              </a>
              <a href="#" className="nav-link">
                Only On Apple
              </a>
              <a href="#" className="nav-link">
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Snake Game</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Experience the classic game with a modern twist
          </p>
        </div>
      </section>

      {/* Game Section */}
      <section className="relative w-full overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-purple-900/30"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <div className="aspect-square">
              <SnakeGame />
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-6">
                Use arrow keys to control the snake. Collect the red food to
                grow!
              </p>
              <div className="flex justify-center space-x-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  New Game
                </button>
                <button className="text-blue-500 px-8 py-3 rounded-full border border-blue-500 hover:bg-blue-500/10 transition-colors">
                  View Highscores
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
