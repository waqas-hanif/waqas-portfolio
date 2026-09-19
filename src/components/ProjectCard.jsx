const ProjectCard = ({ project }) => {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/5 blur-[90px] transition duration-700 group-hover:bg-cyan-400/15" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/5 blur-[80px] transition duration-700 group-hover:bg-blue-500/10" />

      {/* Image Area */}
      <div className="relative overflow-hidden bg-slate-950">

        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        {/* Image Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

        {/* Top Status */}
        <div className="absolute left-5 top-5">
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            Featured
          </span>
        </div>

        {/* Hover View */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 backdrop-blur-[2px] transition duration-500 group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950/80 text-2xl text-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.15)] backdrop-blur-xl transition duration-500 group-hover:scale-110">
            →
          </div>
        </div>

        {/* Bottom Image Label */}
        <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
              Project
            </p>

            <h3 className="mt-1 text-2xl font-black text-white drop-shadow-lg">
              {project.title}
            </h3>
          </div>

          <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 font-mono text-xs text-slate-400 backdrop-blur-xl sm:flex">
            {project.title?.slice(0, 2).toUpperCase()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-7 sm:p-8">

        {/* Description */}
        <p className="text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />

        {/* Bottom Info */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xs font-semibold text-slate-500">
              Full Stack Project
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-700">
              React • Backend • Database
            </p>
          </div>

          {/* Arrow */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-lg text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
            →
          </div>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-700 group-hover:w-full" />
    </article>
  );
};

export default ProjectCard;