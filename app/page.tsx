"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

const experiences = [
  {
    years: "May 2023 - Present",
    role: "E9 Solutions (Senior Frontend Developer)",
    text: "Designed AI-focused product interfaces, built a reusable Storybook component system, and shipped production-ready features across teams.",
  },
  {
    years: "June 2022 - Jan 2021",
    role: "Hyperverge Technologies (Internship)",
    text: "Built frontend modules for a CLM product, strengthened React fundamentals, and delivered responsive components under fast-moving requirements.",
  },
  {
    years: "June 2022 - Present",
    role: "Freelance Projects",
    text: "Delivered 15+ web and mobile projects and handled end-to-end product cycles from requirements to release.",
  },
  {
    years: "Core Strength",
    role: "Client-Facing Product Delivery",
    text: "Translate non-technical needs into actionable product tasks while coordinating with design, backend, and business stakeholders.",
  },
];

const projects = [
  {
    title: "Twitter Clone",
    subtitle: "React + Tailwind",
    text: "Front-end clone of Twitter login and timeline pages using React and Tailwind CSS.",
  },
  {
    title: "Instagram Clone",
    subtitle: "Interactive Social UI",
    text: "Functional Instagram-style interface with account creation, posts, and comments.",
  },
  {
    title: "Snake Game",
    subtitle: "HTML, CSS, JS",
    text: "Classic browser snake game implemented with vanilla HTML, CSS, and JavaScript.",
  },
  {
    title: "Wordle Clone",
    subtitle: "Game Logic",
    text: "Word puzzle clone where users attempt to guess a five-letter word with feedback.",
  },
  {
    title: "Tic Tac Toe",
    subtitle: "Vanilla JS Project",
    text: "Simple interactive Tic Tac Toe game built with core web technologies.",
  },
];

const freelanceProjects = [
  {
    title: "TFS Lounge Management",
    scope: "Used across airports in India",
    text: "Built and supported lounge workflow software used operationally across Indian airport environments.",
  },
  {
    title: "Duncan Hearing",
    scope: "Healthcare software for US hospitals",
    text: "Developed software workflows focused on hearing-care use cases for hospital teams and patients.",
  },
  {
    title: "Ecommerce Websites",
    scope: "Multiple client builds",
    text: "Delivered multiple ecommerce platforms with responsive UX, product browsing, checkout flows, and admin-friendly setup.",
  },
  {
    title: "Many More Client Projects",
    scope: "Ongoing freelance delivery",
    text: "Handled a broad mix of web and mobile projects end-to-end, from discovery and planning to launch and handover.",
  },
];

const steps = [
  {
    number: "01",
    title: "Frontend",
    text: "React JS, Next JS, Vue 2/3, JavaScript, HTML/CSS",
  },
  {
    number: "02",
    title: "Backend / Data",
    text: "Node JS, MongoDB, Python, Git",
  },
  {
    number: "03",
    title: "Styling / Tooling",
    text: "Tailwind CSS, SCSS, reusable component architecture",
  },
  {
    number: "04",
    title: "Design + AI",
    text: "Figma, Prophet, XGBoost, product-focused experimentation",
  },
];

const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ajayjayaprakash8@gmail.com";
const githubUrl = "https://github.com/ajay-jayaprakash-7519";
const linkedInUrl = "https://www.linkedin.com/in/ajay-jayaprakash-1482ab199/";

