import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600"><span role="img" aria-label="authentication">🔑</span> {isLogin ? 'Login' : 'Signup'}</h2>
        {isLogin ? <Login toggleView={toggleView} /> : <Signup toggleView={toggleView} />}
      </div>
    </div>
  );
}

export default App;
