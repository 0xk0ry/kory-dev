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
      <body className={`flex flex-col bg-black text-white items-center w-[50%] mx-auto`}>
        <div className="w-4/5 mx-auto">
          <TopNav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
