import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-900 px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-purple-600/10 blur-[140px]" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <SectionTitle
          title="My Projects"
          subtitle="A selection of web applications and digital experiences I've built."
        />

        {/* Intro */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            From interactive frontend experiences to complete full-stack
            applications, these projects showcase my work with React,
            JavaScript, Node.js, Express.js and MongoDB.
          </p>
        </div>

        {/* Project Count / Stack */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-400">
            Full Stack Development
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
            React
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
            Node.js
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
            Express.js
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
            MongoDB
          </span>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
            >
              {/* Project Number */}
              <div className="pointer-events-none absolute -left-3 -top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/90 text-xs font-bold text-cyan-400 shadow-xl backdrop-blur-xl transition duration-300 group-hover:border-cyan-400/30 group-hover:scale-110">
                {String(index + 1).padStart(2, "0")}
              </div>

              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom Stack Banner */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-2xl sm:p-8">

          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Development Stack
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                Building from UI to Database
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                I can work across the complete application stack — creating
                the interface, developing APIs, connecting databases and
                bringing everything together into a functional web application.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:max-w-sm md:justify-end">
              {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;