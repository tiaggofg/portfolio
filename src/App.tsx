import { Footer } from "./components/footer/Footer";
import { SquareLines } from "./components/square-lines/SquareLines";
import { education } from "./data/education";
import { experiences } from "./data/experience";
import { projects } from "./data/projects";
import { socialMedias } from "./data/social";
import { stacks } from "./data/stacks";

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <SquareLines />
        <div className="flex flex-col w-full max-w-4xl mx-auto mt-16 px-5 md:mt-24 lg:mt-26 xl:px-0 gap-2">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="relative md:w-full flex flex-col gap-2">
              <div>
                <h1 className="text-3xl font-bold leading-tight">
                  Tiago Fernandes de Godoy
                </h1>
                <p className="py-2 text-sm text-pretty text-neutral-600">
                  Sou Desenvolvedor de Software Pleno focado em desenvolver
                  soluções escaláveis e sustentáveis. Aprecio boas práticas de
                  design de código e busco clareza tanto no desenvolvimento
                  quanto na comunicação.
                </p>
                <div className="flex gap-2">
                  {socialMedias.map((social) => (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative hidden md:flex">
              <div className="relative z-50 w-full">
                <div className="relative z-30 pl-10">
                  <img
                    alt="Foto do Tiago Godoy"
                    src="https://avatars.githubusercontent.com/u/84431015"
                    decoding="auto"
                    className="relative z-30 lg:w-[150px] md:w-[175px] h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <section className="flex flex-col gap-2">
            <h2 className="text-2xl mt-5 font-bold leading-tight md:text-2xl lg:text-2xl">
              Sobre
            </h2>
            <p className="text-sm text-pretty text-neutral-600">
              Como engenheiro de software, liderei iniciativas técnicas como a
              migração de um sistema antifraude para um arquitetura escalável e
              resiliente, a criação de uma ferramenta de impressão remota e a
              implementação de um otimizador logístico baseado em heurísticas.
              Possuo sólida experiência em backend, atuando principalmente com
              Java, mas também com passagem por tecnologias como PHP,
              TypeScript, MongoDB e React.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-2xl mt-5 font-bold leading-tight md:text-2xl lg:text-2xl">
              Tecnologias
            </h2>

            <div className="flex flex-wrap gap-1">
              {stacks.map((stack) => (
                <span
                  className="inline-flex gap-1 py-1 px-3 bg-neutral-800 rounded-md text-white items-center"
                  key={stack.name}
                >
                  {stack.icon}
                  <span className="text-xs font-semibold">{stack.name}</span>
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-col mt-5 gap-2">
            <h2 className="text-2xl font-bold leading-tight md:text-2xl lg:text-2xl">
              Educação
            </h2>

            {education.map((edu) => (
              <div key={edu.institution} className="flex flex-col">
                <div className="flex gap-1 justify-between">
                  <div className="flex gap-1">
                    <h3 className="text-lg font-semibold">
                      <a
                        href={edu.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        <span className="block md:hidden">{edu.shortName}</span>
                        <span className="hidden md:block">
                          {edu.institution} ({edu.shortName})
                        </span>
                      </a>
                    </h3>
                    <div className="self-center text-xs md:text-sm lg:text-sm font-medium bg-neutral-200 p-0.5 md:p-1 lg:p-1 rounded-sm max-h-min">
                      {edu.status}
                    </div>
                  </div>
                  <span className="text-gray-500 p-1 tabular-nums">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="justify-self-end text-sm text-neutral-600">
                  {edu.degree}
                </p>
              </div>
            ))}
          </section>

          <section className="flex flex-col mt-5 gap-2">
            <h2 className="text-2xl font-bold leading-tight md:text-2xl lg:text-2xl">
              Experiência
            </h2>
            <div className="flex flex-col gap-5">
              {experiences.map((exp) => (
                <div key={exp.position} className="flex flex-col">
                  <div className="flex gap-1 justify-between">
                    <div className="flex gap-1">
                      <h3 className="text-lg font-semibold">
                        <a
                          href={exp.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      </h3>
                    </div>
                    <span className="text-gray-500 p-1 tabular-nums text-nowrap">
                      {exp.periodo}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-normal">{exp.position}</h4>
                    <p className="justify-self-end text-sm text-neutral-600">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {exp.stacks.map((stack) => (
                        <span
                          className="inline-flex gap-1 py-1 px-3 bg-neutral-200 rounded-md items-center"
                          key={stack}
                        >
                          <span className="text-xs font-semibold">{stack}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col mt-5 gap-2">
            <h2 className="text-2xl font-bold leading-tight md:text-2xl lg:text-2xl">
              Projetos e contribuições
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
              {projects.map((project) => (
                <div
                  className="flex flex-col border border-neutral-200 rounded-lg p-3 gap-2"
                  key={project.name}
                >
                  <h3 className="text-lg font-semibold">
                    {project.site ? (
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline items-center inline-flex gap-1"
                      >
                        {project.name}
                        <span className="flex-shrink-0 h-2 w-2 ml-1 mt-0.5 rounded-full bg-green-500"></span>
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="justify-self-end text-sm text-pretty text-neutral-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-flex gap-1 py-1 px-3 bg-neutral-800 rounded-md text-white items-center">
                      <span className="text-xs font-semibold">
                        {project.role}
                      </span>
                    </span>
                    {project.stacks.map((stack) => (
                      <span
                        className="inline-flex gap-1 py-1 px-3 bg-neutral-200 rounded-md items-center"
                        key={stack}
                      >
                        <span className="text-xs font-semibold">{stack}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
