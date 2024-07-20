import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { TopNav } from "~/components/TopNav";

export const metadata = {
  title: "Kory the Dev",
  description: "Kory the Korgy",
  icons: [{ rel: "icon", url: "/avatar.jpg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mx-auto flex flex-col flex-wrap items-center bg-black text-white`}
      >
        <div className="mx-auto">
          <TopNav />
          <main className="w-[50vw] pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
