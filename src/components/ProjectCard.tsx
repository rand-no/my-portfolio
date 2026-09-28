import Link from 'next/link'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { type Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.85)] transition hover:-translate-y-1 hover:shadow-[0_40px_140px_-20px_rgba(15,23,42,0.95)]">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        <div className="absolute left-6 bottom-6 rounded-full bg-cyan-400/95 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
          {project.role}
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-0 mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            {project.role && (
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan-300">{project.role}</p>
            )}
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
                <FiGithub size={20} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-300 mb-3 leading-7">{project.description}</p>
        {project.outcome && (
          <div className="mb-5 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
            {project.outcome}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech: string) => (
            <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 ring-1 ring-white/10">
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-3 text-slate-300 mb-6">
          {project.features.map((feature: string, i: number) => (
            <div key={i} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.slug ? (
            <Link href={`/projects/${project.slug}`} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              View project
            </Link>
          ) : null}

          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              View demo
            </a>
          ) : (
            <button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm font-medium text-slate-500 cursor-not-allowed" disabled>
              Demo coming soon
            </button>
          )}

          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
              View code
            </a>
          ) : (
            <button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm font-medium text-slate-500 cursor-not-allowed" disabled>
              Code coming soon
            </button>
          )}
        </div>
      </div>
    </div>
  )
}