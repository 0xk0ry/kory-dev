"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Author } from "~/components/Author";
import { TopNav } from "~/components/TopNav";

export default function HomePage() {
  const projects = [
    {
      name: "kory-gallery",
      description: "website where user can store their images.",
      url: "https://github.com/koryTheKorgy/kory-gallery",
      techs: ["drizzle", "shadcn", "clerk"],
    },
    {
      name: "blog-app",
      description: "A Simple Blog App for SE104 class project.",
      url: "https://github.com/KoryTheKorgy/Blog-App/",
      techs: ["react", "quill"],
    },
    {
      name: "mysql-java",
      description: "Generate data and performs queries, printing to XML.",
      url: "https://github.com/KoryTheKorgy/mysql-java-application",
      techs: ["mysql"],
    },
  ];
  const pathname = usePathname();
  const router = useRouter();
  return (
    <main className="flex-center mx-auto flex flex-col gap-6">
      <div className="flex-center mx-auto flex w-full flex-col gap-3">
        <Author />
        <div className="text-md leading-loose">
          I am Trúc but I usually go by Kory on the internet.
          <br />
          I am currently an undergraduate studying Computer Science at
          University of Information Technology, Vietnam.
          <br />
          I like to dive into all sort of stuff that interest me. From front-end
          development to servers, security.
          <br />
        </div>
      </div>
      <div className="w-[10%] border-b-2 border-slate-400" />
      <div className="leading-loose">
        <div className="pb-3 text-md">
          <Link
            className="text-2xl font-semibold leading-loose hover:cursor-pointer"
            href="https://github.com/KoryTheKorgy?tab=repositories"
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {projects.map((project) => (
            <Link
              className="items-left h-30 flex w-[30%] flex-col gap-2 text-wrap rounded-md bg-gray-800 px-4 py-2	hover:cursor-pointer"
              key={project.name}
              href={project.url}
            >
              <div className="text-base">{project.name}</div>
              <div className="text-sm leading-6  text-slate-400">
                {project.description}
              </div>
              <div className="flex flex-row gap-1  text-slate-500">
                {project.techs.map((tech, index) => (
                  <div key={tech} className="text-sm">
                    {tech}
                    {index < project.techs.length - 1 && " -"}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[10%] border-b-2 border-slate-400" />
      <div className="pb-3 text-md">
        <div
          className="text-2xl font-semibold leading-loose hover:cursor-pointer"
          onClick={() => {
            router.push(`/blog`);
          }}
        >
          Blogs
        </div>
      </div>
    </main>
  );
}
