import SectionTitle from "../components/SectionTitle";
import skills from "../data/skills";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Building modern interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Responsive Web Design",
      "Tailwind CSS",
    ],
    icon: "</>",
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "Building powerful server-side apps",
    skills: ["Node.js", "Express.js", "REST APIs"],
    icon: "API",
  },
  {
    number: "03",
    title: "Database",
    subtitle: "Managing application data",
    skills: ["MongoDB"],
    icon: "DB",
  },
  {
    number: "04",
    title: "Tools",
    subtitle: "Development & collaboration",
    skills: ["Git & GitHub", "API Integration"],
    icon: "DEV",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[140px]" />

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

        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to build complete modern web applications."
        />

        {/* Intro */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            My development skills cover the complete MERN stack, from
            responsive frontend interfaces to backend APIs and database
            integration.
          </p>
        </div>

        {/* Main Skill Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/0 blur-3xl transition duration-700 group-hover:bg-cyan-400/15" />

              {/* Header */}
              <div className="relative flex items-start justify-between">

                <div>
                  <span className="text-5xl font-black text-cyan-400/15 transition duration-500 group-hover:text-cyan-400/40">
                    {group.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-black text-white transition duration-300 group-hover:text-cyan-400">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {group.subtitle}
                  </p>
                </div>

                <div className="flex h-14 min-w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 font-mono text-xs font-bold text-cyan-400 transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                  {group.icon}
                </div>

              </div>

              {/* Divider */}
              <div className="relative my-7 h-px bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2 text-xs font-semibold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="mt-7 h-px w-10 bg-cyan-400/30 transition-all duration-500 group-hover:w-full group-hover:bg-cyan-400/60" />
            </article>
          ))}

        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.05] via-white/[0.025] to-blue-500/[0.05] p-7 backdrop-blur-2xl sm:p-9">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Core Stack
              </p>

              <h3 className="mt-2 text-3xl font-black text-white">
                MERN Stack
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                MongoDB, Express.js, React and Node.js — combined to build
                complete full-stack web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {[
                ["M", "MongoDB"],
                ["E", "Express"],
                ["R", "React"],
                ["N", "Node.js"],
              ].map(([letter, name]) => (
                <div
                  key={name}
                  className="group/stack flex min-w-[100px] flex-col items-center rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <span className="text-xl font-black text-cyan-400 transition group-hover/stack:scale-110">
                    {letter}
                  </span>

                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    {name}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Skill Count */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl">
            <div className="text-3xl font-black text-white">
              {skills.length}+
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl">
            <div className="text-3xl font-black text-white">
              MERN
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              Full Stack
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl">
            <div className="text-3xl font-black text-white">
              End-to-End
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              Development
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;