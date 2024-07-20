"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
     <nav className="mt-5 mb-6 flex flex-row h-auto w-[50vw] items-center justify-between p-4 font-semibold md:text-xl bg-stone-950 z-10 fixed rounded-lg">
      <div
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        Kory
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/me") ? "bg-neutral-400" : ""}`}
          onClick={() => {
            router.push("/me");
            console.log(pathname);
          }}
        >
          me
        </div>{" "}
        <div
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/blog") ? "bg-neutral-400" : ""}`}
          onClick={() => {
            router.push("/blog");
            console.log(pathname);
          }}
        >
          blog
        </div>{" "}
        {/* <div
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/others") ? "bg-neutral-400" : ""}`}
          onClick={() => {
            router.push("/other");
            console.log(pathname);
          }}
        >
          other
        </div>{" "} */}
        <Link
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/github") ? "bg-neutral-400" : ""}`}
          href="https://github.com/KoryTheKorgy"
        >
          github
        </Link>
      </div>
     
    </nav>
  );
}
