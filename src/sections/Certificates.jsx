import SectionTitle from "../components/SectionTitle";
import CertificateCard from "../components/CertificateCard";
import certificates from "../data/certificates";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white"
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

        {/* Heading */}
        <SectionTitle
          title="My Certificates"
          subtitle="Professional learning, certifications and achievements."
        />

        {/* Intro */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            Continuous learning is an important part of my development journey.
            These certificates represent the skills and knowledge I have
            developed through different learning experiences.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-400">
            Verified Learning
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
            Professional Development
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
            Continuous Learning
          </span>

        </div>

        {/* Certificates Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              className="group relative"
            >
              {/* Number */}
              <div className="pointer-events-none absolute -left-3 -top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/90 text-xs font-bold text-cyan-400 shadow-xl backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/30">
                {String(index + 1).padStart(2, "0")}
              </div>

              <CertificateCard certificate={certificate} />
            </div>
          ))}
        </div>

        {/* Bottom Learning Banner */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-2xl sm:p-9">

          <div className="flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Always Learning
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Growing as a Developer
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Technology keeps evolving, and I continue improving my skills
                by learning new tools, technologies and development practices.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-2xl text-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
              ✓
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;