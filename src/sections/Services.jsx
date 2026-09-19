import SectionTitle from "../components/SectionTitle";
import services from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
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

        {/* Heading */}
        <SectionTitle
          title="My Services"
          subtitle="Full-stack development services for modern, scalable and engaging web applications."
        />

        {/* Intro */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            I build complete digital solutions across the frontend, backend
            and database — turning ideas into responsive and functional web
            applications.
          </p>
        </div>

        {/* Service Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "Frontend Development",
            "Backend Development",
            "MERN Applications",
            "REST APIs",
            "MongoDB",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/0 blur-3xl transition duration-700 group-hover:bg-cyan-400/15" />

              {/* Number */}
              <div className="absolute right-6 top-5 text-7xl font-black text-white/[0.025] transition duration-500 group-hover:text-cyan-400/[0.08]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/15">
                {service.icon || "✦"}
              </div>

              {/* Content */}
              <div className="relative">

                <h3 className="mt-7 text-xl font-black text-white transition duration-300 group-hover:text-cyan-400 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    Full Stack Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    →
                  </span>
                </div>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.05] via-white/[0.02] to-blue-500/[0.05] p-7 backdrop-blur-2xl sm:p-9">

          <div className="flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                End-to-End Development
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                From Idea to Full-Stack Application
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Frontend, backend, APIs and database integration — everything
                connected into one complete web application.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-xs font-semibold text-slate-400">
                Available for Projects
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;