import SectionTitle from "../components/SectionTitle";

const techStack = [
  {
    name: "MongoDB",
    type: "Database",
    icon: "DB",
  },
  {
    name: "Express.js",
    type: "Backend",
    icon: "EX",
  },
  {
    name: "React",
    type: "Frontend",
    icon: "⚛",
  },
  {
    name: "Node.js",
    type: "Runtime",
    icon: "JS",
  },
];

const highlights = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, interactive and modern user interfaces with React and JavaScript.",
    icon: "</>",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing server-side applications, APIs and backend systems with Node.js and Express.js.",
    icon: "API",
  },
  {
    number: "03",
    title: "MongoDB & Databases",
    description:
      "Working with MongoDB to design and manage efficient database-driven applications.",
    icon: "DB",
  },
  {
    number: "04",
    title: "Full Stack Applications",
    description:
      "Connecting frontend, backend and database into complete end-to-end web applications.",
    icon: "FS",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Grid */}
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
          title="About Me"
          subtitle="Full Stack MERN Developer building modern web applications from frontend to backend."
        />

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">

          {/* ================= MAIN ABOUT CARD ================= */}

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-10">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl transition duration-700 group-hover:bg-cyan-400/20" />

            {/* Header */}
            <div className="relative flex items-center justify-between">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                Who I Am
              </span>

              <span className="text-xs font-medium text-slate-600">
                01 / ABOUT
              </span>
            </div>

            {/* Icon */}
            <div className="relative mt-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-blue-500/5 text-2xl font-black text-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.08)] transition duration-500 group-hover:scale-110 group-hover:rotate-3">
              {"</>"}
            </div>

            {/* Title */}
            <h3 className="relative mt-8 text-3xl font-black tracking-tight sm:text-4xl">
              Full Stack
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                MERN Developer
              </span>
            </h3>

            <p className="relative mt-5 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Frontend • Backend • Database
            </p>

            <div className="my-8 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

            {/* Description */}
            <p className="relative text-base leading-8 text-slate-400">
              I'm <span className="font-semibold text-white">Waqas Hanif</span>,
              a Full Stack MERN Developer focused on building modern,
              responsive and user-friendly web applications.
            </p>

            <p className="relative mt-5 text-base leading-8 text-slate-400">
              I work across the complete development stack — from creating
              polished React interfaces to building backend APIs with
              Node.js and Express.js and managing application data with
              MongoDB.
            </p>

            <p className="relative mt-5 text-base leading-8 text-slate-400">
              My goal is to turn ideas into complete, functional and scalable
              digital products with a strong focus on performance,
              responsiveness and user experience.
            </p>

            {/* Code Decoration */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/5 bg-slate-950/70 p-5 font-mono text-xs">

              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-purple-400">{"{"}</span>
              </div>

              <div className="mt-2 pl-5">
                <span className="text-slate-500">name:</span>{" "}
                <span className="text-cyan-400">
                  "Waqas Hanif"
                </span>
              </div>

              <div className="pl-5">
                <span className="text-slate-500">role:</span>{" "}
                <span className="text-cyan-400">
                  "Full Stack MERN Developer"
                </span>
              </div>

              <div className="pl-5">
                <span className="text-slate-500">stack:</span>{" "}
                <span className="text-cyan-400">
                  "MERN"
                </span>
              </div>

              <div>
                <span className="text-purple-400">{"}"}</span>
              </div>

            </div>
          </div>

          {/* ================= HIGHLIGHTS ================= */}

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.055]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition duration-500 group-hover:bg-cyan-400/15" />

                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-cyan-400/30 transition duration-500 group-hover:text-cyan-400/70">
                    {item.number}
                  </span>

                  <span className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-2 font-mono text-xs font-bold text-cyan-400 transition duration-500 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    {item.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 transition duration-300 group-hover:text-slate-400">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-7 h-px w-10 bg-cyan-400/30 transition-all duration-500 group-hover:w-full group-hover:bg-cyan-400/60" />

                <div className="mt-5 text-right text-sm text-slate-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                  →
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= MERN STACK ================= */}

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-2xl sm:p-8">

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                My Core Stack
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                MERN Stack
              </h3>
            </div>

            <span className="text-sm text-slate-600">
              MongoDB • Express • React • Node.js
            </span>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-xs font-bold text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/30">
                  {tech.icon}
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    {tech.name}
                  </h4>

                  <p className="mt-1 text-xs text-slate-600">
                    {tech.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM STATS ================= */}

        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <div className="text-2xl font-black text-white transition group-hover:text-cyan-400">
              Frontend
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              React & JavaScript
            </div>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <div className="text-2xl font-black text-white transition group-hover:text-cyan-400">
              Backend
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              Node & Express
            </div>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <div className="text-2xl font-black text-white transition group-hover:text-cyan-400">
              Database
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              MongoDB
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;