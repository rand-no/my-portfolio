import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'
import { getProjectBySlug, projects, type Project } from '../../data/projects'

export default function ProjectDetailPage({ project }: { project: Project }) {
  const apiConfig = project.apiShowcase
  const playgroundConfig = project.playground
  const [question, setQuestion] = useState(playgroundConfig?.defaultQuestion ?? '')
  const [topK, setTopK] = useState(playgroundConfig?.defaultTopK ?? 3)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [result, setResult] = useState('')
  const [responseJson, setResponseJson] = useState('')

  const faqEndpoint = apiConfig ? `${apiConfig.baseUrl}/faq` : ''

  async function runPlayground() {
    if (!apiConfig || !playgroundConfig || !faqEndpoint) {
      return
    }

    setLoading(true)
    setErrorMessage('')
    setResult('')
    setResponseJson('')

    try {
      const response = await fetch(faqEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, top_k: topK }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()
      setResult(data.answer ?? '')
      setResponseJson(JSON.stringify(data, null, 2))
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Head>
        <title>{project.title} | Rand Nomairi</title>
        <meta name="description" content={project.description} />
      </Head>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
          <FiArrowLeft /> Back to projects
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.85)]">
          <img src={project.image} alt={project.title} className="h-72 w-full object-cover" />
          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{project.status}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{project.role}</p>
                <h1 className="mt-3 text-4xl font-bold text-white">{project.title}</h1>
              </div>
              <div className="flex gap-3 text-slate-400">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
                    <FiGithub size={20} />
                  </a>
                ) : null}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer noopener" className="transition hover:text-white">
                    <FiExternalLink size={20} />
                  </a>
                ) : null}
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">{project.description}</p>
            {project.outcome ? (
              <div className="mt-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-cyan-100">
                {project.outcome}
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 ring-1 ring-white/10">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300">
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-5">
              {project.sections.map((section) => (
                <div key={section.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                  <p className="mt-3 text-slate-300 leading-7">{section.body}</p>
                  {section.bullets ? (
                    <div className="mt-4 space-y-3 text-slate-300">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {project.apiShowcase ? (
              <div className="mt-8 rounded-[1.75rem] border border-cyan-500/20 bg-cyan-500/10 p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Live Demo</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{project.apiShowcase.title}</h2>
                  </div>
                  <p className="text-sm text-cyan-100/90">Base URL: {project.apiShowcase.baseUrl}</p>
                </div>

                <p className="mt-4 max-w-3xl text-slate-200 leading-7">{project.apiShowcase.description}</p>

                <div className="mt-6 grid gap-3">
                  {project.apiShowcase.endpoints.map((endpoint) => (
                    <div key={`${endpoint.method}-${endpoint.path}`} className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                        <span className="inline-flex w-fit rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-slate-950">
                          {endpoint.method}
                        </span>
                        <span className="font-mono text-sm text-cyan-100">{endpoint.path}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{endpoint.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Request Example</h3>
                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words text-sm leading-7 text-slate-200">{project.apiShowcase.requestExample}</pre>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Response Example</h3>
                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words text-sm leading-7 text-slate-200">{project.apiShowcase.responseExample}</pre>
                  </div>
                </div>

                {project.playground ? (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">{project.playground.title}</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{project.playground.promptLabel}</h3>
                      </div>
                      <p className="text-sm text-slate-400">POST {faqEndpoint}</p>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-[1fr_140px_auto] md:items-end">
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-200">Question</span>
                        <textarea
                          value={question}
                          onChange={(event) => setQuestion(event.target.value)}
                          rows={4}
                          className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                          placeholder="Ask about the CDR pipeline, anomaly detection, or deployment"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-200">Top K</span>
                        <input
                          type="number"
                          min={1}
                          max={5}
                          value={topK}
                          onChange={(event) => setTopK(Number(event.target.value))}
                          className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                        />
                      </label>

                      <button
                        type="button"
                        onClick={runPlayground}
                        disabled={loading || !question.trim()}
                        className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-500"
                      >
                        {loading ? 'Running...' : project.playground.buttonLabel}
                      </button>
                    </div>

                    {errorMessage ? (
                      <div className="mt-4 rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-100">
                        {errorMessage}
                      </div>
                    ) : null}

                    {result ? (
                      <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Answer</p>
                        <p className="mt-2 text-slate-100 leading-7">{result}</p>
                      </div>
                    ) : null}

                    {responseJson ? (
                      <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/90 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Raw JSON</p>
                        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words text-sm leading-7 text-slate-200">{responseJson}</pre>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}

            {project.sourcePath ? (
              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-sm text-slate-300">
                Source folder: <span className="text-cyan-300">{project.sourcePath}</span>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}
