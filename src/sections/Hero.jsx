import { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";

const roles = [
  "Full Stack MERN Developer",
  "React Developer",
  "Node.js Developer",
  "Backend & API Developer",
];

const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let frame;

    const handleMouseMove = (event) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        setMouse({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 pb-20 pt-28 text-white sm:pt-32 lg:px-8"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-64 -top-56 h-[42rem] w-[42rem] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute -right-64 top-[-8rem] h-[42rem] w-[42rem] rounded-full bg-blue-600/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-22rem] left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-purple-600/[0.07] blur-[160px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.035),transparent_42%)]" />

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Top Line */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Background Particles */}

      <div
        className="pointer-events-none absolute left-[8%] top-[30%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.9)] transition-transform duration-700"
        style={{
          transform: `translate(${mouse.x * 22}px, ${mouse.y * 22}px)`,
        }}
      />

      <div
        className="pointer-events-none absolute right-[13%] top-[22%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)] transition-transform duration-700"
        style={{
          transform: `translate(${mouse.x * -28}px, ${mouse.y * -28}px)`,
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[24%] left-[19%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.8)]"
        style={{
          transform: `translate(${mouse.x * 15}px, ${mouse.y * 15}px)`,
        }}
      />

      {/* ================= MAIN HERO ================= */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1fr_0.9fr] lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}

        <div
          className="relative z-20"
          style={{
            transform: `translate3d(${mouse.x * 3}px, ${
              mouse.y * 3
            }px, 0)`,
          }}
        >
          {/* Available */}

          <div className="mb-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.045] px-4 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.04)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300">
                Available for Projects
              </span>
            </div>

            <span className="hidden h-px w-10 bg-gradient-to-r from-cyan-400/40 to-transparent sm:block" />
          </div>

          {/* Greeting */}

          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500 sm:text-xs">
            Hello, I'm
          </p>

          {/* Name */}

          <h1 className="mt-4 text-[3.5rem] font-black leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
            <span className="block text-white">Waqas</span>

            <span className="relative mt-2 block">
              <span className="absolute -inset-x-4 -inset-y-2 bg-cyan-400/[0.04] blur-2xl" />

              <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text pb-3 text-transparent">
                Hanif.
              </span>
            </span>
          </h1>

          {/* Role */}

          <div className="mt-9 min-h-[5rem]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-lg font-medium text-slate-500 sm:text-xl">
                I build as a
              </span>

              <span
                key={roles[roleIndex]}
                className="animate-[roleIn_0.55s_ease-out] text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-[1.7rem]"
              >
                {roles[roleIndex]}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <div className="h-[3px] w-3 rounded-full bg-purple-500/60" />
            </div>
          </div>

          {/* Description */}

          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-400 sm:text-base lg:text-[17px]">
            I create modern, scalable and high-performance web applications
            with the{" "}
            <span className="font-semibold text-slate-200">
              MERN stack
            </span>
            , combining clean React interfaces with robust Node.js,
            Express.js and MongoDB backends.
          </p>

          {/* Technologies */}

          <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="group rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[10px] font-semibold tracking-wide text-slate-500 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                style={{
                  transitionDelay: `${index * 25}ms`,
                }}
              >
                <span className="mr-1.5 text-cyan-400/60 transition-colors group-hover:text-cyan-400">
                  /
                </span>

                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/cv.pdf"
              download
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_15px_50px_rgba(34,211,238,0.22)]"
            >
              <span className="relative z-10">
                Download CV
              </span>

              <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
            >
              <span>Let's Talk</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Social Links */}

          <div className="mt-8">
            <SocialLinks />
          </div>

          {/* Stats */}

          <div className="mt-9 flex flex-wrap gap-0 border-t border-white/[0.08] pt-7">
            <div className="pr-7 sm:pr-10">
              <p className="text-xl font-black tracking-tight text-white">
                MERN
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Full Stack
              </p>
            </div>

            <div className="border-l border-white/[0.08] px-7 sm:px-10">
              <p className="text-xl font-black tracking-tight text-white">
                React
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Frontend
              </p>
            </div>

            <div className="border-l border-white/[0.08] pl-7 sm:pl-10">
              <p className="text-xl font-black tracking-tight text-white">
                Node
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Backend
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PROFILE ================= */}

        <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center lg:ml-auto">

          {/* Main Glow */}

          <div className="absolute inset-[4%] rounded-full bg-cyan-400/[0.10] blur-[100px]" />

          {/* ================= PARTICLE SYSTEM ================= */}

          <div className="pointer-events-none absolute inset-[-85px] z-0">

            {/* Orbit Ring 1 */}

            <div className="absolute left-1/2 top-1/2 h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.07]" />

            {/* Orbit Ring 2 */}

            <div className="absolute left-1/2 top-1/2 h-[126%] w-[126%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

            {/* Rotating Orbit */}

            <div className="absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 animate-[orbit_15s_linear_infinite]">

              <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />

              <span className="absolute bottom-[8%] right-[8%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)]" />

              <span className="absolute bottom-[20%] left-[3%] h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />
            </div>

            {/* Reverse Orbit */}

            <div className="absolute left-1/2 top-1/2 h-[128%] w-[128%] -translate-x-1/2 -translate-y-1/2 rotate-[35deg] animate-[orbitReverse_20s_linear_infinite]">

              <span className="absolute right-[13%] top-[6%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />

              <span className="absolute bottom-[5%] left-[25%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]" />
            </div>

            {/* Floating Particles */}

            <span className="particle absolute left-[10%] top-[27%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]" />

            <span className="particle-delay absolute right-[7%] top-[35%] h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,1)]" />

            <span className="particle-slow absolute left-[19%] bottom-[17%] h-1 w-1 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,1)]" />

            <span className="particle absolute right-[17%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]" />

            <span className="particle-delay absolute left-[4%] top-[55%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

            <span className="particle-slow absolute right-[3%] top-[65%] h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
          </div>

          {/* ================= 3D CARD ================= */}

          <div
            className="relative z-10 w-full"
            style={{
              transform: `
                perspective(1200px)
                rotateY(${mouse.x * 3}deg)
                rotateX(${mouse.y * -3}deg)
                translate3d(${mouse.x * -5}px, ${mouse.y * -5}px, 0)
              `,
              transition: "transform 0.2s ease-out",
            }}
          >

            {/* Outer Rings */}

            <div className="absolute inset-[-35px] rounded-[3.5rem] border border-cyan-400/[0.10]" />

            <div className="absolute inset-[-60px] rounded-[4rem] border border-white/[0.035]" />

            {/* Small Glow Dots */}

            <div className="absolute -right-1 top-[15%] z-30 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />

            <div className="absolute bottom-[20%] -left-2 z-30 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,1)]" />

            <div className="absolute left-[18%] top-[-25px] z-30 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />

            {/* ================= MAIN PROFILE CARD ================= */}

            <div className="relative aspect-[0.86] w-full overflow-hidden rounded-[2.8rem] border border-white/[0.14] bg-white/[0.035] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl">

              <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-slate-900">

                {/* Profile Image */}

                <div className="absolute inset-0 overflow-hidden">

                  <img
                    src="/profile.jpg"
                    alt="Waqas Hanif"
                    className="absolute left-1/2 top-1/2 h-[100%] w-[100%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-[center_38%] animate-[profileFloat_6s_ease-in-out_infinite]"
                  />

                  {/* Bottom Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/10 to-transparent" />

                  {/* Vignette */}

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(2,6,23,0.35)_100%)]" />

                  {/* Color Tint */}

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-purple-500/[0.09] mix-blend-screen" />

                  {/* Moving Light */}

                  <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 rotate-[15deg] bg-gradient-to-r from-transparent via-white/[0.09] to-transparent blur-xl animate-[photoLight_8s_ease-in-out_infinite]" />
                </div>

                {/* Top Left Badge */}

                <div className="absolute left-5 top-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3.5 py-2 shadow-xl backdrop-blur-xl">

                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      MERN Developer
                    </span>
                  </div>
                </div>

                {/* Code Badge */}

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/65 font-mono text-xs font-bold text-cyan-300 shadow-xl backdrop-blur-xl">
                  {"</>"}
                </div>

                {/* Bottom Information */}

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl">

                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="text-lg font-black tracking-tight text-white">
                          Waqas Hanif
                        </p>

                        <div className="mt-1 flex items-center gap-2">

                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                          <p className="text-[11px] text-slate-500">
                            Full Stack Web Developer
                          </p>

                        </div>
                      </div>

                      <div className="hidden text-right sm:block">

                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-600">
                          Stack
                        </p>

                        <p className="mt-1 text-xs font-bold text-cyan-400">
                          MERN
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* ================= MERN FLOATING CARD ================= */}

            <div className="absolute -bottom-7 -left-5 rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-2xl sm:-left-10">

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-600">
                Core Stack
              </p>

              <div className="mt-2 flex items-center gap-1.5">

                {["M", "E", "R", "N"].map((letter) => (
                  <span
                    key={letter}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.05] text-xs font-black text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    {letter}
                  </span>
                ))}

              </div>
            </div>

            {/* ================= STATUS ================= */}

            <div className="absolute -right-3 top-9 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-2xl backdrop-blur-2xl sm:-right-8">

              <div className="flex items-center gap-2.5">

                <span className="relative flex h-2 w-2">

                  <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

                  <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                </span>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    Status
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold text-slate-300">
                    Building & Learning
                  </p>

                </div>

              </div>
            </div>

            {/* ================= EDUCATION ================= */}

            <div className="absolute -bottom-20 right-0 hidden max-w-[275px] rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-2xl backdrop-blur-2xl sm:block">

              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                Education
              </p>

              <p className="mt-1 text-[11px] font-semibold leading-5 text-slate-300">
                University of Management and Technology
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ================= SCROLL ================= */}

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">

        <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-slate-700">
          Scroll
        </span>

        <div className="flex h-9 w-5 justify-center rounded-full border border-white/10 pt-2">

          <span className="h-1.5 w-1 rounded-full bg-cyan-400 animate-bounce" />

        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        @keyframes profileFloat {
          0% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -4px, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes photoLight {
          0% {
            transform: translateX(-180%) rotate(15deg);
            opacity: 0;
          }

          25% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }

          75% {
            opacity: 0;
          }

          100% {
            transform: translateX(520%) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes roleIn {
          from {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.45;
          }

          50% {
            transform: translateY(-12px) scale(1.3);
            opacity: 1;
          }
        }

        .particle {
          animation: particleFloat 4s ease-in-out infinite;
        }

        .particle-delay {
          animation: particleFloat 5s ease-in-out 1.2s infinite;
        }

        .particle-slow {
          animation: particleFloat 6s ease-in-out 2s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .particle,
          .particle-delay,
          .particle-slow,
          .animate-\\[profileFloat_6s_ease-in-out_infinite\\],
          .animate-\\[photoLight_8s_ease-in-out_infinite\\],
          .animate-\\[roleIn_0.55s_ease-out\\],
          .animate-\\[orbit_15s_linear_infinite\\],
          .animate-\\[orbitReverse_20s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
