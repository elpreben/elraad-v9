
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white shadow p-4 flex gap-4 text-blue-600">
        <Link href="/">Hjem</Link>
        <Link href="/om">Om Elråd</Link>
        <Link href="/kontakt">Kontakt oss</Link>
        <Link href="/priser">Priser</Link>
      </nav>

      <main className="p-6 max-w-3xl mx-auto flex-grow">{children}</main>

      <footer className="bg-gray-100 text-center p-8">
        <h2 className="text-xl font-bold mb-2">Vil du at vi skal kontakte deg?</h2>
        <p className="text-sm mb-4 max-w-md mx-auto">
          Om ikke svaret fra vår AI-kundesupport løste problemet, så kan vår menneskelige kompetanse bistå med problemløsing eller eventuelt ett prisestimat for utbedring av feil.
        </p>
        <Link href="/kontakt">
          <button className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Kontakt oss for menneskelig hjelp
          </button>
        </Link>
      </footer>
    </div>
  );
}
