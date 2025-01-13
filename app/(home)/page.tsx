import MessageButton from "./components/MessageButton";
import Counter from "./components/Counter"
export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <MessageButton />
      <Counter/>
    </main>
  );
}
