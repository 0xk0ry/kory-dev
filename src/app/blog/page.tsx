import { Author } from "~/components/Author";

export default function HomePage() {
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
      <Author />

      <div>
        <div className="text-2xl leading-loose font-semibold pb-3">Tool Set</div>
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
      <div>
        <div className="text-2xl leading-loose font-semibold pb-3">Projects</div>
      </div>
    </main>
  );
}
