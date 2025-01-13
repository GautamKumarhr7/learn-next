'use client';

import { useState } from 'react';

const MessageButton = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="text-center">
      <button
        onClick={() => setMessage("Hi from Stuflo")}
        className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Click Me
      </button>
      {message && (
        <p className="mt-4 text-lg font-semibold text-gray-800">{message}</p>
      )}
    </div>
  );
};

export default MessageButton;
