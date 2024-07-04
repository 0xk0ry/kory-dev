import Link from "next/link";
import { Author } from "~/components/Author";
import { TopNav } from "~/components/TopNav";

export default function HomePage() {
  return (
    <main className="flex flex-center flex-col mx-auto gap-6">
      <Author />
      <div className="text-md leading-loose">
        I am Trúc but I usually go by Kory on the internet.<br/>
        I am currently an undergraduate studying Computer Science at University of Information Technology, Vietnam.<br/>
        I like to dive into all sort of stuff that interest me. From front-end development to servers, security.<br/>
      </div>
    </main>
  );
}
