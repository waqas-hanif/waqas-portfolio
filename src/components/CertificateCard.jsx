const CertificateCard = ({ certificate }) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400/40 hover:shadow-cyan-500/10">

      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-700 group-hover:bg-cyan-400/25" />

      {/* Certificate Image */}
      <div className="relative overflow-hidden bg-slate-900">

        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Certificate Badge */}
        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/70 text-lg text-cyan-400 shadow-lg backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:border-cyan-400">
          ✓
        </div>

        {/* Hover Label */}
        <div className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition duration-500 group-hover:opacity-100">
          <span className="rounded-full border border-white/10 bg-slate-950/80 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
            Certified Achievement
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">

        <div className="flex items-center justify-between gap-4">

          <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
            {certificate.title}
          </h3>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
            ✓
          </span>

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Verified certificate and professional achievement.
        </p>

        <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xs uppercase tracking-wider text-slate-500">
            Professional Certificate
          </span>

          <span className="text-cyan-400 transition duration-300 group-hover:translate-x-1">
            →
          </span>

        </div>

      </div>
    </article>
  );
};

export default CertificateCard;