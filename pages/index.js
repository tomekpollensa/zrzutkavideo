import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">ZrzutkaVideo</h1>
        <p className="text-gray-700 mb-6">
          Wspieraj tworzenie wartościowych treści inwestycyjnych.
        </p>

        <Link href="/login">
          <a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
            Przejdź do logowania
          </a>
        </Link>
      </div>
    </div>
  );
}
