import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "waqashanif6565@gmail.com",
    href: "mailto:waqashanif6565@gmail.com",
    description: "Let's discuss your project",
    external: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        aria-hidden="true"
      >
        {/* Gmail-style envelope */}
        <path
          fill="#EA4335"
          d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z"
        />
        <path
          fill="#fff"
          d="M5.2 7.1v10.1c0 .2.1.3.3.3h1.8v-7.2L12 14l4.7-3.7v7.2h1.8c.2 0 .3-.1.3-.3V7.1l-6.8 5.3L5.2 7.1Z"
        />
        <path
          fill="#C5221F"
          d="m5.2 7.1 6.8 5.3 6.8-5.3v-.2c0-.2-.1-.3-.3-.3h-.5L12 11.3 6 6.6h-.5c-.2 0-.3.1-.3.3v.2Z"
        />
      </svg>
    ),
  },

  {
    label: "LinkedIn",
    value: "linkedin.com/in/waqas-hanif-9b9597438",
    href: "https://www.linkedin.com/in/waqas-hanif-9b9597438",
    description: "Connect professionally",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <rect
          x="2.5"
          y="2.5"
          width="19"
          height="19"
          rx="4"
          fill="#0A66C2"
        />
        <path
          fill="#fff"
          d="M7.1 9.6H4.6v8.1h2.5V9.6ZM5.85 5.4a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM9.1 9.6h2.4v1.1h.04c.33-.63 1.15-1.3 2.37-1.3 2.54 0 3.01 1.67 3.01 3.84v4.46h-2.5v-3.95c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08v4.02H9.1V9.6Z"
        />
      </svg>
    ),
  },

  {
    label: "GitHub",
    value: "github.com/waqas-hanif",
    href: "https://github.com/waqas-hanif",
    description: "Explore my code",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          fill="#F0F6FC"
          d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.63c-2.65.58-3.21-1.12-3.21-1.12-.44-1.1-1.06-1.39-1.06-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.25 1.05 2.8.8.09-.63.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.62.98a9.12 9.12 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.67-2.23 4.48-4.36 4.71.35.3.66.88.66 1.78v2.64c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:waqashanif6565@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white"
    >
      <div className="pointer-events-none absolute -left-48 top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              something amazing.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Have a project idea, collaboration opportunity or simply want to
            connect? I'm always open to discussing modern web applications and
            full-stack development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <div className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-blue-500/[0.05] p-7 shadow-2xl backdrop-blur-2xl sm:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl transition duration-700 group-hover:bg-cyan-400/20" />

              <div className="relative flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Available for Projects
                </span>
              </div>

              <h3 className="relative mt-7 text-3xl font-black text-white sm:text-4xl">
                Waqas Hanif
              </h3>

              <p className="relative mt-2 text-sm font-medium text-blue-400">
                Full Stack MERN Developer
              </p>

              <p className="relative mt-5 text-sm leading-7 text-slate-400">
                Building modern, responsive and complete web applications
                across the frontend, backend and database layers.
              </p>

              <div className="relative mt-7 flex flex-wrap gap-2">
                {["React", "Node.js", "Express.js", "MongoDB"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-[11px] font-semibold text-slate-500 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-3">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={
                    contact.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
                >
                  <div className="pointer-events-none absolute -right-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-cyan-400/0 blur-2xl transition duration-500 group-hover:bg-cyan-400/15" />

                  {/* Brand Icon */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-white/20">
                    <span className="transition duration-300 group-hover:scale-110">
                      {contact.icon}
                    </span>
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                      {contact.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-slate-300 transition duration-300 group-hover:text-white">
                      {contact.value}
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      {contact.description}
                    </p>
                  </div>

                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-2xl sm:p-9">
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                    Start a Conversation
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    Tell me about your project
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fill out the form and your email app will open with the
                    message prepared for me.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 sm:flex">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 7 9-7" />
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-cyan-400/[0.03] focus:ring-4 focus:ring-cyan-400/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-cyan-400/[0.03] focus:ring-4 focus:ring-cyan-400/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-cyan-400/[0.03] focus:ring-4 focus:ring-cyan-400/5"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]"
                >
                  <span>Send Message</span>

                  <span className="text-lg transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                <p className="text-xs text-slate-600">
                  Messages will be sent to{" "}
                  <span className="text-slate-500">
                    waqashanif6565@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-2xl sm:p-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Let's Connect
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Have an idea? Let's turn it into a real product.
              </h3>
            </div>

            <a
              href="mailto:waqashanif6565@gmail.com"
              className="group flex shrink-0 items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fill="#EA4335"
                  d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z"
                />
                <path
                  fill="#fff"
                  d="M5.2 7.1v10.1c0 .2.1.3.3.3h1.8v-7.2L12 14l4.7-3.7v7.2h1.8c.2 0 .3-.1.3-.3V7.1l-6.8 5.3L5.2 7.1Z"
                />
              </svg>

              <span>Email Me</span>

              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} Waqas Hanif. Built with React &
            passion for modern web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
