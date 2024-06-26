import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Bot = ({ darkMode }) => {
  const [level, setLevel] = useState(() => {
    // Retrieve level from local storage or set default value
    return parseInt(localStorage.getItem("level")) || 10;
  });

  // Update local storage whenever the level changes
  useEffect(() => {
    localStorage.setItem("level", level);
  }, [level]);

  const handleLevelChange = (event) => {
    setLevel(parseInt(event.target.value));
  };

  return (
    <div className="content">
      <div
        className="chess-area flex grid-cols-3 items-center justify-center"
        style={{ height: "87vh" }}
      >
        <div className="board-table col-span-2">
          <div id="board" className="board"></div>
        </div>
        <div>
          <div className="board-settings col-span-1 pt-5 mt-5">
            <div
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-bold text-xl mb-5`}
            >
              Select AI level
            </div>
            <div className="select-level">
              <div>
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="0"
                  max="21"
                  value={level}
                  onChange={handleLevelChange}
                  className="my-4"
                />
                <br></br>
                <label
                  htmlFor="vol"
                  className={`${darkMode ? "text-white" : "text-black"}`}
                >
                  Current Level : {level * 5 > 100 ? "100" : level * 5}
                </label>
              </div>
            </div>

            <div className="value hidden" id="game-difficulty-skill-value">
              {level}
            </div>

            <div className="flex sm:flex-row sm:justify-between m-5">
              <Link
                onClick={() =>
                  (window.location.href = window.location.pathname)
                }
                className="flex-col w-full mr-2 items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                New
              </Link>
              <Link
                to="/"
                className="flex-col w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </Link>
            </div>

            <div
              id="board-controls flex justify-content-center"
              className="controls text-red-500"
            >
              <div className="status">
                <span id="game-state" className="hidden"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
