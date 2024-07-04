import Link from "next/link";
import { Author } from "~/components/Author";
import { TopNav } from "~/components/TopNav";

export default function HomePage() {
  return (
    <main className="flex flex-center flex-col mx-auto gap-6">
      <Author />
      <div className="text-md leading-loose">
        Skillsets
      </div>
    </main>
  );
}
