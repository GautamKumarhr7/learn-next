import MessageButton from "./components/MessageButton";
import Link from 'next/link';
// import "./globals.css";
export default function HomePage() {
  return (
    <main  className="flex items-center justify-center bg-red-100 w-full h-screen">
      <MessageButton />
      <Link href="/login">Login</Link>
    </main>
  );
}
