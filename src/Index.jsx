import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const fakeApps = [
  { id: 1, name: 'Content Writing', likes: 0 },
  { id: 2, name: 'SEO Research', likes: 0 },
  { id: 3, name: 'Text to Image Apps', likes: 0 },
  { id: 4, name: 'Text to Speech Apps', likes: 0 },
  { id: 5, name: 'Text to Video Apps', likes: 0 },
  { id: 6, name: 'Music Apps', likes: 0 },
];

const App = () => {
  const [apps, setApps] = useState(fakeApps);

  const handleLike = (id) => {
    setApps(apps.map(app => app.id === id ? { ...app, likes: app.likes + 1 } : app));
  };

  return (
    <div className="bg-black min-h-screen text-white font-spartan">
      <header className="bg-black text-white p-4 border-b-2 border-blue-500">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">AI Software Directory</h1>
          <div>
            <button className="bg-black text-white border-2 border-purple-500 rounded-full px-4 py-2 mx-2 shadow-lg">Sign Up</button>
            <button className="bg-black text-white border-2 border-purple-500 rounded-full px-4 py-2 mx-2 shadow-lg">Sign In</button>
          </div>
        </nav>
      </header>
      <main className="p-8">
        <button className="bg-black text-white border-2 border-purple-500 rounded-full px-6 py-3 mb-8 shadow-lg text-2xl">Add My App</button>
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full p-4 rounded-full text-black"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.sort((a, b) => b.likes - a.likes).map(app => (
            <div key={app.id} className="bg-black border-2 border-purple-500 rounded-2xl p-6 shadow-lg relative box-style">
              <h2 className="text-xl font-bold mb-4">{app.name}</h2>
              <button 
                className="absolute bottom-4 right-4 text-purple-500 hover:text-purple-300 transition-transform transform hover:scale-125"
                onClick={() => handleLike(app.id)}
              >
                <FaHeart /> {app.likes}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;