// Feed.jsx — Home screen. Lists tattoo posts, lets users filter, like, save, and tap an artist to view their profile.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, Send } from 'lucide-react';
import { TATTOOS, ARTISTS } from './data';

const Feed = () => {
  // State: which filter is active, which posts are liked/saved
  const [filter, setFilter] = useState('All');
  const [likedIds, setLikedIds] = useState([]);
  const [savedIds, setSavedIds] = useState([]);

  const styles = ['All', 'Black and Gray', 'Patchwork', 'Japanese'];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('inkygram_saved')) || [];
    setSavedIds(saved.map(t => t.id));
  }, []);

  // Apply the style filter
  const filteredTattoos = filter === 'All'
    ? TATTOOS
    : TATTOOS.filter(t => t.style === filter);

  const toggleLike = (id) => {
    setLikedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleSave = (tattoo) => {
    const saved = JSON.parse(localStorage.getItem('inkygram_saved')) || [];
    const exists = saved.find(t => t.id === tattoo.id);
    const updated = exists
      ? saved.filter(t => t.id !== tattoo.id)
      : [...saved, tattoo];
    localStorage.setItem('inkygram_saved', JSON.stringify(updated));
    setSavedIds(updated.map(t => t.id));
  };

  const formatCount = (n) => (n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n);

  return (
    <div className="bg-black min-h-full">
      <header className="sticky top-0 bg-black/85 backdrop-blur border-b border-gray-800 px-4 py-3 z-30">
        <h1 className="text-2xl font-extrabold text-white italic tracking-tighter">Inkygram</h1>
      </header>

      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar border-b border-gray-900">
        {styles.map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              filter === s ? 'bg-white text-black' : 'bg-gray-800 text-gray-200'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="px-3 py-4 space-y-5">
        {filteredTattoos.map(tattoo => {
          const artist = ARTISTS[tattoo.artistHandle];
          const isLiked = likedIds.includes(tattoo.id);
          const isSaved = savedIds.includes(tattoo.id);
          const likeCount = tattoo.likes + (isLiked ? 1 : 0);

          return (
            <article
              key={tattoo.id}
              className="rounded-2xl overflow-hidden bg-[#15181f] border border-gray-800 shadow-lg shadow-black/40"
            >
              <div className="relative aspect-[4/5] bg-gray-900">
                <img
                  src={tattoo.url}
                  alt={tattoo.style}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-4 py-3 flex items-center gap-5 border-t border-gray-800">
                <button
                  onClick={() => toggleLike(tattoo.id)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-gray-100 active:scale-95 transition-transform"
                  aria-label="Like"
                >
                  <Heart
                    size={22}
                    className={isLiked ? 'fill-red-500 text-red-500' : 'text-white'}
                  />
                  <span>{formatCount(likeCount)}</span>
                </button>

                <button
                  className="flex items-center gap-1.5 text-sm font-semibold text-gray-100 active:scale-95 transition-transform"
                  aria-label="Comment"
                >
                  <MessageCircle size={22} className="text-white" />
                  <span>{formatCount(tattoo.comments)}</span>
                </button>

                <button
                  onClick={() => toggleSave(tattoo)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-gray-100 active:scale-95 transition-transform"
                  aria-label="Save to Inspiration Board"
                >
                  <Bookmark
                    size={22}
                    className={isSaved ? 'fill-yellow-400 text-yellow-400' : 'text-white'}
                  />
                  <span>{isSaved ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-gray-100 active:scale-95 transition-transform"
                  aria-label="Share"
                >
                  <Send size={22} className="text-white" />
                </button>
              </div>

              <div className="px-4 py-3 border-t border-gray-800 bg-[#10131a]">
                <Link
                  to={`/profile/${tattoo.artistHandle}`}
                  className="flex items-center gap-2 mb-1 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 border border-gray-600 shrink-0">
                    {artist?.avatar && (
                      <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">
                    {artist?.name ?? tattoo.artistHandle}
                  </h3>
                </Link>
                <p className="text-xs text-gray-400 ml-10">
                  Tagged under <span className="font-semibold text-gray-200">#{tattoo.style.replace(/\s+/g, '')}</span>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
