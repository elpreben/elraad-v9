
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse('Dette kan skyldes en jordfeil eller defekt stikkontakt. Vi anbefaler at du kontakter fagperson.');
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Beskriv problemet</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="4"
          className="w-full border rounded-md p-2"
          placeholder="F.eks. strømmen går hver gang jeg slår på komfyren..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Få svar fra Elråd
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-gray-100 border rounded">
          <h2 className="font-semibold mb-2">Svar fra Elråd AI:</h2>
          <p>{response}</p>
        </div>
      )}
    </Layout>
  );
}
