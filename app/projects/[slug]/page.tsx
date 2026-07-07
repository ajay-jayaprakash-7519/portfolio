import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>
          ← Back
        </Link>

        <header className={styles.header}>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <h1 className={styles.title}>{project.title}</h1>
        </header>

        <div className={styles.techRow}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techTag}>
              {t}
            </span>
          ))}
        </div>

        <p className={styles.details}>{project.details}</p>

        {project.image ? (
          <div className={styles.screenshotWrap}>
            <img src={project.image} alt={project.title} />
          </div>
        ) : (
          <div className={styles.screenshotsPlaceholder}>
            <p>Screenshots coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
