import { useEffect, useState } from "react";
import { MotionConfig, motion, useReducedMotion } from "motion/react";

const sections = [
  ["hero", "01", "Introduction"],
  ["story", "02", "The biology"],
  ["pipeline", "03", "The model"],
  ["lab", "04", "Prediction lab"],
  ["method", "05", "Method"],
];

const inputs = [
  { name: "CHEM", detail: "Molecular fingerprints", mark: "⌬", tone: "text-path-rose" },
  { name: "DG-Net", detail: "Drug target pathways", mark: "◎", tone: "text-[#89aaa0]" },
  { name: "EXP", detail: "Expression-derived pathways", mark: "∿", tone: "text-[#b6b8a6]" },
  { name: "MUT-Net", detail: "Mutation-derived pathways", mark: "⊹", tone: "text-[#d08b9a]" },
  { name: "CNV-Net", detail: "Copy-number pathways", mark: "⌁", tone: "text-[#83a7a3]" },
];

function Eyebrow({ children, tone = "rose" }) {
  const color = tone === "teal" ? "text-[#8bb7ad]" : "text-path-rose";
  return <p className={"mb-5 flex items-center gap-3 text-[9px] font-semibold tracking-[.2em] " + color}><span className="h-px w-6 bg-current" />{children}</p>;
}

function SectionLabel({ index, children }) {
  return <div className="flex items-center gap-3 text-[8px] tracking-[.17em] text-white/55"><span className="text-path-rose">{index} /</span><span className="h-px w-9 bg-white/30" /><span>{children}</span></div>;
}

function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.75, delay, ease: [0.2, 0.65, 0.25, 1] }}>{children}</motion.div>;
}

