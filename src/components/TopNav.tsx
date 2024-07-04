"use client";
import { useRouter, usePathname } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="mx-auto mb-6 flex h-auto items-center justify-between border-b p-4 font-semibold md:text-xl">
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
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/me") ? "bg-neutral-500" : ""}`}
          onClick={() => {
            router.push("/me");
            console.log(pathname);
          }}
        >
          me
        </div>{" "}
        <div
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/blog") ? "bg-neutral-500" : ""}`}
          onClick={() => {
            router.push("/blog");
            console.log(pathname);
          }}
        >
          blog
        </div>{" "}
        <div
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/others") ? "bg-neutral-500" : ""}`}
          onClick={() => {
            router.push("/others");
            console.log(pathname);
          }}
        >
          others
        </div>{" "}
        <div
          className={`cursor-pointer rounded-md px-2 py-[0.1rem] hover:text-slate-600 ${pathname.startsWith("/github") ? "bg-neutral-500" : ""}`}
          onClick={() => {
            router.replace("https://github.com/KoryTheKorgy");
            console.log(pathname);
          }}
        >
          github
        </div>
      </div>
    </nav>
  );
}
