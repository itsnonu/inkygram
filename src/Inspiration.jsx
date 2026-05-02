// Inspiration.jsx — "Saved" tab. Shows posts the user bookmarked from the feed (read from localStorage).

import React, { useEffect, useState } from 'react';

const Inspiration = () => {
  const [savedTattoos, setSavedTattoos] = useState([]);

  // Load saves from localStorage on mount (Feed.jsx is what writes to it)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('inkygram_saved')) || [];
    setSavedTattoos(saved);
  }, []);

  const removeSaved = (idToRemove) => {
    const updatedList = savedTattoos.filter(tattoo => tattoo.id !== idToRemove);
    setSavedTattoos(updatedList);
    localStorage.setItem('inkygram_saved', JSON.stringify(updatedList));
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <header className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
        <h1 className="text-xl font-bold">Inspiration Board</h1>
      </header>

      <div className="p-2">
        {savedTattoos.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
            <p className="text-lg font-medium">Your board is empty</p>
            <p className="text-sm">Save designs from the feed to see them here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-1">
            {savedTattoos.map((tattoo) => (
              <div key={tattoo.id} className="relative aspect-square">
                <img
                  src={tattoo.url}
                  className="w-full h-full object-cover rounded-sm"
                  alt={tattoo.style}
                />

                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] font-medium px-2 py-1 rounded">
                  {tattoo.style}
                </div>

                <button
                  onClick={() => removeSaved(tattoo.id)}
                  className="absolute top-2 right-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inspiration;
