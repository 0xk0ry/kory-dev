"use client";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="mx-auto mb-6 flex h-auto items-center justify-between border-b p-4 font-semibold md:text-xl">
      <div
        onClick={() => {
          router.push("/");
        }}
      >
        Kory
      </div>
      <div className="flex items-center gap-4">
        <div>me</div>
        <div>blog</div>
        <div>projects</div>
        <div>others</div>
        <div>github</div>
      </div>
    </nav>
  );
}
