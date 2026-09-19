import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(
          link.href.replace("#", "")
        );

        if (section) {
          const top = section.getBoundingClientRect().top;

          if (top <= 180) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (event, href) => {
    event.preventDefault();

    const section = document.getElementById(href.replace("#", ""));

    if (!section) return;

    setOpen(false);

    const navbarHeight = 80;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setActive(href.replace("#", ""));
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-cyan-400/10 bg-slate-950/90 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
          : "border-b border-white/5 bg-slate-950/50 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => handleLinkClick(event, "#home")}
          className="group relative flex items-center text-xl font-black tracking-tight text-white sm:text-2xl"
        >
          <span className="text-cyan-400 transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
            &lt;
          </span>

          <span className="mx-1 transition duration-300 group-hover:text-cyan-100">
            Waqas
          </span>

          <span className="text-cyan-400 transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
            /&gt;
          </span>

          <span className="absolute -inset-3 -z-10 rounded-xl bg-cyan-400/0 blur-xl transition duration-500 group-hover:bg-cyan-400/10" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden max-w-[75%] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl md:flex">
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  handleLinkClick(event, link.href)
                }
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 lg:px-3.5 lg:text-sm ${
                  isActive
                    ? "text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]" />
                )}

                <span className="relative z-10">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-lg transition duration-300 group-hover:text-cyan-400">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open
            ? "max-h-[700px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="grid gap-2">
            {links.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) =>
                    handleLinkClick(event, link.href)
                  }
                  className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                      : "border-white/5 bg-white/[0.02] text-slate-400 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:text-white"
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${index * 35}ms`
                      : "0ms",
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] tracking-widest text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-medium">
                      {link.name}
                    </span>
                  </span>

                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;