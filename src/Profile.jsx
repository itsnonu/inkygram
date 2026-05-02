// Profile.jsx — Artist profile page. Reads handle from the URL and shows that artist's info + gallery.

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, AtSign, ArrowLeft } from 'lucide-react';
import { TATTOOS, ARTISTS, DEFAULT_ARTIST_HANDLE } from './data';

const Profile = () => {
  const { handle } = useParams();
  const artistHandle = handle || DEFAULT_ARTIST_HANDLE;
  const artist = ARTISTS[artistHandle];

  if (!artist) {
    return (
      <div className="bg-black min-h-full text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Artist not found</h2>
        <p className="text-gray-400 mb-4">We couldn't find a profile for "{handle}".</p>
        <Link to="/" className="text-blue-400 font-medium hover:underline">Back to Feed</Link>
      </div>
    );
  }

  const artistGallery = TATTOOS.filter(t => t.artistHandle === artistHandle);

  const isViewingOther = !!handle && handle !== DEFAULT_ARTIST_HANDLE;

  return (
    <div className="bg-black min-h-full text-white">
      {isViewingOther && (
        <header className="sticky top-0 bg-black/85 backdrop-blur border-b border-gray-800 px-4 py-3 z-30 flex items-center gap-3">
          <Link to="/" className="p-1 -ml-1 active:scale-90 transition-transform" aria-label="Back to Feed">
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-base font-semibold truncate">{artist.name}</h2>
        </header>
      )}

      <div className="p-4 flex items-center gap-4 border-b border-gray-800">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-700 shrink-0">
          <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold truncate">{artist.name}</h1>
          <p className="text-sm text-gray-400 font-medium">{artist.style} Artist</p>
          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
            <MapPin size={12} />
            {artist.location}
          </div>
        </div>
      </div>

      <div className="p-4 text-sm">
        <p className="mb-3 text-gray-200">{artist.bio}</p>
        <div className="flex items-center gap-2 text-blue-400 font-medium text-xs mb-4">
          <AtSign size={14} />
          <span>{artist.social}</span>
        </div>

        <div className="flex gap-2">
          <Link
            to="/messages"
            className="flex-1 bg-gray-800 text-white font-semibold text-center py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
          >
            Message
          </Link>
          <Link
            to="/booking"
            className="flex-1 bg-white text-black font-semibold text-center py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors shadow-sm"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="flex justify-center py-2 border-t border-gray-800">
        <div className="w-1/3 border-b-2 border-white" />
      </div>

      {artistGallery.length === 0 ? (
        <div className="text-center py-12 text-gray-500 text-sm">
          No posts yet.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-1 p-1">
          {artistGallery.map(item => (
            <div key={item.id} className="aspect-square bg-gray-900 overflow-hidden">
              <img
                src={item.url}
                alt={item.style}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
