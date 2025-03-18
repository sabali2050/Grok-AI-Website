
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Grok AI</h1>
        <p className="text-gray-700 mb-4">
          Grok AI is an advanced artificial intelligence platform designed to enhance learning, understanding, and problem-solving capabilities. It leverages machine learning and natural language processing to provide intuitive and effective solutions for users.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Why Grok AI?</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Boost productivity with intelligent insights.</li>
          <li>Streamline complex processes effortlessly.</li>
          <li>Accessible and user-friendly technology.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
        <p className="text-gray-700 mb-4">
          Visit the official website to explore more about Grok AI and how it can benefit you!
        </p>
        <a
          href="https://www.grok.ai"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
