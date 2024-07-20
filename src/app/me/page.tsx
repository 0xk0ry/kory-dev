import Link from "next/link";
import { Author } from "~/components/Author";
import { TopNav } from "~/components/TopNav";

export default function MePage() {
  const skills = [
    {
      name: "HTML",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Javascript",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Typescript",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "React",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Nextjs",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Nodejs",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Prisma",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Postresql",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Postman",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Redis",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Sqlite",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
    {
      name: "Docker",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
          className="h-full object-contain"
        />
      ),
    },
  ];
  return (
    <main className="flex-center mx-auto flex flex-col gap-6">
      <div className="flex-center mx-auto flex w-full flex-col gap-3">
        <Author />
        <div className="text-md leading-loose">
          I am Trúc but I usually go by Kory on the internet.
          I am currently an undergraduate studying Computer Science at
          University of Information Technology, Vietnam.
          I like to dive into all sort of stuff that interest me. From front-end
          development to servers, security.
        </div>
      </div>
      <div className=" w-[10%] border-b-2 border-blue-300" />
      <div>
        <div className="pb-3 text-2xl font-semibold leading-loose">
          Qualification
        </div>
        <div className="flex flex-col flex-wrap gap-3">
          <div>
            Education: Honor Bachelor in Computer Science at{" "}
            <Link href={"https://en.uit.edu.vn/"} className="font-semibold">
              University of Information Technology
            </Link>
          </div>
          <div>Expected Graduation: Spring 2026</div>
          <div>GPA: 8.23</div>
          <div>English: IELTS 7.5</div>
          <div>SAT: 1440</div>
        </div>
      </div>
      <div className=" w-[10%] border-b-2 border-blue-300" />
      <div>
        <div className="pb-3 text-2xl font-semibold leading-loose">
          Tool Set
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              className="flex h-10 flex-row items-center gap-2 rounded-md bg-gray-800 px-4 py-2"
              key={skill.name}
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