const navItems = [
  { label: "Github", href: githubUrl },
  { label: "LinkedIn", href: linkedInUrl },
  { label: "Email", href: gmailComposeUrl },
];
const socialItems = [
  { label: "GitHub", href: githubUrl },
  { label: "LinkedIn", href: linkedInUrl },
  { label: "CV", href: "/AjayJayaprakashCV.pdf" },
  { label: "Email", href: gmailComposeUrl },
];
const heroServices = [
  "HTML CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js/Express",
  "Vue 2/3",
  "AI/ML",
  "Tailwind CSS",
  "Git",
  "Figma",
  "Python",
  "MongoDB",
  "GSAP",
  "Storybook",
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const cvItem = socialItems.find((item) => item.label === "CV");
  const menuSocialItems = socialItems.filter((item) => item.label !== "CV");

  useEffect(() => {
    let finishTimer: ReturnType<typeof setTimeout> | undefined;
    const progressTimer = setInterval(() => {
      setLoadingProgress((prev) => {
        const nextValue = Math.min(prev + 2, 100);

        if (nextValue === 100) {
          clearInterval(progressTimer);
          finishTimer = setTimeout(() => setIsInitialLoading(false), 180);
        }

        return nextValue;
      });
    }, 38);

    return () => {
      clearInterval(progressTimer);
      if (finishTimer) {
        clearTimeout(finishTimer);
      }
    };
  }, []);

  useEffect(() => {
    if (isInitialLoading) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-glow]").forEach((el, idx) => {
        gsap.fromTo(
          el,
          { xPercent: idx % 2 ? 8 : -8, opacity: 0.25 },
          {
            xPercent: idx % 2 ? -10 : 10,
            opacity: 0.72,
            ease: "none",
            scrollTrigger: {
              trigger: pageRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          },
        );
      });

      gsap.fromTo(
        "[data-hero-headline]",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.95, ease: "power2.out" },
      );
    }, pageRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isInitialLoading]);

  if (isInitialLoading) {
    return (
      <div className={styles.loaderScreen} role="status" aria-live="polite">
        <div className={styles.loaderCard}>
          <img
            src="/dietCoke.png"
            width={120}
            height={120}
            alt="Diet Coke can"
            className={styles.loaderImage}
          />
          <p className="text-black! text-center">
            Oh shit! One sec dont leave im getting the website together
          </p>
          <div className={styles.loaderBarTrack} aria-hidden>
            <div
              className={styles.loaderBarFill}
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className={styles.loaderPercent}>{loadingProgress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className={styles.page}>
      <div className={styles.pageGlows} aria-hidden>
        <span className={styles.sideGlowLeft} data-glow />
        <span className={styles.sideGlowRight} data-glow />
      </div>
      <main className={styles.container}>
        <section className={styles.hero}>
          <header className={styles.heroHeader}>
            <p className={styles.logo}>AJAY JAYAPRAKASH</p>
            <div className="flex items-center gap-2 justify-between w-full">
              <nav className={styles.pillNav} aria-label="Main">
                {navItems.map((item) => (
                  <a
                    className="hover:bg-zinc-100! text-sm! md:text-base! transition-all duration-300 hover:scale-105 cursor-pointer rounded-full px-2! md:px-3! py-1"
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer">
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className={styles.heroSocials}>
                {cvItem ? (
                  <a
                    className="bg-orange-500! ring-2 ring-orange-300/50 border-orange-600! shadow border hover:ring-orange-300! hover:bg-orange-600! w-8 h-8 flex items-center justify-center text-xs! transition-all duration-300 hover:scale-105 text-white! cursor-pointer rounded-full"
                    href={cvItem.href}
                    download="AjayJayaprakashCV.pdf"
                    aria-label={cvItem.label}>
                    {cvItem.label}
                  </a>
                ) : null}
                <div className="relative">
                  <button
                    className="cursor-pointer ring-2 ring-zinc-200/50 border-zinc-300!"
                    type="button"
                    aria-label="Menu"
                    aria-expanded={isSocialMenuOpen}
                    aria-haspopup="menu"
                    onClick={() => setIsSocialMenuOpen((prev) => !prev)}>
                    =
                  </button>
                  {isSocialMenuOpen ? (
                    <div
                      role="menu"
                      className="absolute right-0 mt-2 z-20 flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg">
                      {menuSocialItems.map((item) => (
                        <a
                          className="px-3! py-1 flex items-center  text-xs! transition-all duration-300 hover:scale-105 text-black! cursor-pointer rounded-full"
                          key={item.label}
                          href={item.href}
                          target={item.href === "#" ? undefined : "_blank"}
                          rel={item.href === "#" ? undefined : "noreferrer"}
                          aria-label={item.label}
                          role="menuitem"
                          onClick={() => setIsSocialMenuOpen(false)}>
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </header>

          <div className={styles.heroMain} data-hero-headline>
            <h1>
              EXPLORE MY
              <br />
              PORTFOLIO
            </h1>
            <img
              src="/dietCoke.png"
              alt="bobbleHead"
              className="absolute -top-4 rotate-15 left-0 w-12 md:w-32 md:bottom-0 md:right-4 xl:-top-10"
            />
            <img
              src="/bobbleHead.png"
              alt="bobbleHead"
              className="absolute top-18 hidden md:block right-4 w-20 md:w-32 md:bottom-0 md:right-4"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-4 pt-6">
            <p className="text-xl! md:text-2xl! bg-linear-to-r from-orange-500 to-yellow-300 text-transparent bg-clip-text uppercase font-semibold w-full text-center">
              Senior Frontend Developer
            </p>
            <p className="text-xl! font-medium w-full pt-1 text-center">
              Passionate about scalable, high-performance web experiences and
              intuitive user interfaces.
            </p>
          </div>

          <div className="px-4 py-6 w-full h-full flex items-center gap-4 flex-wrap  justify-center">
            {heroServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 border border-zinc-200 px-4 py-1 rounded-full">
                <span className="w-1.5 h-1.5 ring-2 ring-orange-200 bg-orange-600 rounded-full"></span>
                <span className="whitespace-nowrap font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} data-reveal>
          <h2 className={styles.heading}>MY EXPERIENCE</h2>
          <div className={styles.grid}>
            {experiences.map((item) => (
              <article key={item.role} className={styles.infoCard}>
                <div className={styles.marker}>✶</div>
                <div>
                  <p className={styles.meta}>{item.years}</p>
                  <h3>{item.role}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} data-reveal>
          <h2 className={styles.heading}>PROJECTS</h2>
          <div className={styles.awards}>
            {projects.map((item, idx) => (
              <article key={item.title} className={styles.awardCard}>
                <div className={styles.awardTop}>
                  <h3 className="text-2xl!">{item.title}</h3>
                  <span>[0{idx + 1}]</span>
                </div>
                <p className={styles.meta}>{item.subtitle}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} data-reveal>
          <h2 className={styles.heading}>SKILLS</h2>
          <div className={styles.approach}>
            <div className={styles.timeline}>
              {steps.map((step, idx) => (
                <article key={step.title} className={styles.step}>
                  <span className="text-center">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  {idx < steps.length - 1 ? <i aria-hidden /> : null}
                </article>
              ))}
            </div>
            <div className={styles.preview}>
              <div className={styles.previewCard}>
                <h3 className="font-semibold!">Profile Snapshot</h3>

                <div className={styles.previewBlock}>
                  <p className={styles.previewLabel}>Education</p>
                  <p>
                    <strong>BA.LLB (Hons)</strong>
                    <br />
                    REVA University, Yelahanka (2017-2022)
                  </p>
                  <p>
                    <strong>Pre-University (11th &amp; 12th)</strong>
                    <br />
                    Presidency College Hebbal (2015-2017)
                  </p>
                </div>

                <div className={styles.previewBlock}>
                  <p className={styles.previewLabel}>Focus</p>
                  <p>
                    Product-minded frontend developer with 4+ years of hands-on
                    experience building scalable, user-focused web interfaces.
                  </p>
                </div>

                <div className={styles.previewBlock}>
                  <p className={styles.previewLabel}>Contact</p>
                  <p>
                    <a href={gmailComposeUrl} target="_blank" rel="noreferrer">
                      ajayjayaprakash8@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                      github.com/ajay-jayaprakash-7519
                    </a>
                  </p>
                  <p>
                    <a href={linkedInUrl} target="_blank" rel="noreferrer">
                      linkedin.com/in/ajay-jayaprakash-1482ab199
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} data-reveal>
          <h2 className={styles.heading}>FREELANCE PROJECTS</h2>
          <div className={styles.freelanceGrid}>
            {freelanceProjects.map((project, idx) => (
              <article key={project.title} className={styles.freelanceCard}>
                <div className={styles.freelanceTop}>
                  <h3 className="text-2xl!">{project.title}</h3>
                  <span>[0{idx + 1}]</span>
                </div>
                <p className={styles.meta}>{project.scope}</p>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.footerAction}>
          <button
            className="cursor-pointer md:text-4xl! text-2xl!"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
            aria-label="Back to Top">
            Back to Top
          </button>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={styles.sideIcons}>
            <button type="button" aria-label="Expand">
              ↗
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
