'use client'
import { useRouter } from "next/navigation";
import { Author } from "~/components/Author";

export default function BlogPage() {
  const blogs24 = [
    {
      title: "The future of me",
      tags: ["talk"],
      date: "20 July 2024",
      url: "the-future-of-me",
      summary:
        "I talk about the future of me as well what I want to write for my blog.",
    },
  ];
  const router = useRouter();
  return (
    <main className="flex-center mx-auto flex flex-col gap-6">
      <div className="flex flex-col">
        <div className="my-0 text-4xl font-bold hover:cursor-pointer">2024</div>
        <div className="my-2 w-[15vw] border-b-2 border-slate-400" />
        <div className="flex flex-row items-center gap-1 pt-5">
          {blogs24.map((blog) => (
            <div key={blog.title} className="hover:cursor-pointer" onClick={() => {
              router.push(`/blog/${blog.url}`)
            }}>
              <div className="flex flex-row gap-4">
                <p className="text-2xl font-semibold">{blog.title}</p>
                <div>
                  {blog.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex flex-row items-center gap-2 rounded-md bg-gray-800 px-2 py-1"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <span className="text-slate-400 my-auto">{blog.date}</span>
              </div>
              <div className="text-md text-slate-300 pt-2">
                {blog.summary}
                </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