function MoleculeArt() {
  const reduced = useReducedMotion();
  return (
    <motion.div className="pointer-events-none absolute right-[-4vw] top-1/2 z-0 w-[62vw] max-w-[830px] -translate-y-1/2 md:right-[2vw]" animate={reduced ? undefined : { y: [0, -9, 0], rotate: [0, 0.4, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
      <svg viewBox="0 0 760 760" className="w-full overflow-visible" role="img" aria-labelledby="molecule-title molecule-description">
        <title id="molecule-title">An abstract molecular landscape</title>
        <desc id="molecule-description">Original cell-inspired organic forms representing connected drug and cancer biology.</desc>
        <defs>
          <radialGradient id="core" cx="35%" cy="30%" r="76%"><stop stopColor="#a96879" /><stop offset=".34" stopColor="#683945" /><stop offset=".75" stopColor="#201b22" /><stop offset="1" stopColor="#0b1115" /></radialGradient>
          <radialGradient id="rose-surface" cx="31%" cy="24%" r="80%"><stop stopColor="#eda0ae" /><stop offset=".32" stopColor="#da7b93" /><stop offset=".77" stopColor="#6d3e50" /><stop offset="1" stopColor="#17171c" /></radialGradient>
          <radialGradient id="teal-surface" cx="32%" cy="23%" r="78%"><stop stopColor="#8ba8a1" /><stop offset=".3" stopColor="#376e6f" /><stop offset=".76" stopColor="#1c393c" /><stop offset="1" stopColor="#0c1318" /></radialGradient>
          <radialGradient id="halo"><stop stopColor="#da7b93" stopOpacity=".28" /><stop offset="1" stopColor="#da7b93" stopOpacity="0" /></radialGradient>
          <filter id="surface-grain" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" seed="17" /><feColorMatrix type="saturate" values="0" /><feComponentTransfer><feFuncA type="table" tableValues="0 .12" /></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light" /></filter>
          <filter id="soft-halo"><feGaussianBlur stdDeviation="25" /></filter>
          <pattern id="speckles" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="3" cy="5" r=".7" fill="#f4f0eb" opacity=".32" /><circle cx="18" cy="17" r=".5" fill="#da7b93" opacity=".28" /></pattern>
        </defs>
        <circle cx="405" cy="370" r="285" fill="url(#halo)" filter="url(#soft-halo)" />
        <g fill="none" stroke="#da7b93" strokeOpacity=".28" strokeWidth="1.2"><path d="M102 476 C208 447 270 503 354 458 S526 371 655 399" /><path d="M151 245 C240 277 292 218 390 249 S535 323 611 261" strokeDasharray="3 9" /></g>
        <path d="M297 118c64-30 145-11 187 39 32 38 47 74 90 101 65 42 84 112 50 173-25 44-68 62-90 113-23 53-74 97-136 95-51-2-80-36-127-48-58-15-116-14-148-62-35-52-14-116 5-165 18-47 22-89 28-133 7-53 84-94 141-113Z" fill="url(#core)" filter="url(#surface-grain)" />
        <path d="M274 166c54-31 105 9 115 47 9 33-24 60-57 73-35 14-84 18-105-7-24-30 5-93 47-113Z" fill="url(#rose-surface)" filter="url(#surface-grain)" />
        <path d="M476 194c47-13 83 20 94 57 10 34-1 64-31 77-32 14-74-3-93-33-21-32-16-89 30-101Z" fill="url(#teal-surface)" filter="url(#surface-grain)" />
        <path d="M205 381c34-33 83-22 108 8 26 32 24 75-7 96-32 22-80 15-105-17-22-28-21-62 4-87Z" fill="url(#teal-surface)" filter="url(#surface-grain)" />
        <path d="M380 364c43-29 98-9 113 31 15 41-12 84-48 98-42 16-84-11-94-48-8-31 3-63 29-81Z" fill="url(#rose-surface)" filter="url(#surface-grain)" />
        <path d="M492 495c31-20 67-5 76 26 10 32-13 64-43 68-29 4-55-20-53-49 1-19 7-34 20-45Z" fill="url(#teal-surface)" filter="url(#surface-grain)" />
        <path d="M315 548c28-23 66-9 75 20 10 33-12 68-45 69-28 1-51-21-50-49 0-16 8-30 20-40Z" fill="url(#rose-surface)" filter="url(#surface-grain)" />
        <path d="M297 118c64-30 145-11 187 39 32 38 47 74 90 101 65 42 84 112 50 173-25 44-68 62-90 113-23 53-74 97-136 95-51-2-80-36-127-48-58-15-116-14-148-62-35-52-14-116 5-165 18-47 22-89 28-133 7-53 84-94 141-113Z" fill="url(#speckles)" opacity=".5" />
        <g fill="#f4f0eb" opacity=".68"><circle cx="171" cy="300" r="3" /><circle cx="607" cy="472" r="2.5" /><circle cx="336" cy="97" r="2" /><circle cx="564" cy="170" r="2" /><circle cx="240" cy="585" r="2.5" /><circle cx="626" cy="317" r="2" /></g>
      </svg>
      <div className="absolute bottom-[9%] right-[10%] text-[7px] tracking-[.17em] text-white/55"><b className="mr-3 text-path-rose">FIG. 01</b>ABSTRACT BIOLOGICAL LANDSCAPE</div>
    </motion.div>
  );
}

function App() {
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);
  const [compound, setCompound] = useState("");
  const [cellModel, setCellModel] = useState("");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max * 100 : 0);
      });
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-42% 0px -48% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", updateProgress);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const submitDemo = (event) => {
    event.preventDefault();
    if (!compound || !cellModel || loading) return;
    setLoading(true);
    window.setTimeout(() => {
      setResult(true);
      setLoading(false);
    }, reduced ? 0 : 450);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-hidden bg-path-slate text-path-ivory">
        <div className="fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent" aria-hidden="true"><motion.div className="h-full bg-path-rose" style={{ width: progress + "%" }} /></div>
        <header className="absolute inset-x-0 top-0 z-40 flex h-[78px] items-center border-b border-white/10 px-[6vw]">
          <a className="flex items-center gap-3 text-sm font-extrabold tracking-[.08em]" href="#hero" aria-label="PathDSP home" onClick={closeMenu}>
            <span className="relative block h-8 w-8 rounded-full border border-path-rose before:absolute before:inset-[4px] before:rounded-full before:border before:border-[#82aaa2] after:absolute after:inset-[11px] after:rounded-full after:bg-path-rose" />
            <span>PATH<span className="font-normal text-white/80">DSP</span><small className="mt-1.5 block text-[7px] font-normal tracking-[.17em] text-path-muted">RESEARCH PLATFORM</small></span>
          </a>
          <button className="ml-auto mr-4 flex flex-col gap-1.5 p-2 md:hidden" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
            <span className="h-px w-5 bg-path-ivory" /><span className="h-px w-5 bg-path-ivory" />
          </button>
          <nav id="main-navigation" className={(menuOpen ? "flex" : "hidden") + " absolute inset-x-0 top-[78px] flex-col border-b border-white/10 bg-[#203845] px-[6vw] py-4 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-[3vw] md:border-0 md:bg-transparent md:p-0"} aria-label="Main navigation">
            {[["#story", "The biology"], ["#pipeline", "The model"], ["#lab", "Prediction lab"], ["#method", "Method"]].map(([href, label]) => <a key={href} href={href} onClick={closeMenu} className="border-b border-white/10 py-3 text-[10px] tracking-[.08em] text-white/75 transition hover:text-path-rose md:border-0 md:py-0">{label}</a>)}
          </nav>
          <a className="hidden items-center gap-3 pl-8 text-[9px] tracking-[.1em] text-path-ivory transition hover:text-path-rose sm:flex" href="#lab">OPEN THE LAB <span className="text-base text-path-rose">↗</span></a>
        </header>

        <nav className="fixed right-[2vw] top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex" aria-label="Page sections">
          {sections.map(([id, number, label]) => <a key={id} href={"#" + id} aria-label={label} aria-current={activeSection === id ? "location" : undefined} className={"grid h-5 w-5 place-items-center rounded-full border transition " + (activeSection === id ? "border-path-rose" : "border-transparent hover:border-white/30")}><span className={"h-1 w-1 rounded-full " + (activeSection === id ? "bg-path-rose" : "bg-white/50")} /><span className="sr-only">{number}</span></a>)}
        </nav>

        <main>
          <section id="hero" className="relative flex min-h-[760px] items-center overflow-hidden bg-[radial-gradient(ellipse_at_76%_48%,rgba(55,110,111,.28),transparent_39%),linear-gradient(125deg,#344b5b,#2f4454_60%,#263c49)] px-[7vw] pb-24 pt-32 md:min-h-screen md:px-[9vw]">
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative z-10 w-full md:w-[56%]">
              <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: reduced ? 0 : 0.1 } } }}>
                <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduced ? 0 : 0.55 }} className="mb-6 flex items-center gap-3 text-[8px] font-semibold tracking-[.2em] text-white/75"><span className="h-px w-6 bg-path-rose" />EXPLAINABLE AI <span className="text-path-rose">×</span> CANCER RESEARCH</motion.p>
                <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduced ? 0 : 0.75 }} className="max-w-[760px] text-[clamp(3.25rem,7.4vw,6.4rem)] font-extrabold leading-[.9] tracking-[-.075em]">THE BIOLOGY<br />BEHIND THE<br /><em className="not-italic text-path-rose">RESPONSE.</em></motion.h1>
                <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduced ? 0 : 0.6 }} className="mt-6 max-w-sm text-[13px] leading-7 text-white/75">Explore how drug chemistry and cancer-cell pathways inform drug-sensitivity prediction.</motion.p>
                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduced ? 0 : 0.6 }} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a href="#story" className="inline-flex h-12 items-center gap-7 bg-path-ivory px-5 text-[9px] font-bold uppercase tracking-wide text-path-ink transition hover:-translate-y-1 hover:bg-path-rose">Explore the model <span className="text-base font-normal">↓</span></a>
                  <a href="#lab" className="text-[9px] uppercase tracking-wide text-white/75 transition hover:text-path-rose">Open prediction lab <span className="pl-1 text-path-rose">↗</span></a>
                </motion.div>
              </motion.div>
              <p className="mt-14 flex items-center gap-2 text-[7px] tracking-[.16em] text-white/50"><span className="h-1 w-1 rounded-full bg-path-rose" />PATHDSP / RESEARCH EXPERIENCE <span className="ml-6 text-white/35">01 — 05</span></p>
            </div>
            <MoleculeArt />
            <a href="#story" className="absolute bottom-6 left-[7vw] flex items-center gap-3 text-[7px] tracking-[.16em] text-white/55 md:left-1/2 md:-translate-x-1/2">SCROLL TO ENTER <span className="h-px w-9 bg-white/40" />↓</a>
          </section>

          <section id="story" className="scroll-mt-16 bg-path-wine px-[7vw] py-20 md:px-[9.5vw] md:py-24">
            <SectionLabel index="01">FROM COMPOUND TO CELL</SectionLabel>
            <Reveal className="mt-16 flex flex-col justify-between gap-8 md:mt-20 md:flex-row md:items-end">
              <div><Eyebrow>A RESPONSE IS NEVER JUST A NUMBER</Eyebrow><h2 className="text-[clamp(3rem,6.5vw,5.2rem)] font-extrabold leading-[.93] tracking-[-.07em]">Two sides of<br />the same <em className="not-italic text-path-rose">signal.</em></h2></div>
              <p className="max-w-sm pb-1 text-[12px] leading-7 text-white/70">A drug brings its own chemistry. A cancer cell brings a changing biological context. PathDSP joins those feature streams to estimate response—and opens the model to inspection.</p>
            </Reveal>
            <Reveal className="mt-12 grid items-center gap-8 border-y border-white/15 py-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-[7vw]">
              <svg viewBox="0 0 800 420" role="img" aria-label="Drug chemistry features connect to a cancer-cell pathway network" className="w-full">
                <defs><radialGradient id="networkGlow"><stop stopColor="#376e6f" stopOpacity=".5" /><stop offset="1" stopColor="#376e6f" stopOpacity="0" /></radialGradient><linearGradient id="networkLine"><stop stopColor="#da7b93" /><stop offset="1" stopColor="#376e6f" /></linearGradient></defs>
                <circle cx="370" cy="205" r="185" fill="url(#networkGlow)" />
                <g fill="none" stroke="#da7b93" strokeOpacity=".55"><path d="M84 112Q220 95 333 185T704 158" /><path d="M79 208Q220 210 341 183T718 196" /><path d="M86 305Q225 295 351 201T712 261" /></g>
                <g fill="none" stroke="#82aaa2" strokeOpacity=".5"><path d="m390 192 72-86 75 30 48-63 85 44M398 213l82 85 75-34 53 76 91-52M462 106l18 192m57-162 18 128m30-191 23 267" /></g>
                <g fill="#2e151b" stroke="#da7b93" strokeWidth="2"><circle cx="111" cy="113" r="9" /><circle cx="151" cy="209" r="6" /><circle cx="116" cy="305" r="8" /><circle cx="210" cy="105" r="4" /></g>
                <g fill="#1c3334" stroke="#8bb7ad" strokeWidth="2"><circle cx="462" cy="106" r="8" /><circle cx="537" cy="136" r="5" /><circle cx="585" cy="73" r="7" /><circle cx="480" cy="298" r="8" /><circle cx="555" cy="264" r="5" /><circle cx="608" cy="340" r="7" /><circle cx="670" cy="117" r="5" /></g>
                <circle cx="356" cy="192" r="13" fill="#f4f0eb" /><circle cx="356" cy="192" r="27" fill="none" stroke="url(#networkLine)" />
              </svg>
              <div className="divide-y divide-white/15 border-y border-white/15">
                {[["01", "The compound", "Molecular fingerprints describe chemical structure. Drug-target information can add biological context where available."], ["02", "The cell", "Expression, mutation, and copy-number data represent distinct aspects of a cancer cell’s molecular state."], ["03", "The relationship", "Pathway features structure those inputs. A feature contribution describes model behavior, not biological cause."]].map(([n, title, copy]) => <div key={n} className="grid grid-cols-[30px_1fr] gap-3 py-4"><span className="pt-1 text-[9px] text-path-rose">{n}</span><div><h3 className="text-sm font-medium">{title}</h3><p className="mt-1 max-w-sm text-[9px] leading-5 text-white/60">{copy}</p></div></div>)}
              </div>
            </Reveal>
            <div className="mt-6 flex items-center gap-3 text-[7px] tracking-[.16em] text-white/45"><span className="text-path-rose">CHEMISTRY MEETS CONTEXT</span><i className="h-px w-10 bg-white/30" />01—03</div>
          </section>

          <section id="pipeline" className="scroll-mt-16 bg-path-deep px-[7vw] py-20 md:px-[9.5vw] md:py-24">
            <SectionLabel index="02">THE PATHDSP PIPELINE</SectionLabel>
            <Reveal className="mt-16 flex flex-col justify-between gap-8 md:mt-20 md:flex-row md:items-end">
              <div><Eyebrow tone="teal">FEATURES → ESTIMATE → EXPLANATION</Eyebrow><h2 className="text-[clamp(3rem,6.5vw,5.2rem)] font-extrabold leading-[.93] tracking-[-.07em]">Many inputs.<br /><em className="not-italic text-path-rose">One view.</em></h2></div>
              <p className="max-w-sm pb-1 text-[12px] leading-7 text-white/70">Five feature streams are integrated by a fully connected neural network. The response target and its SHAP explanation are presented together.</p>
            </Reveal>
            <Reveal className="mt-12 grid gap-8 border-y border-white/15 py-8 md:grid-cols-[1.05fr_.35fr_1fr_.82fr] md:items-center md:gap-5">
              <div>
                <div className="mb-3 flex justify-between text-[7px] tracking-[.15em] text-white/45"><span>FEATURE INPUTS</span><span>01—05</span></div>
                {inputs.map((input) => <div key={input.name} className={"grid h-[48px] grid-cols-[28px_1fr_34px] items-center gap-2 border-t border-white/10 " + input.tone}><span className="text-center text-base">{input.mark}</span><div><b className="block text-[9px] tracking-wide text-path-ivory">{input.name}</b><small className="block text-[7px] text-white/50">{input.detail}</small></div><span className="h-px bg-current opacity-60" /></div>)}
              </div>
              <div className="flex h-8 items-center justify-center md:h-56 md:flex-col md:justify-around" aria-hidden="true"><span className="text-path-rose md:hidden">↓</span>{inputs.map((input) => <span key={input.name} className="hidden h-px w-full bg-gradient-to-r from-path-rose/30 to-[#82aaa2] md:block" />)}</div>
              <div>
                <div className="mb-3 flex justify-between text-[7px] tracking-[.15em] text-white/45"><span>LEARNED MODEL</span><span>06</span></div>
                <div className="relative min-h-24 border border-white/25 bg-black/10 p-4"><small className="block text-[7px] tracking-[.14em] text-[#8bb7ad]">FEATURE INTEGRATION</small><b className="mt-2 block text-sm font-medium leading-tight">Shared<br />representation</b><span className="absolute bottom-2 right-3 text-path-rose">✳</span></div>
                <div className="mx-6 h-7 border-l border-path-rose/60" />
                <div className="relative min-h-24 border border-white/25 bg-black/10 p-4"><small className="block text-[7px] tracking-[.14em] text-[#8bb7ad]">PREDICTOR</small><b className="mt-2 block text-sm font-medium leading-tight">Fully connected<br />neural network</b><span className="absolute bottom-2 right-3 text-path-rose">···</span></div>
              </div>
              <div>
                <div className="mb-3 flex justify-between text-[7px] tracking-[.15em] text-white/45"><span>MODEL OUTPUTS</span><span>07—08</span></div>
                {[["07", "RESPONSE TARGET", "IC50", "Drug response estimate"], ["08", "EXPLANATION", "SHAP", "Feature contributions"]].map(([n, label, name, detail]) => <div key={n} className="grid min-h-[83px] grid-cols-[23px_1fr_14px] items-center gap-1 border-t border-white/15 last:border-b"><span className="self-start pt-3 text-[8px] text-path-rose">{n}</span><div><small className="block text-[6px] tracking-[.12em] text-white/50">{label}</small><b className="text-base font-medium">{name}</b><p className="text-[7px] text-white/55">{detail}</p></div><span className="text-sm text-[#8bb7ad]">↗</span></div>)}
                <p className="mt-3 text-[8px] leading-5 text-white/50">Feature contribution describes model behavior; it does not establish causation.</p>
              </div>
            </Reveal>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[7px] tracking-[.1em] text-white/45"><span>MODEL DEVELOPMENT: <b className="font-normal text-[#8bb7ad]">GDSC</b></span><span>INDEPENDENT EVALUATION REPORTED: <b className="font-normal text-[#8bb7ad]">CCLE</b></span><span>REPRODUCTION: NOT VERIFIED HERE</span></p>
          </section>

          <section id="lab" className="relative scroll-mt-16 overflow-hidden bg-[linear-gradient(115deg,#2f4454,#243e46)] px-[7vw] py-20 md:px-[9.5vw] md:py-24">
            <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full border border-path-rose/25 shadow-[0_0_0_38px_rgba(55,110,111,.12),0_0_0_76px_rgba(55,110,111,.08)]" aria-hidden="true" />
            <motion.div aria-hidden="true" className="pointer-events-none absolute right-[15%] top-[38%] h-28 w-28 rounded-[45%_55%_52%_48%] bg-[radial-gradient(circle_at_30%_25%,#da7b93,#54333e_52%,#112428)] shadow-[0_0_55px_rgba(218,123,147,.16)]" animate={reduced ? undefined : { rotate: [0, 8, -5, 0], scale: [1, 1.03, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
            <div className="relative z-10"><SectionLabel index="03">PREDICTION LAB</SectionLabel>
              <Reveal className="mt-16 flex flex-col justify-between gap-8 md:mt-20 md:flex-row md:items-end"><div><Eyebrow>A RESEARCH PROTOTYPE</Eyebrow><h2 className="text-[clamp(3rem,6.5vw,5.2rem)] font-extrabold leading-[.93] tracking-[-.07em]">See the model<br />in <em className="not-italic text-path-rose">context.</em></h2></div><p className="max-w-sm pb-1 text-[12px] leading-7 text-white/70">Choose two demo inputs to preview how a prediction and its feature explanation could appear. No trained model or live data is connected.</p></Reveal>
              <Reveal className="mt-10 grid border border-white/25 bg-black/20 md:grid-cols-[.78fr_1.22fr]">
                <form className="border-b border-white/15 bg-black/10 p-5 sm:p-7 md:border-b-0 md:border-r" onSubmit={submitDemo}>
                  <div className="flex items-center justify-between text-[7px] tracking-[.15em] text-white/55"><span>INPUT / 01</span><span className="border border-path-rose/50 px-2 py-1 text-[6px] text-[#eda6b5]">● DEMO MODE</span></div>
                  <label className="mt-7 flex justify-between text-[10px] text-white/85" htmlFor="compound">Drug compound <span className="text-white/40">01</span></label>
                  <select id="compound" value={compound} onChange={(event) => setCompound(event.target.value)} required className="mt-2 h-11 w-full appearance-none border border-white/25 bg-white/5 px-3 text-[10px] text-path-ivory outline-none focus:border-path-rose">
                    <option value="" disabled>Select a demo compound</option><option>Demo compound A</option><option>Demo compound B</option><option>Demo compound C</option>
                  </select>
                  <label className="mt-5 flex justify-between text-[10px] text-white/85" htmlFor="cell-model">Cancer-cell model <span className="text-white/40">02</span></label>
                  <select id="cell-model" value={cellModel} onChange={(event) => setCellModel(event.target.value)} required className="mt-2 h-11 w-full appearance-none border border-white/25 bg-white/5 px-3 text-[10px] text-path-ivory outline-none focus:border-path-rose">
                    <option value="" disabled>Select a demo cell model</option><option>Demo cell model 01</option><option>Demo cell model 02</option><option>Demo cell model 03</option>
                  </select>
                  <button className="mt-6 flex h-11 w-full items-center justify-between bg-path-rose px-4 text-[9px] font-bold uppercase tracking-wide text-path-ink transition hover:bg-path-ivory disabled:cursor-wait disabled:opacity-60" disabled={loading}><span>{loading ? "Preparing demo view…" : "Generate demo view"}</span><span className="text-sm font-normal">↗</span></button>
                  <p className="mt-4 text-[8px] leading-5 text-white/45">No personal or patient data is requested. Inputs only render this local demonstration.</p>
                </form>
                <div className="min-h-[345px] p-5 sm:p-7" aria-live="polite" aria-atomic="true">
                  {!result ? <div className="flex h-full min-h-[290px] flex-col items-center justify-center text-center text-white/45"><span className="text-3xl text-path-rose">✳</span><p className="mt-4 text-[9px] leading-5 tracking-[.16em]">YOUR EXPLORATION<br /><b className="font-medium text-path-ivory">STARTS HERE</b></p><span className="my-3 h-px w-8 bg-path-rose" /><small className="text-[7px] tracking-[.12em]">SELECT TWO DEMO INPUTS TO CONTINUE</small></div> : <motion.div initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .4 }}>
                    <div className="flex items-center justify-between text-[7px] tracking-[.14em] text-white/55"><span>OUTPUT / PREVIEW</span><span className="border border-path-rose/50 px-2 py-1 text-[6px] text-[#eda6b5]">● DEMO DATA</span></div>
                    <p className="mt-6 text-[7px] tracking-[.15em] text-[#8bb7ad]">ILLUSTRATIVE RESPONSE VIEW</p><h3 className="mt-1 text-3xl font-medium leading-[1.05] tracking-[-.05em]">Synthetic demo<br /><em className="not-italic text-path-rose">profile ready.</em></h3>
                    <p className="mt-2 text-[9px] text-white/55">{compound} × {cellModel}</p><div className="my-5 h-px bg-white/15" />
                    <div className="flex justify-between text-[7px] tracking-[.12em] text-white/55"><span>FEATURE CONTRIBUTIONS</span><span className="text-path-rose">ILLUSTRATIVE ONLY</span></div>
                    {[["EXP / pathway feature", 72, "rose"], ["CHEM / fingerprint", 48, "teal"], ["MUT-Net / pathway feature", 31, "rose"]].map(([label, width, color]) => <div key={label} className="mt-3"><div className="flex justify-between text-[8px] text-white/80"><span>{label}</span><small className="text-[6px] uppercase text-white/40">synthetic</small></div><div className="mt-1 h-[3px] bg-white/15"><motion.div className={"h-full " + (color === "rose" ? "bg-path-rose" : "bg-[#83aaa1]")} initial={reduced ? false : { width: 0 }} animate={{ width: width + "%" }} transition={{ duration: reduced ? 0 : .8, ease: "easeOut" }} /></div><small className="text-[6px] text-white/45">Example attribution toward output</small></div>)}
                    <p className="mt-3 text-[7px] leading-4 text-white/45">Bars are fabricated interface examples. SHAP describes model attribution and does not imply biological causation.</p>
                  </motion.div>}
                </div>
              </Reveal>
              <p className="mt-5 flex items-center gap-3 text-[7px] tracking-[.14em] text-white/45"><span className="text-path-rose">DEMONSTRATION INTERFACE</span><i className="h-px w-9 bg-white/30" />NOT FOR CLINICAL USE</p>
            </div>
          </section>

          <section id="method" className="scroll-mt-16 bg-[#101a20] px-[7vw] py-20 md:px-[9.5vw] md:py-24">
            <SectionLabel index="04">WHAT THIS EXPERIENCE REPRESENTS</SectionLabel>
            <Reveal className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[.82fr_1.18fr] md:gap-[9vw]">
              <div><Eyebrow tone="teal">RESEARCH, CLEARLY FRAMED</Eyebrow><h2 className="text-[clamp(3rem,6vw,4.8rem)] font-extrabold leading-[.94] tracking-[-.07em]">Useful insight<br />starts with<br /><em className="not-italic text-path-rose">honesty.</em></h2></div>
              <div><p className="mb-7 max-w-xl text-[14px] leading-6">PathDSP is inspired by the 2021 study <i className="text-[#d8a0aa]">Explainable drug sensitivity prediction through cancer pathway enrichment</i> by Yi-Ching Tang and Assaf Gottlieb.</p>
                {[["01", "Research basis", "The paper describes drug and cancer-cell features, a fully connected neural network, and SHAP explanations. It reports GDSC model development and independent evaluation using CCLE."], ["02", "What this page demonstrates", "A visual pipeline explanation and an interactive synthetic preview of prediction and attribution states."], ["03", "What is not connected", "No project repository, trained model, dataset, preprocessing workflow, or prediction endpoint was available. This demo contains no real predictions or measured results."]].map(([n, title, copy]) => <div key={n} className="grid grid-cols-[27px_1fr] gap-3 border-t border-white/15 py-4"><span className="text-[8px] text-path-rose">{n}</span><div><b className="text-[9px]">{title}</b><p className="mt-1 text-[8px] leading-5 text-white/60">{copy}</p></div></div>)}
                <p className="border-t border-white/15 pt-3 text-[7px] leading-5 text-white/45">Tang, Y.-C. &amp; Gottlieb, A. <i>Scientific Reports</i> (2021). Research interpretation only; reproduction status requires verification against an implementation.</p>
              </div>
            </Reveal>
          </section>

          <section className="relative flex min-h-[440px] items-center overflow-hidden bg-[linear-gradient(105deg,#2e151b_0%,#2e151b_48%,#1c3334_100%)] px-[7vw] py-20 md:min-h-[510px] md:px-[9.5vw]">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-path-rose/20 shadow-[0_0_0_40px_rgba(55,110,111,.08),0_0_0_84px_rgba(55,110,111,.06)]" aria-hidden="true" />
            <Reveal className="relative z-10"><Eyebrow>PATHDSP / RESEARCH PROTOTYPE</Eyebrow><h2 className="text-[clamp(2.45rem,6vw,4.7rem)] font-extrabold leading-[.96] tracking-[-.07em]">FROM MOLECULAR DATA<br />TO <em className="not-italic text-path-rose">EXPLAINABLE</em><br />INSIGHT.</h2><p className="mt-5 max-w-sm text-[10px] leading-6 text-white/65">Explore the relationship between drug features, cancer-cell pathways, and predicted response.</p><a href="#lab" className="mt-6 inline-flex h-11 items-center gap-6 bg-path-ivory px-4 text-[8px] font-bold uppercase tracking-wide text-path-ink transition hover:-translate-y-1 hover:bg-path-rose">Open the prediction lab <span className="text-sm font-normal">↗</span></a></Reveal>
            <div className="absolute bottom-8 right-[8vw] text-[10px] font-bold tracking-[.2em] text-white/60">PATH<span className="block text-lg text-path-rose">DSP</span><small className="mt-2 block text-[5px] font-normal text-white/45">MODEL / BIOLOGY / RESPONSE</small></div>
          </section>
        </main>
        <footer className="grid min-h-32 grid-cols-2 items-center gap-3 bg-path-ink px-[7vw] py-6 md:grid-cols-[1fr_1fr_auto] md:px-[6vw]">
          <a href="#hero" className="flex items-center gap-3 text-xs font-bold tracking-[.08em]"><span className="relative block h-7 w-7 rounded-full border border-path-rose before:absolute before:inset-1 before:rounded-full before:border before:border-[#82aaa2] after:absolute after:inset-[10px] after:rounded-full after:bg-path-rose" /><span>PATHDSP<small className="mt-1 block text-[6px] font-normal tracking-[.15em] text-white/45">EXPLAINABLE DRUG SENSITIVITY</small></span></a>
          <p className="col-span-2 text-[7px] leading-5 text-white/45 md:col-span-1">A visual research prototype<br />Inspired by Tang &amp; Gottlieb, 2021</p>
          <a href="#hero" className="justify-self-end text-[7px] tracking-[.13em] text-white/60 hover:text-path-rose">BACK TO TOP <span className="pl-2 text-path-rose">↑</span></a>
          <p className="col-span-2 border-t border-white/10 pt-3 text-[6px] tracking-[.14em] text-white/35 md:col-span-3">© PATHDSP / RESEARCH PROTOTYPE</p>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
