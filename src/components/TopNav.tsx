"use client";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="mx-auto mb-6 flex h-auto items-center justify-between border-b p-4 font-semibold md:text-xl">
      <div className="cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        Kory
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer"
          onClick={() => {
            router.push("/me");
          }}
        >
          me
        </div>
        <div className="cursor-pointer">blog</div>
        <div className="cursor-pointer">projects</div>
        <div className="cursor-pointer">others</div>
        <div className="cursor-pointer">github</div>
      </div>
    </nav>
  );
}
