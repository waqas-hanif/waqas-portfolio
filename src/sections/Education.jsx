import SectionTitle from "../components/SectionTitle";

const education = [
  {
    number: "01",
    type: "CURRENT DEGREE",
    title: "BS Information Technology",
    institute: "Ghazi University, Dera Ghazi Khan",
    status: "Currently Studying • 5th Semester",
    description:
      "Currently pursuing a Bachelor of Science in Information Technology with a strong focus on programming, web development, software engineering, databases and modern information technologies.",
    tags: [
      "Information Technology",
      "Programming",
      "Web Development",
      "Database Systems",
      "Software Engineering",
    ],
    icon: "BS",
    current: true,
  },
  {
    number: "02",
    type: "PROFESSIONAL TRAINING",
    title: "Frontend Development",
    institute: "University of Management and Technology (UMT), Lahore",
    status: "Professional Training • Completed",
    description:
      "Developed practical frontend development skills with a focus on responsive interfaces, modern UI development, JavaScript and React-based web applications.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
    icon: "</>",
  },
  {
    number: "03",
    type: "PROFESSIONAL TRAINING",
    title: "Backend Development",
    institute:
      "Ministry of Information Technology & Telecommunication (MoITT)",
    status: "Professional Training • Completed",
    description:
      "Developed backend development skills including server-side programming, RESTful APIs, API integration and modern backend technologies used in full-stack applications.",
    tags: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "Backend Development",
    ],
    icon: "API",
  },
  {
    number: "04",
    type: "PROFESSIONAL TRAINING",
    title: "Full Stack Development",
    institute: "Virtual University of Pakistan",
    status: "Professional Training • Completed",
    description:
      "Developed full-stack web development skills by combining frontend interfaces, backend APIs and database systems to create complete and functional web applications.",
    tags: [
      "MERN Stack",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Full Stack",
    ],
    icon: "FS",
  },
];

const EducationCard = ({ item }) => {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/0 blur-3xl transition duration-700 group-hover:bg-cyan-400/15" />

      {/* Number */}
      <div className="pointer-events-none absolute right-5 top-0 text-8xl font-black text-white/[0.025] transition duration-500 group-hover:text-cyan-400/[0.07]">
        {item.number}
      </div>

      {/* Header */}
      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <span
            className={`inline-flex rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] ${
              item.current
                ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                : "border-white/10 bg-white/[0.03] text-slate-500"
            }`}
          >
            {item.type}
          </span>

          <div className="flex h-14 min-w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 font-mono text-xs font-bold text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
            {item.icon}
          </div>
        </div>

        <h3 className="mt-7 text-2xl font-black leading-tight text-white transition duration-300 group-hover:text-cyan-400 sm:text-3xl">
          {item.title}
        </h3>

        <p className="mt-3 text-sm font-semibold leading-6 text-blue-400">
          {item.institute}
        </p>
      </div>

      {/* Status */}
      <div className="relative mt-5 flex items-center gap-2">
        <span
          className={`h-2 w-2 shrink-0 rounded-full ${
            item.current
              ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
              : "bg-slate-600"
          }`}
        />

        <span
          className={`text-xs font-semibold ${
            item.current ? "text-cyan-400" : "text-slate-500"
          }`}
        >
          {item.status}
        </span>
      </div>

      {/* Divider */}
      <div className="relative my-7 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

      {/* Description */}
      <p className="relative text-sm leading-7 text-slate-400">
        {item.description}
      </p>

      {/* Tags */}
      <div className="relative mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-[11px] font-medium text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            Development Journey
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Learn • Build • Improve
          </p>
        </div>

        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
          →
        </span>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-700 group-hover:w-full" />
    </article>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-48 top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[150px]" />

      {/* Grid Background */}
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
          title="Education & Training"
          subtitle="Academic knowledge, professional training and continuous development across the full web development stack."
        />

        {/* Intro */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            My journey combines academic studies in Information Technology
            with specialized training in frontend, backend and full-stack
            development. I continuously turn what I learn into practical
            development skills and real-world web applications.
          </p>
        </div>

        {/* Timeline Area */}
        <div className="relative mt-16">
          {/* Center Line - Desktop */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/70 via-blue-500/30 to-transparent lg:block" />

          {/* Mobile Line */}
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/30 to-transparent lg:hidden" />

          {/* Cards Grid */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-12">
            {education.map((item, index) => (
              <div
                key={item.number}
                className={`relative ${
                  index % 2 === 0
                    ? "lg:pr-5"
                    : "lg:pl-5"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-5 top-10 z-30 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-slate-950 bg-cyan-400 shadow-[0_0_28px_rgba(34,211,238,0.8)] lg:left-auto lg:right-[-10px]">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                </div>

                {/* Desktop connector */}
                <div
                  className={`absolute top-[49px] hidden h-px w-10 bg-cyan-400/30 lg:block ${
                    index % 2 === 0
                      ? "right-[-10px]"
                      : "left-[-10px]"
                  }`}
                />

                {/* Mobile spacing */}
                <div className="ml-12 lg:ml-0">
                  <EducationCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Journey */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.05] via-white/[0.02] to-blue-500/[0.05] p-7 backdrop-blur-2xl sm:p-9">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Development Journey
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                From IT Student to Full Stack Developer
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                My academic studies and professional training have helped me
                develop skills across the complete development workflow —
                from modern frontend interfaces to backend APIs and MongoDB
                database integration.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Frontend", "Backend", "Database", "MERN"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                      {item}
                    </span>

                    {index < 3 && (
                      <span className="text-slate-700">→</span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
            <div className="text-3xl font-black text-white transition group-hover:text-cyan-400">
              5th
            </div>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              Current Semester
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
            <div className="text-3xl font-black text-white transition group-hover:text-cyan-400">
              MERN
            </div>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              Full Stack Focus
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
            <div className="text-3xl font-black text-white transition group-hover:text-cyan-400">
              4
            </div>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600">
              Education & Training
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;