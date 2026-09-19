const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-cyan-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Portfolio
        </span>
        <span className="h-px w-10 bg-cyan-400" />
      </div>

      <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;