
import Layout from '../components/Layout';

export default function Om() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Om Elråd</h1>
      <p className="mb-2">Elråd drives av Preben Nygård, som har følgende kompetanse:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Sertifisert elektroinstallatør</li>
        <li>Elektriker med gruppe L fagbrev</li>
        <li>NEK 405-2-3 Avhendig bolig elektrokontrollør</li>
      </ul>
    </Layout>
  );
}
