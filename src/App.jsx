// App.jsx — Root component. Sets up routing and the shared phone-shell layout with bottom nav.

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, MessageCircle, Bookmark, User, Calendar } from 'lucide-react';

import Feed from './Feed';
import Messages from './Messages';
import Inspiration from './Inspiration';
import Profile from './Profile';

const Booking = () => (
  <div className="flex flex-col items-center justify-center h-full text-gray-400 p-4">
    <h2 className="text-xl font-bold mb-2 text-white">Book a Session</h2>
    <p>Appointment form coming soon!</p>
  </div>
);

// Tabs shown in the bottom nav
const navItems = [
  { to: '/', label: 'Feed', Icon: Home },
  { to: '/messages', label: 'Messages', Icon: MessageCircle },
  { to: '/booking', label: 'Booking', Icon: Calendar },
  { to: '/profile', label: 'Profile', Icon: User },
  { to: '/inspiration', label: 'Saved', Icon: Bookmark },
];

function App() {
  return (
    // Router enables client side navigation
    <Router>
      {}
      <div className="fixed inset-0 bg-black flex justify-center items-center sm:p-4 z-0">

        {}
        <div className="relative w-full max-w-md bg-[#0b0d12] h-full sm:h-[90vh] sm:rounded-3xl overflow-hidden shadow-2xl border-gray-800 sm:border">

          {}
          <div className="w-full h-full overflow-y-auto no-scrollbar pb-20">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:handle" element={<Profile />} />
            </Routes>
          </div>

          
          <nav
            className="absolute bottom-0 left-0 right-0 h-16 bg-black/85 backdrop-blur-md border-t border-gray-800 flex justify-around items-center z-40"
            aria-label="Primary"
          >
            {navItems.map(({ to, label, Icon }) => (
              
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                title={label}
                className={({ isActive }) =>
                  `flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
                    isActive
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                <Icon size={22} />
              </NavLink>
            ))}
          </nav>

        </div>
      </div>
    </Router>
  );
}

export default App;
