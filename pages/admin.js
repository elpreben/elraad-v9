
import Layout from '../components/Layout';

const dummyMessages = [
  {
    id: 1,
    date: '2025-07-21',
    message: 'Strømmen går når jeg slår på lyset i gangen.',
  },
  {
    id: 2,
    date: '2025-07-22',
    message: 'Stikkontakten på kjøkkenet fungerer ikke.',
  },
];

export default function Admin() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Admin – Innkomne henvendelser</h1>
      <ul className="space-y-4">
        {dummyMessages.map((msg) => (
          <li key={msg.id} className="p-4 border rounded bg-white shadow">
            <p className="text-sm text-gray-500">{msg.date}</p>
            <p>{msg.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
