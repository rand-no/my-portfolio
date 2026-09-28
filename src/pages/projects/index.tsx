import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Head>
        <title>Projects | Rand Nomairi</title>
        <meta name="description" content="Selected telecom data engineering and AI projects." />
      </Head>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Portfolio</p>
            <h1 className="mt-3 text-4xl font-bold text-white">Projects</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              A focused set of telecom engineering and automation work. Each card links to a dedicated page with more detail.
            </p>
          </div>
          <Link href="/" className="inline-flex w-fit items-center justify-center rounded-full border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
            Back home
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
