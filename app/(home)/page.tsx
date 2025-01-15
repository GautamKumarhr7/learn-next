import MessageButton from "./components/MessageButton";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <MessageButton />
      <Link href="/login">Login</Link>
    </main>
  );
}
